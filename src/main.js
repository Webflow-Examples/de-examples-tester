import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import "@fontsource/inter";
import examples from './examples/examples';
import Dropdown from './components/dropdown';


import "./App.css"

const App = () => {

  const [selectedExampleValue, setSelectedExampleValue] = useState('')
  const [selectedFunctionName, setSelectedFunctionName] = useState('')
  const [functionCode, setFunctionCode] = useState('')

  webflow.setExtensionSize({height:320, width:500})

  // Generating options for the first dropdown
  const exampleOptions = Object.keys(examples).map(key => ({ value: key, label: key }))

  // Generating options for the second dropdown based on the selected value
  const selectedValueOptions = selectedExampleValue ?
    Object.keys(examples[selectedExampleValue]).map(key => ({ value: key, label: key })) : []

  const handleValueChangeExample = (value) => {
    setSelectedExampleValue(value)
    console.log(selectedExampleValue)
    setSelectedFunctionName('')

  }

  const handleValueChangeSelectedFunction = (value) => {
    setSelectedFunctionName(value)
  }

  useEffect(() => {
    if (selectedFunctionName && selectedExampleValue) {
      const filePath = `/public/examples/${selectedExampleValue.toLowerCase()}.ts`;
      fetch(filePath)
        .then(response => response.text())
        .then(text => {

          const functionRegex = new RegExp(
            `(\\s*${selectedFunctionName}:\\s*async\\s*\\(.*?\\)\\s*=>\\s*{[\\s\\S]*?},)`,
            'm'
          );
          const match = text.match(functionRegex);
          if (match && match[1]) {
            setFunctionCode(match[1]);

            // Execute the function after successful fetch and extraction
            const funcToExecute = examples[selectedExampleValue][selectedFunctionName];
            if (funcToExecute) {
              funcToExecute();
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


  return (
    <div>
      <h1>Welcome to The Example Tester App!</h1>
      <p>Select an Example Category</p>
      <Dropdown
        options={exampleOptions}
        selectedValue={selectedExampleValue}
        onValueChange={handleValueChangeExample}
      />
      <p>Select Function to Run</p>
      <Dropdown
        options={selectedValueOptions}
        selectedValue={selectedFunctionName}
        onValueChange={handleValueChangeSelectedFunction}
      />
      {selectedFunctionName && (
        <div>
          <h3>Function Source Code:</h3>
          <pre><code className="code-javascript">{functionCode}</code></pre>
        </div>

      )}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // create a root
root.render(<App />); // render your app