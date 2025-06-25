import type { AssetInfo, DynamicEnumProvider } from '../types/dynamic-enums'
import { createDynamicEnumMap } from '../types/dynamic-enums'

// Types for asset collections
export type AssetsEnum = Record<string, AssetInfo>

// Create the assets provider
export const assetsProvider: DynamicEnumProvider<AssetInfo> = {
  getAll: async () => {
    const assets = await webflow.getAllAssets()
    return Promise.all(
      assets.map(async (asset) => ({
        id: asset.id,
        name: await asset.getName(),
        type: await asset.getMimeType(),
        data: { asset },
      })),
    )
  },
  getByName: async (name: string) => {
    const assets = await getAssetsEnum()
    return assets[name]
  },
}

// Utility function to get all assets as an enum-like object
export const getAssetsEnum = async (): Promise<AssetsEnum> => {
  const assets = await webflow.getAllAssets()
  return createDynamicEnumMap(assets, async (asset) => ({
    id: asset.id,
    name: await asset.getName(),
    type: await asset.getMimeType(),
    data: { asset },
  }))
}

// Helper function to get a specific asset by name
export const getAssetByName = async (
  name: string,
): Promise<AssetInfo | undefined> => {
  const assets = await getAssetsEnum()
  return assets[name]
}

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
  getAllAssets: async () => {
    // Get all assets
    const assets = await webflow.getAllAssets()

    // Loop to list assets in the console
    for (const asset of assets) {
      const name = await asset.getName()
      const mimeType = await asset.getMimeType()
      console.log(name, mimeType)
    }
  },
  getAssetName: async () => {
    // Get Selected Element
    const el = await webflow.getSelectedElement()

    // Check if element is selected and its type
    if (!el || el.type !== 'Image') {
      console.error('Please select an Image element on the canvas')
      await webflow.notify({
        type: 'Error',
        message: 'Please select an Image element on the canvas',
      })
    } else {
      const asset = await el.getAsset() // Get Asset
      const assetName = await asset?.getName() // Get Asset Name
      console.log(`Asset Name: ${assetName}`)
    }
  },

  getAssetMimeType: async () => {
    // Get Selected Element
    const el = await webflow.getSelectedElement()

    // Check if element is selected and its type
    if (!el || el.type !== 'Image') {
      console.error('Please select an Image element on the canvas')
      await webflow.notify({
        type: 'Error',
        message: 'Please select an Image element on the canvas',
      })
    } else {
      const asset = await el.getAsset() // Get Asset
      const assetMimeType = await asset?.getMimeType() // Get Asset MIME Type
      console.log(`Asset MIME type: ${assetMimeType}`)
    }
  },
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
      type: fileTypeEnum,
    })

    try {
      // Create and upload the asset to webflow
      const asset = await webflow.createAsset(file)
      console.log(asset)
    } catch (err) {
      const error = err as { cause: { tag: string }; message: string }
      console.error(`Cause:${error.cause.tag}`)
      console.error(`Cause:${error.message}`)
    }
  },
  getAssetById: async (asset_id: string) => {
    const asset = await webflow.getAssetById(asset_id)
    console.log('check')
    console.log(asset)
  },
  getAssetURL: async (assetId: string) => {
    // Get Asset by ID
    const asset = await webflow.getAssetById(assetId)
    console.log(asset)

    if (asset) {
      // Get asset URL
      const url = await asset.getUrl()
      console.log(`Asset URL: ${url}`)
    }
  },
  getAltText: async (asset: AssetInfo) => {
    // Get Asset by ID
    const selAsset = await webflow.getAssetById(asset.data.id)

    if (selAsset) {
      // Get asset URL
      const altText = await selAsset.getAltText()
      console.log(`Asset Alt Text: ${altText}`)
    }
  },
  setAltText: async (assetId: string, altText: string) => {
    // Get Asset by ID
    const asset = await webflow.getAssetById(assetId)
    console.log(asset)

    if (asset) {
      // Get asset URL
      const originalAltText = await asset.getAltText()
      await asset.setAltText(altText)
      const newAltText = await asset.getAltText()
      console.log(`Original Asset Alt Text: ${originalAltText}`)
      console.log(`New Asset Alt Text: ${newAltText}`)
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

  getAllAssetFolders: async () => {
    const folders = await webflow.getAllAssetFolders()
    console.log(folders)
  },

  createAssetFolder: async (name: string, parentFolderName?: string) => {
    // Get All Asset Folders
    const folders = await webflow.getAllAssetFolders()

    // Find Parent Folder by Name
    if (parentFolderName) {
      const parentFolder = await Promise.all(
        folders.map(async (folder) => {
          const folderName = await folder.getName()
          if (folderName === parentFolderName) {
            return folder
          }
          return null
        }),
      ).then((results) => results.find((folder) => folder !== null))

      // Create Asset Folder with parent folder
      if (parentFolder) {
        const newFolder = await webflow.createAssetFolder(name, parentFolder.id)
        console.log(newFolder)
      }
    } else {
      // Create Asset Folder
      const newFolder = await webflow.createAssetFolder(name)
      console.log(newFolder)
    }
  },
}
