import { useState, useEffect } from 'react'
import examples from '../examples/examples'

export const useFunctionCode = (
  selectedFunctionName,
  selectedExampleCategory,
) => {
  const [functionCode, setFunctionCode] = useState('')
  const [parameterNames, setParameterNames] = useState([])
  const [parameterTypes, setParameterTypes] = useState([]) // New state to store parameter types
  const [functionParameters, setFunctionParameters] = useState({})

  useEffect(() => {
    if (selectedFunctionName && selectedExampleCategory) {
      const filePath = `https://main--thriving-zuccutto-5ad917.netlify.app/examples/${selectedExampleCategory.toLowerCase()}.ts`
      fetch(filePath)
        .then(response => response.text())
        .then(text => {
          const functionRegex = new RegExp(
            `\\s*${selectedFunctionName}:\\s*async\\s*\\((.*?)\\)\\s*=>\\s*{[\\s\\S]*?},`,
            'm'
          );

          const match = text.match(functionRegex);
          if (match) {
            setFunctionCode(match[0]);

            // Modified regex to capture parameter names and types
            const paramsRegex = new RegExp(`\\s*(\\w+)\\s*:\\s*(\\w+)`, 'g');
            const params = [];
            const types = [];
            let paramMatch;

            // Using regex.exec in a loop to find all matches
            while ((paramMatch = paramsRegex.exec(match[1]))) {
              params.push(paramMatch[1]);
              types.push(paramMatch[2]);
            }
            setParameterNames(params);
            setParameterTypes(types);
            setFunctionParameters(
              params.reduce((acc, param) => ({ ...acc, [param]: '' }), {})
            );
          } else {
            setFunctionCode('Function code not found.');
            setParameterNames([]);
            setParameterTypes([]);
            setFunctionParameters({});
          }
        })
        .catch(error => {
          console.error('Failed to fetch function source:', error);
          setFunctionCode('');
          setParameterNames([]);
          setParameterTypes([]);
          setFunctionParameters({});
        });
    }
  }, [selectedFunctionName, selectedExampleCategory]);

  useEffect(() => {
    webflow.setExtensionSize({ height: 600, width: 500 })
  }, [selectedFunctionName]);

  return {
    functionCode,
    parameterNames,
    parameterTypes, // Expose parameter types as part of the hook's return value
    functionParameters,
    setFunctionParameters,
  }
}