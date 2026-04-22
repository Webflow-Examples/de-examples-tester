export const Folders = {

  folders: {
    createNewFolder: {
      displayName: 'Create new folder',
      code: async (name: string) => {
        // Create and name new folder
        const newFolder = await webflow.createPageFolder()
        await newFolder.setName(name)

        // Print details
        const folderName = await newFolder.getName()
        console.log(folderName)
      },
    },
    getFolderName: {
      displayName: 'Get folder name',
      code: async () => {
        // Get all Pages and folders
        const pagesAndFolders = await webflow.getAllPagesAndFolders()

        for (let folder of pagesAndFolders) {
          const folderName = await folder.getName()
          const type = folder.type
          console.log(folderName, type)
        }
      },
    },
    setFolderName: {
      displayName: 'Set folder name',
      code: async (name: string) => {
        // Create and name new folder
        const newFolder = await webflow.createPageFolder()
        await newFolder.setName(name)

        // Print details
        const folderName = await newFolder.getName()
        console.log(folderName)
      },
    },
  },

  slugs: {
    getSlug: {
      displayName: 'Get slug',
      code: async () => {
        // Get all Pages and folders
        const pagesAndFolders = await webflow.getAllPagesAndFolders()

        for (let folder of pagesAndFolders) {
          const folderSlug = await folder.getSlug()
          console.log('Slug', folderSlug)
        }
      },
    },
    setSlug: {
      displayName: 'Set slug',
      code: async (slug: string) => {
        // Create and give slug to new folder
        const newFolder = await webflow.createPageFolder()
        await newFolder.setSlug(slug)

        // Print details
        const newSlug = await newFolder.getSlug()
        console.log('Slug', newSlug)
      },
    },
  },

  parents: {
    getParentFolder: {
      displayName: 'Get parent folder',
      code: async () => {
        // Get all Pages and folders
        const pagesAndFolders = await webflow.getAllPagesAndFolders()

        for (let folder of pagesAndFolders) {
          const childName = await folder.getName()
          const parent = await folder.getParent()
          const parentName = await parent?.getName()
          console.log(`Folder: ${childName}`, `Parent: ${parentName}`)
        }
      },
    },
    setParentFolder: {
      displayName: 'Set parent folder',
      code: async (folderName: string) => {
        // Get all Pages and folders
        const pagesAndFolders = await webflow.getAllPagesAndFolders()

        // Create and name new folder
        const newFolder = await webflow.createPageFolder()
        await newFolder.setName(folderName)

        for (let folder of pagesAndFolders) {
          await folder.setParent(newFolder)
        }
      },
    },
  },
}
