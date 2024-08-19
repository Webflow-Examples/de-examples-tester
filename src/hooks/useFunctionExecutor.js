import { useEffect } from 'react'

const useFunctionExecutor = (
  selectedExampleCategory,
  selectedFunctionName,
  functionParameters,
  examples,
) => {
  useEffect(() => {
    if (selectedExampleCategory && selectedFunctionName) {
      const category = examples[selectedExampleCategory]
      const funcToExecute = category
        ? category[selectedFunctionName]
        : undefined

      if (funcToExecute) {
        try {
          const paramValues =
            Object.keys(functionParameters).length > 0
              ? Object.keys(functionParameters).map(
                  (name) => functionParameters[name],
                )
              : []

          if (typeof funcToExecute === 'function') {
            const result = funcToExecute(...paramValues) // Execute the function with the parameters

            if (result && typeof result.then === 'function') {
              result.catch(console.error) // Catch and log any errors for asynchronous functions
            } else {
              console.log(result) // Log the result for synchronous functions
            }
          }
        } catch (error) {
          console.error('Error executing function:', error)
        }
      }
    }
  }, [
    selectedExampleCategory,
    selectedFunctionName,
    functionParameters,
    examples,
  ])
}

export default useFunctionExecutor
