import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

// Import hooks
import { useFunctionCode } from './hooks/useFunctionCode'

// Import Components
import examples from './examples/examples'
import Dropdown from './components/dropdown' // Importing the Dropdown component
import ParameterInput from './components/parameterInput'
import enums from './examples/enums';


// Import Styling
// import './App.css' // Importing the main CSS for the app
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'

const App = () => {
  // State variables to manage various aspects of the app
  const [selectedExampleCategory, setSelectedExampleCategory] = useState('')
  const [selectedFunctionName, setSelectedFunctionName] = useState('')
  const {
    functionCode,
    parameterNames,
    parameterTypes,
    functionParameters,
    setFunctionParameters,
  } = useFunctionCode(selectedFunctionName, selectedExampleCategory)

  // Creating options for the dropdowns
  const exampleCategories = Object.keys(examples).map((key) => ({
    value: key,
    label: key,
  }))
  const functionSelections = selectedExampleCategory
    ? Object.keys(examples[selectedExampleCategory]).map((key) => ({
      value: key,
      label: key,
    }))
    : []

  // Event Handlers
  const handleCategoryChange = (value) => {
    setSelectedExampleCategory(value);
    setSelectedFunctionName('');
  };

  const handleFunctionChange = (value) => {
    setSelectedFunctionName(value);
  };

  const handleParameterChange = (paramName, value) => {
    setFunctionParameters((prev) => ({ ...prev, [paramName]: value }));
  };

  const handleFunctionExecutionWithParameters = () => {
    const funcToExecute = examples[selectedExampleCategory][selectedFunctionName];
    if (funcToExecute) {
      try {
        const paramValues = parameterNames.map((name) => functionParameters[name]);
        funcToExecute(...paramValues);
      } catch (error) {
        console.error('Error executing function:', error);
      }
    }
  };

const enumToArray = (enumObj) => Object.values(enumObj);

  useEffect(() => {
    Prism.highlightAll();
  }, [functionCode]);

  useEffect(() => {
    webflow.setExtensionSize({ height: 425, width: 500 });
  }, []);

  return (
    <div id="container" className="container u-pt-1">
      <h1 className="strong h2">Webflow <br/>Designer API Playground</h1>
      <p>Select an API category</p>
      <Dropdown
        options={exampleCategories}
        selectedValue={selectedExampleCategory}
        onValueChange={handleCategoryChange}
      />
      <p>Select an API method</p>
      <Dropdown
        options={functionSelections}
        selectedValue={selectedFunctionName}
        onValueChange={handleFunctionChange}
      />
      <div id="inputs" className="w-container">
        {parameterNames.length > 0 && parameterNames.map((name, index) => (
          <ParameterInput
            key={name}
            name={name}
            inputType={parameterTypes[index].includes('Enum') ? 'enum' : parameterTypes[index]}
            placeholder={`Enter ${name}`}
            onChange={handleParameterChange}
            datalistId={parameterTypes[index].includes('Enum') ? `${name}` : undefined}
            options={parameterTypes[index].includes('Enum') ? enumToArray(enums[parameterNames[index]]) : undefined} // Adjust options based on real enum values
          />
        ))}
        {parameterNames.length > 0 && (
          <button onClick={handleFunctionExecutionWithParameters} className="button cc-primary">
            Run Function
          </button>
        )}
      </div>
      {selectedFunctionName && (
        <div id="code" className="w-container">
          <div className="u-pt-1"></div>
          <label>Source Code</label>
          <p><small><i>Open your browser’s console to view the output of the function.</i></small></p>
          <pre className="small-code-block">
            <code className="language-typescript">{functionCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);