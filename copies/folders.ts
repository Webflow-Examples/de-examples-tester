export const Folders = {
  createNewFolder: async (name: string) => {
    // Create and name new folder
    const newFolder = await webflow.createPageFolder()
    await newFolder.setName(name)

    // Print details
    const folderName = await newFolder.getName()
    console.log(folderName)
  },
  getFolderName: async () => {
    // Get all Pages and folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()

    for (let folder of pagesAndFolders) {
      const folderName = await folder.getName()
      const type = folder.type
      console.log(folderName, type)
    }
  },
  setFolderName: async (name: string) => {
    // Create and name new folder
    const newFolder = await webflow.createPageFolder()
    await newFolder.setName(name)

    // Print details
    const folderName = await newFolder.getName()
    console.log(folderName)
  },

  getslug: async () => {
    // Get all Pages and folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()

    for (let folder of pagesAndFolders) {
      const folderSlug = await folder.getSlug()
      console.log('Slug', folderSlug)
    }
  },
  setSlug: async (slug: string) => {
    // Create and give slug to new folder
    const newFolder = await webflow.createPageFolder()
    await newFolder.setSlug(slug)

    // Print details
    const newSlug = await newFolder.getSlug()
    console.log('Slug', newSlug)
  },
  getParentFolder: async () => {
    // Get all Pages and folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()

    for (let folder of pagesAndFolders) {
      const childName = await folder.getName()
      const parent = await folder.getParent()
      const parentName = await parent?.getName()
      console.log(`Folder: ${childName}`, `Parent: ${parentName}`)
    }
  },
  setParentFolder: async (folderName: string) => {
    // Get all Pages and folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()

    // Create and name new folder
    const newFolder = await webflow.createPageFolder()
    await newFolder.setName(folderName)

    for (let folder of pagesAndFolders) {
      await folder.setParent(newFolder)
    }
  },
}
