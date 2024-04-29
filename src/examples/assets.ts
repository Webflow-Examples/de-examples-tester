export enum ValidFileTypesEnum {
  JPEG = 'image/jpeg',
  JPG = 'image/jpg',
  PNG = 'image/png',
  GIF = 'image/gif',
  SVG = 'image/svg+xml',
  BMP = 'image/bmp',
  WEBP = 'image/webp',
  PDF = 'application/pdf',
  MSWORD = 'application/msword',
  MSEXCEL = 'application/vnd.ms-excel',
  MSPOWERPOINT = 'application/vnd.ms-powerpoint',
  WORD_DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  EXCEL_XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  POWERPOINT_PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  PLAIN_TEXT = 'text/plain',
  CSV = 'text/csv',
  ODT = 'application/vnd.oasis.opendocument.text',
  ODS = 'application/vnd.oasis.opendocument.spreadsheet',
  ODP = 'application/vnd.oasis.opendocument.presentation',
  JSON = 'application/json',
}

export const Assets = {
  createAssetFromFileUpload: async (file: File) => {
    if (file) {
      const asset = await webflow.createAsset(file)

      console.log(`Asset ID: ${asset.id}`)
    }
  },
  createAssetFromURL: async (
    url: string,
    fileName: string,
    fileTypeEnum: ValidFileTypesEnum,
  ) => {
    // Fetch image from remote source and buil a Blob object
    const response = await fetch(url)
    const blob = await response.blob()
    const file = new File([blob], fileName, {
      type: 'image/png',
    })

    try {
      // Create and upload the asset to webflow
      const asset = await webflow.createAsset(file)
      console.log(asset)
    } catch (err) {
      console.error(`Cause:${err.cause.tag}`)
      console.error(`Cause:${err.message}`)
    }
  },
  getAssetById: async (asset_id: string) => {
    const asset = await webflow.getAssetById(asset_id)
    console.log('check')
    console.log(asset)
  },
  getAssetURL: async (asset_id: string) => {
    // Get Asset by ID
    const asset = await webflow.getAssetById(asset_id)
    console.log(asset)

    if (asset) {
      // Get asset URL
      const url = await asset.getUrl()
      console.log(`Asset URL: ${url}`)
    }
  },
  addAssetToCanvas: async (assetId: string) => {

    // Get Asset URL
    const asset = await webflow.getAssetById(assetId)
    const assetUrl = await asset?.getUrl()

    // Get selected element
    const selectedElement = await webflow.getSelectedElement()
    if (!selectedElement) {
      webflow.notify({ type: 'Error', message: 'Please select an element' })
      return
    }

    // Add DOM element with an image tag to selected element
    if (selectedElement.children && assetUrl) {
      const domElement = await selectedElement.append(
        webflow.elementPresets.DOM,
      )
      await domElement.setTag('img')
      await domElement.setAttribute('src', assetUrl)
    }
  },
}
