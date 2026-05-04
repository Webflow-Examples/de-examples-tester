import type { PageInfo } from '../types/dynamic-enums'

// Types for page collections
export type PagesEnum = {
  [key: string]: PageInfo
}

// Utility function to get all pages as an enum-like object
export const getPagesEnum = async (): Promise<PagesEnum> => {
  const pagesAndFolders = await webflow.getAllPagesAndFolders()
  const pages = pagesAndFolders?.filter((i): i is Page => i.type === 'Page')
  const pagesMap: PagesEnum = {}

  await Promise.all(
    pages.map(async (page) => {
      const name = await page.getName()
      pagesMap[name] = {
        id: page.id,
        name,
        page,
      }
    }),
  )

  return pagesMap
}

// Helper function to get a specific page by name
export const getPageByName = async (
  name: string,
): Promise<PageInfo | undefined> => {
  const pages = await getPagesEnum()
  return pages[name]
}

export const Pages = {
  // Page Management
  pageManagement: {
    getCurrentPage: async () => {
      // Get current page
      const currentPage = await webflow.getCurrentPage()
      const pageName = await currentPage?.getName()

      // Print page details
      console.log(currentPage, pageName)
    },

    getAllPagesFolders: async () => {
      // Get all pages and folders
      const pagesAndFolders = await webflow.getAllPagesAndFolders()

      // Print page details
      const pages = pagesAndFolders?.filter((i) => i.type === 'Page')
      await Promise.all(
        pages.map(async (page) => {
          const pageName = await page.getName()
          console.log(`Page: ${pageName}`)
        }),
      )

      const folders = pagesAndFolders?.filter((i) => i.type === 'PageFolder')
      await Promise.all(
        folders.map(async (folder) => {
          const folderName = await folder.getName()
          console.log(`Folder: ${folderName}`)
        }),
      )
    },

    switchPage: async () => {
      // Get all pages and folders
      const pagesAndFolders = await webflow.getAllPagesAndFolders()
      const pages = pagesAndFolders?.filter((i): i is Page => i.type === 'Page')

      // Switch page
      const newPage = pages[2]
      await webflow.switchPage(newPage)
    },

    createNewPage: async () => {
      // Create new page and set page name
      const newPage = await webflow.createPage()
      if (!newPage) return

      // Set page name and switch to it
      await newPage.setName('My New Page')
      await webflow.switchPage(newPage)
    },
  },

  // Page Information
  pageInformation: {
    getPageKind: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get the page
      const pageKind = await currentPage.getKind()
      console.log(`Page Category: ${pageKind}`)
    },

    getPageName: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get page name
      const pageName = await currentPage.getName()
      console.log(pageName)
    },

    setPageName: async (pageName: string) => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page name
      await currentPage.setName(pageName)
      console.log(pageName)
    },

    getPageTitle: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get page title
      const pageTitle = await currentPage.getTitle()
      console.log(pageTitle)
    },

    setPageTitle: async (pageTitle: string) => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page Title
      await currentPage.setTitle(pageTitle)
      console.log(pageTitle)
    },

    getPageDescription: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get page description
      const pageDescription = await currentPage.getDescription()
      console.log(pageDescription)
    },

    setPageDescription: async (pageDescription: string) => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page Description
      await currentPage.setDescription(pageDescription)
      console.log(pageDescription)
    },

    getPageSlug: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get page slug
      const pageSlug = await currentPage.getSlug()
      console.log(pageSlug)
    },

    setPageSlug: async (slug: string) => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page description
      await currentPage.setSlug(slug)
      const newSlug = await currentPage.getSlug()
      console.log('Slug', newSlug)
    },
  },

  // Collection Information
  collectionInformation: {
    getCollectionId: async () => {
      try {
        // Get current page
        const currentPage = (await webflow.getCurrentPage()) as Page

        // Get Collection ID if page belongs to a collection
        const collectionId = await currentPage.getCollectionId()
        console.log(collectionId)
      } catch (err) {
        const error = err as { cause: { tag: string }; message: string }
        console.error([error.cause.tag, error.message])
      }
    },

    getCollectionName: async () => {
      try {
        // Get current page
        const currentPage = (await webflow.getCurrentPage()) as Page

        // Get Collection ID if page belongs to a collection
        const collectionName = await currentPage.getCollectionName()
        console.log(collectionName)
      } catch (err) {
        const error = err as { cause: { tag: string }; message: string }
        console.error([error.cause.tag, error.message])
      }
    },
  },

  // Page Status
  pageStatus: {
    checkIfDraft: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check page status
      const isDraft = await currentPage.isDraft()

      // Print page status
      if (isDraft) {
        console.log('Page is draft')
      } else {
        console.log('Page is not a draft')
      }
    },

    setAsDraft: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page as draft
      await currentPage.setDraft(true)
      const isDraft = await currentPage.isDraft()

      // Print status
      console.log(isDraft)
    },

    checkIfPassword: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check if current page is the homepage
      const isPasswordProtected = await currentPage.isPasswordProtected()

      if (isPasswordProtected) {
        console.log('Current page is PasswordProtected')
      } else {
        console.log('Current page is not PasswordProtected')
      }
    },

    isPageHomePage: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check if current page is the homepage
      const isHomepage = await currentPage.isHomepage()

      if (isHomepage) {
        console.log('Current page is the Homepage')
      } else {
        console.log('Current page is not the Homepage')
      }
    },

    getUtilityPageKey: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get Utility Key
      const utilityKey = await currentPage.getUtilityPageKey()
      console.log('Utility Key', utilityKey)
    },
  },

  // Open Graph Settings
  openGraphSettings: {
    checkOpenGraphTitle: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check if page is using the title as the Open Graph title
      const isOpenGraphTitle = await currentPage.usesTitleAsOpenGraphTitle()

      // Print results
      if (isOpenGraphTitle) {
        console.log('Page uses Title as Open Graph Title')
      } else {
        console.log('This page has a custom Open Graph Title')
      }
    },

    setTitleAsOpenGraphTitle: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page title as open graph title
      await currentPage.useTitleAsOpenGraphTitle(true)
      const title = await currentPage.getOpenGraphTitle()
      console.log(title)
    },

    getOpenGraphTitle: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get Open Graph title
      const openGraphTitle = await currentPage.getOpenGraphTitle()
      console.log('Open Graph Title', openGraphTitle)
    },

    setOpenGraphTitle: async (title: string) => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set Open Graph title
      await currentPage.setOpenGraphTitle(title)

      // Print results
      const openGraphTitle = await currentPage.getOpenGraphTitle()
      console.log('Open Graph Title', openGraphTitle)
    },

    checkOpenGraphDescription: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check page status
      const isOpenGraphDescription =
        await currentPage.usesDescriptionAsOpenGraphDescription()

      // Print page status
      if (isOpenGraphDescription) {
        console.log('Page uses Page Description as Open Graph Description')
      } else {
        console.log('This page has a custom Open Graph Description')
      }
    },

    setDescriptionAsOpenGraphDescription: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page description open graph description
      await currentPage.useDescriptionAsOpenGraphDescription(true)
      const description = await currentPage.getOpenGraphDescription()
      console.log(description)
    },

    getOpenGraphDescription: async () => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get Open Graph description
      const openGraphDescription = await currentPage.getOpenGraphDescription()
      console.log('Open Graph Description', openGraphDescription)
    },

    setOpenGraphDescription: async (description: string) => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set Open Graph description
      await currentPage.setOpenGraphDescription(description)
    },

    getOpenGraphImage: async () => {
      // Get current page
      const currentPage = await webflow.getCurrentPage() as Page

      //  Get Open Graph image and print its URL
      const openGraphImage = await currentPage.getOpenGraphImage()
      if (openGraphImage) {
        console.log(openGraphImage)
      } else {
        console.log('No Open Graph image is set for this page')
      }
    },

    setOpenGraphImage: async (url: string) => {
      // Get current page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set Open Graph image
      await currentPage.setOpenGraphImage(url)
      const openGraphImage = await currentPage.getOpenGraphImage()
      console.log(openGraphImage)
    },
  },
}
