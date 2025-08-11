// Test parameter extraction for setVariableMode function
const functionText = `setVariableMode: async (
  variableCollection: VariableCollection,
  variableMode: VariableMode,
) => {
  // Get Selected Element
  const selectedElement = await webflow.getSelectedElement()

  if (selectedElement?.styles) {
    // Get Styles
    const styles = await selectedElement.getStyles()
    const primaryStyle = styles?.[0] // Get the primary style

    // Set Variable Mode
    if (primaryStyle && variableCollection) {
      await primaryStyle.setVariableMode(variableCollection, variableMode)
    }
  }
}`

// Extract parameters from the function definition
const extractParameters = (functionText) => {
  const params = []
  const types = []

  // Extract parameters from the function definition
  // Handle both async and non-async functions
  const paramMatch = functionText.match(/(?:async\s*)?\(\s*([^)]*?)\s*\)/)
  if (paramMatch && paramMatch[1]) {
    const paramList = paramMatch[1].split(',')
    paramList.forEach((param) => {
      const trimmedParam = param.trim()
      if (trimmedParam) {
        const colonIndex = trimmedParam.indexOf(':')
        if (colonIndex > 0) {
          const name = trimmedParam.substring(0, colonIndex).trim()
          const type = trimmedParam.substring(colonIndex + 1).trim()
          params.push(name)
          types.push(type)
        }
      }
    })
  }

  return { params, types }
}

const result = extractParameters(functionText)
console.log('Extracted parameters:', result)
console.log('Parameter names:', result.params)
console.log('Parameter types:', result.types)
