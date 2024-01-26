import { useState, useEffect } from 'react';
import examples from '../examples/examples';

// Prism JS for Code Styling
import Prism from 'prismjs';
import 'prismjs/themes/prism-atom-dark.css'; // This is an example theme, choose the one you like
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';

export const useFunctionCode = (selectedFunctionName, selectedExampleValue) => {

    const [functionCode, setFunctionCode] = useState('');
    const [parameterNames, setParameterNames] = useState([]);
    const [functionParameters, setFunctionParameters] = useState({});

    useEffect(() => {

        // When there's a selected function and an example value
        if (selectedFunctionName && selectedExampleValue) {

            // Get file selected example category
            const filePath = `/public/examples/${selectedExampleValue.toLowerCase()}.ts`;
            fetch(filePath)
                .then(response => response.text())
                .then(text => {

                    // Extract the function code using regex
                    const functionRegex = new RegExp(
                        `(\\s*${selectedFunctionName}:\\s*async\\s*\\(.*?\\)\\s*=>\\s*{[\\s\\S]*?},)`,
                        'm'
                    );

                    // Find the function within the text
                    const match = text.match(functionRegex);
                    if (match && match[1]) {
                        setFunctionCode(match[1]); // Set function code

                        // Get function parameters
                        const paramsRegex = new RegExp(`${selectedFunctionName}:\\s*async\\s*\\(([^)]+)\\)`);
                        const paramsMatch = match[1].match(paramsRegex);

                        // When there are parameters set Parameter Names and Function Parameters
                        if (paramsMatch && paramsMatch[1]) {
                            const params = paramsMatch[1].split(',').map(param => param.trim());
                            setParameterNames(params);
                            setFunctionParameters(params.reduce((acc, param) => ({ ...acc, [param]: '' }), {}));
                        } else {
                            setParameterNames([]);
                            setFunctionParameters({});

                            // Get the function to execute
                            const funcToExecute = examples[selectedExampleValue][selectedFunctionName];

                            // When there's a function, execute it
                            if (funcToExecute) {
                                funcToExecute();
                            }
                        }
                    } else {

                        // Otherwise set the code to "Not Found"
                        setFunctionCode('Function code not found.');
                    }
                })
                .catch(error => {
                    console.error('Failed to fetch function source:', error);
                    setFunctionCode('');
                });
        } else {
            setFunctionCode('');
        }

    }, [selectedFunctionName, selectedExampleValue]);

    return { functionCode, parameterNames, functionParameters, setFunctionParameters };
};