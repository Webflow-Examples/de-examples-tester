import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import examples from './examples/examples';
import Dropdown from './components/dropdown';
import "./App.css"

const App = () => {

  const [selectedExampleValue, setSelectedExampleValue] = useState('')
  const [selectedFunctionName, setSelectedFunctionName] = useState('')
  const [functionCode, setfunctionCode] = useState('')

  // Generating options for the first dropdown
  const exampleOptions = Object.keys(examples).map(key => ({value: key, label: key}))

  // Generating options for the second dropdown based on the selected value
  const selectedValueOptions = selectedExampleValue ? 
  Object.keys(examples[selectedExampleValue]).map( key => ({value:key, label:key})) : []

  const handleValueChangeExample = (value) => {
    setSelectedExampleValue(value)
    console.log(selectedExampleValue)
    setSelectedFunctionName('')

  }

  const handleValueChangeSelectedFunction = (value) => {
    setSelectedFunctionName(value)
  }

  useEffect(() => {
    if (selectedFunctionName) {
        // Retrieve and execute the function
        const funcToExecute = examples[selectedExampleValue][selectedFunctionName];
        if (funcToExecute) {
            funcToExecute();
            setfunctionCode(funcToExecute.toString())
        }
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
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // create a root
root.render(<App />); // render your app