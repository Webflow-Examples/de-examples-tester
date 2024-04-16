export const Assets = {
  
  createAsset: async () => {
    
    // Create File Input
    const codeDiv = document.getElementById('code')

    console.log('hello world')
    console.log(`Code: ${codeDiv}`)

    if (codeDiv) {
      const fileInput = document.createElement('input')

      fileInput.type = 'file' // Set the type attribute to 'file'
      fileInput.id = 'myFileInput' // Set the id attribute
      fileInput.name = 'myFile' // Set the name attribute
      fileInput.accept = '.jpg, .png, .gif' // Set accepted file types

      // Step 3: Insert the element into the DOM
      document.body.appendChild(fileInput)
    }
  },
}
