export const Pages = {
  getCurrentPage: async () => {
    // Get Current Page
    const currentPage = await webflow.getCurrentPage()
    const pageName = await currentPage?.getName()

    // Print page details
    console.log(currentPage, pageName)
  },

  getAllPagesFolders: async () => {
    // Get all pages and folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()

    // Print Page Details
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
    // Get All Pages and Folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()
    const pages = pagesAndFolders?.filter((i): i is Page => i.type === 'Page')

    // Switch Page
    const newPage = pages[2]
    await webflow.switchPage(newPage)
  },

  createPage: async () => {
    // Create new page and set page name
    const newPage = (await webflow.createPage()) as Page
    await newPage.setName('My New Page')

    // Switch to new page
    await webflow.switchPage(newPage)
  },

  // Page Information

  getPageKind: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get the page
    const pageKind = await currentPage.getKind()
    console.log(`Page Category: ${pageKind}`)
  },

  getPageName: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get page name
    const pageName = await currentPage.getName()
    console.log(pageName)
  },

  setPageName: async (pageName: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set page name
    await currentPage.setName(pageName)
    console.log(pageName)
  },

  getPageTitle: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get page title
    const pageTitle = await currentPage.getTitle()
    console.log(pageTitle)
  },

  setPageTitle: async (pageTitle: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set page Title
    await currentPage.setTitle(pageTitle)
    console.log(pageTitle)
  },

  getPageDescription: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get page Description
    const pageDescription = await currentPage.getDescription()
    console.log(pageDescription)
  },

  setPageDescription: async (pageDescription: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set page Description
    await currentPage.setDescription(pageDescription)
    console.log(pageDescription)
  },

  getPageSlug: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get page slug
    const pageSlug = await currentPage.getSlug()
    console.log(pageSlug)
  },

  setPageSlug: async (slug: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set page Description
    await currentPage.setSlug(slug)
    const newSlug = await currentPage.getSlug()
    console.log('Slug', newSlug)
  },

  getCollectionId: async () => {
    try {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get Collection ID if page belongs to a collection
      const collectionId = await currentPage.getCollectionId()
      console.log(collectionId)
    } catch (error) {
      console.error([error.cause.tag, error.message])
    }
  },

  getCollectionName: async () => {
    try {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get Collection ID if page belongs to a collection
      const collectionName = await currentPage.getCollectionName()
      console.log(collectionName)
    } catch (error) {
      console.error([error.cause.tag, error.message])
    }
  },

  // Page Status and Settings

  checkIfDraft: async () => {
    // Get Current Page
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
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set page as draft
    await currentPage.setDraft(true)
    const isDraft = await currentPage.isDraft()

    // Print status
    console.log(isDraft)
  },

  checkIfPassword: async () => {
    // Get Current Page
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
    // Get Current Page
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
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get Utility Key
    const utilityKey = await currentPage.getUtilityPageKey()
    console.log('Utility Key', utilityKey)
  },

  // Open Graph Title

  checkOpenGraphTitle: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Check if page is using the Title as the Open Graph title
    const isOpenGraphTitle = await currentPage.usesTitleAsOpenGraphTitle()

    // Print results
    if (isOpenGraphTitle) {
      console.log('Page uses Title as Open Graph Title')
    } else {
      console.log('This page has a custom Open Graph Title')
    }
  },

  setTitleAsOpenGraphTitle: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set page title as open graph title
    await currentPage.useTitleAsOpenGraphTitle(true)
    const title = await currentPage.getOpenGraphTitle()
    console.log(title)
  },

  getOpenGraphTitle: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get Open Graph Title
    const openGraphTitle = await currentPage.getOpenGraphTitle()
    console.log('Open Graph Title', openGraphTitle)
  },

  setOpenGraphTitle: async (title: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set Open Graph Title
    await currentPage.setOpenGraphTitle(title)

    // Print results
    const openGraphTitle = await currentPage.getOpenGraphTitle()
    console.log('Open Graph Title', openGraphTitle)
  },

  // Open Graph Description

  checkOpenGraphDescription: async () => {
    // Get Current Page
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
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set page description open graph description
    await currentPage.useDescriptionAsOpenGraphDescription(true)
    const description = await currentPage.getOpenGraphDescription()
    console.log(description)
  },

  getOpenGraphDescription: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get Open Graph Description
    const openGraphDescription = await currentPage.getOpenGraphDescription()
    console.log('Open Graph Description', openGraphDescription)
  },

  setOpenGraphDescription: async (description: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set Open Graph Description
    await currentPage.setOpenGraphDescription(description)

    // Print results
    const openGraphDescription = await currentPage.getOpenGraphDescription()
    console.log('Open Graph Description', openGraphDescription)
  },

  // Open Graph Image

  getOpenGraphImage: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    //  Get Open Graph image and Print Details
    const openGraphImage = await currentPage.getOpenGraphImage()
    console.log(openGraphImage)
  },

  setOpenGraphImage: async (url: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    //  Set open graph image and print details
    await currentPage.setOpenGraphImage(url)
    const openGraphImage = currentPage.getOpenGraphImage()
    console.log(openGraphImage)
  },

  setOpenGraphImageAsSearchImage: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    //  Set open graph image as search image and print details
    await currentPage.useOpenGraphImageAsSearchImage(true)
    const searchImage = currentPage.getSearchImage()
    console.log()
  },

  // Search Engine Title

  checkTitleAsSearchTitle: async () => {
    // Get Current Page
    const currentPage = await webflow.getCurrentPage()

    // Check title
    const usesTitle = await currentPage?.usesTitleAsSearchTitle()

    if (usesTitle) {
      console.log('This page uses its Title as the Search Engine title')
    } else {
      console.log('This page has a custom search engine title')
    }
  },

  useTitleAsSearchTitle: async () => {
    // Get Current Page
    const currentPage = await webflow.getCurrentPage()

    // Set title as search title
    await currentPage?.useTitleAsSearchTitle(true)
  },

  getSearchEngineTitle: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get Search engine title and print details
    const searchEngineTitle = currentPage.getSearchTitle()
    console.log(searchEngineTitle)
  },

  setSearchEngineTitle: async (title: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set search engine title and print details
    await currentPage.setSearchTitle(title)
    const searchTitle = await currentPage.getSearchTitle()
    console.log(searchTitle)
  },

  // Search Engine Description

  checkSearchEngineDescription: async () => {
    // Get current page
    const currentPage = await webflow.getCurrentPage()

    // Check search engine description
    const isSearchDescription =
      await currentPage?.usesDescriptionAsSearchDescription()

    if (isSearchDescription) {
      console.log(
        'This page uses its description as the search engine description',
      )
    } else {
      console.log('This page has a custom search engine description')
    }
  },

  useDescriptionAsSearchDescription: async () => {
    // Get current page
    const currentPage = await webflow.getCurrentPage()

    // Set search description
    await currentPage.useDescriptionAsSearchDescription(true)
  },

  getSearchEngineDescription: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get search engine description and print details
    const searchEngineDescription = currentPage.getSearchDescription()
    console.log(searchEngineDescription)
  },

  setSearchEngineDescription: async (description: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set search engine description and print details
    await currentPage.setSearchDescription(description)
    const searchDescription = await currentPage.getSearchDescription()
    console.log(searchDescription)
  },

  // Search Engine Image

  checkOpenGraphImageIsSearch: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Check page status
    const isOpenGraphImageUsedForSearchEngines =
      await currentPage.usesOpenGraphImageAsSearchImage()

    // Print page status
    if (isOpenGraphImageUsedForSearchEngines) {
      console.log('Page uses Open Graph image as Search Engine Image')
    } else {
      console.log('This page has a custom Search engine image')
    }
  },

  useOpnGraphImageInSearch: async () => {
    // Get current page
    const currentPage = await webflow.getCurrentPage()

    // Set Open Graph image as search image
    await currentPage?.useOpenGraphImageAsSearchImage(true)
  },

  getSearchEngineImage: async () => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Get search engine Image and print details
    const searchEngineImage = currentPage.getSearchImage()
    console.log(searchEngineImage)
  },

  setSearchEngineImage: async (image: string) => {
    // Get Current Page
    const currentPage = (await webflow.getCurrentPage()) as Page

    // Set search engine image and print details
    await currentPage.setSearchImage(image)
    const searchImage = await currentPage.getSearchImage()
    console.log(searchImage)
  },

  // Exclude from Search

  isExcludedFromSearch: async () => {
    // Get Current Page
    const currentPage = await webflow.getCurrentPage()

    // Check if page is excluded from search engine indexing
    const isExcluded = await currentPage?.isExcludedFromSearch()

    if (isExcluded) {
      console.log('Current page is excluded from search engine indexing')
    } else {
      ;('Current page is included in search engine indexing')
    }
  },

  excludeFromSearch: async () => {
    // Get Current Page
    const currentPage = await webflow.getCurrentPage()

    // Exclude from search engine indexing
    await currentPage.excludeFromSearch(true)
  },
}
