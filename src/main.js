import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import "@fontsource/inter"; // Importing the Inter font
import examples from './examples/examples'; // Importing example functions
import Dropdown from './components/dropdown'; // Importing the Dropdown component
import "./App.css" // Importing the main CSS for the app

// Prism JS for Code Styling
import Prism from 'prismjs';
import 'prismjs/themes/prism-atom-dark.css'; // This is an example theme, choose the one you like
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';

import { SourceMapConsumer } from 'source-map';

const App = () => {
  // State variables to manage various aspects of the app
  const [selectedExampleValue, setSelectedExampleValue] = useState('');
  const [selectedFunctionName, setSelectedFunctionName] = useState('');
  const [functionCode, setFunctionCode] = useState('');
  const [functionParameters, setFunctionParameters] = useState({});
  const [parameterNames, setParameterNames] = useState([]);

  // Creating options for the first dropdown from the examples object
  const exampleOptions = Object.keys(examples).map(key => ({ value: key, label: key }));

  // Creating options for the second dropdown based on the selected example
  const selectedValueOptions = selectedExampleValue ?
    Object.keys(examples[selectedExampleValue]).map(key => ({ value: key, label: key })) : [];

  // Event handler for changes in the function parameter input field

  const handleParameterChange = (paramName, value) => {
    setFunctionParameters(prev => ({ ...prev, [paramName]: value }));
  };

  // Function to execute the selected function with the provided parameter
  const executeFunctionWithParameters = () => {
    const funcToExecute = examples[selectedExampleValue][selectedFunctionName];
    if (funcToExecute) {
      const paramValues = parameterNames.map(name => functionParameters[name]);
      funcToExecute(...paramValues);
    }
  };

  // Event handler for when an example is selected from the dropdown
  const handleValueChangeExample = (value) => {
    setSelectedExampleValue(value);
    console.log(selectedExampleValue); // Logging the selected example value
    setSelectedFunctionName(''); // Resetting the selected function name
  };

  // Event handler for when a function is selected from the dropdown
  const handleValueChangeSelectedFunction = (value) => {
    setSelectedFunctionName(value);
  };

  // Effect hook to fetch and display function code and to determine if the function requires a parameter
  useEffect(() => {

    // If there's a selected function and an example value
    if (selectedFunctionName && selectedExampleValue) {

      // Get file selected example category
      const filePath = `/public/examples/${selectedExampleValue.toLowerCase()}.ts`;
      fetch(filePath)
        .then(response => response.text())
        .then(text => {

          // Extracting the function code using regex
          const functionRegex = new RegExp(
            `(\\s*${selectedFunctionName}:\\s*async\\s*\\(.*?\\)\\s*=>\\s*{[\\s\\S]*?},)`,
            'm'
          );

          // Find the function within the text
          const match = text.match(functionRegex);
          if (match && match[1]) {
            setFunctionCode(match[1]); // Set function code

            // Checking if the function requires a parameter
            const paramsRegex = new RegExp(`${selectedFunctionName}:\\s*async\\s*\\(([^)]+)\\)`);
            const paramsMatch = match[1].match(paramsRegex);
            if (paramsMatch && paramsMatch[1]) {
              const params = paramsMatch[1].split(',').map(param => param.trim());
              setParameterNames(params);
              setFunctionParameters(params.reduce((acc, param) => ({ ...acc, [param]: '' }), {}));
            } else {
              setParameterNames([]);
              setFunctionParameters({});

              // Executing the function (without parameters)
              const funcToExecute = examples[selectedExampleValue][selectedFunctionName];
              if (funcToExecute) {
                funcToExecute();
              }
            }
          } else {
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

  useEffect(() => {
    Prism.highlightAll();
  }, [functionCode]);

  useEffect(() => {

    // Setting the size for the webflow extension
    webflow.setExtensionSize({ height: 320, width: 500 });
  }, [])


  return (
    <div>
      <h1>Welcome to the <br></br>Designer API Tester!</h1>
      <p>Select a Category</p>
      {/* Dropdown for selecting an example category */}

      <Dropdown
        options={exampleOptions}
        selectedValue={selectedExampleValue}
        onValueChange={handleValueChangeExample}
      />
      <p>Select Function to Run</p>
      {/* Dropdown for selecting a function to run */}
      <Dropdown
        options={selectedValueOptions}
        selectedValue={selectedFunctionName}
        onValueChange={handleValueChangeSelectedFunction}
      />
      {/* Input and button for functions that require a parameter */}
      {parameterNames.length > 0 && parameterNames.map(name => (
        <input
          key={name}
          type="text"
          value={functionParameters[name]}
          onChange={(e) => handleParameterChange(name, e.target.value)}
          placeholder={`Enter ${name}`}
        />
      ))}
      {parameterNames.length > 0 && (
        <button onClick={executeFunctionWithParameters}>Run Function</button>
      )}
      {/* Displaying the source code of the selected function */}
      {selectedFunctionName && (
        <div>
          <h4>Source Code:</h4>
          <pre className="small-code-block"><code className="language-typescript">{functionCode}</code></pre>
        </div>
      )}
    </div>
  );
};

// Rendering the App component into the root element
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
