/* Site information and Settings */
export enum ExtensionSizeEnum {
  Large = 'large',
  Default = 'default',
  Comfortable = 'comfortable',
}

export const Webflow = {
  getSiteInfo: async () => {
    // Get Site Information
    const siteInfo = await webflow.getSiteInfo()

    // Print Site Information
    console.log('Site ID:', siteInfo.siteId)
    console.log('Site Name:', siteInfo.siteName)
    console.log('Short Name:', siteInfo.shortName)
  },

  setExtensionSize: async (extensionSizeEnum: ExtensionSizeEnum) => {
    // Set the extension UI size to "default", "comfortable", or "large"
    await webflow.setExtensionSize(extensionSizeEnum)

    console.log(`Extension UI size set to: ${extensionSizeEnum}`)
  },

  displayCurrentMediaQuery: async () => {
    const breakpointId = await webflow.getMediaQuery()

    switch (breakpointId) {
      case 'xxl':
        console.log(
          'The current view is for very large screens or high-resolution monitors.',
        )
        break
      case 'xl':
        console.log('The current view is suitable for large desktop monitors.')
        break
      case 'large':
        console.log('The current view fits standard desktop monitors.')
        break
      case 'main':
        console.log(
          'The current view is suitable for smaller desktops or large tablets.',
        )
        break
      case 'medium':
        console.log(
          'The current view is suitable for tablets and some large phones.',
        )
        break
      case 'small':
        console.log('The current view is designed for larger mobile devices.')
        break
      case 'tiny':
        console.log('The current view is for the smallest mobile devices.')
        break
    }
  },

  getIdToken: async () => {
    // Get ID Token
    const idToken = await webflow.getIdToken()

    // Print ID Token
    console.log(idToken)
  },

  notifyUser: async () => {
    // General notification
    await webflow.notify({ type: 'Info', message: 'Great work!' })

    // Error notification
    await webflow.notify({
      type: 'Error',
      message: 'Something went wrong, try again!',
    })

    // Success notification
    await webflow.notify({
      type: 'Success',
      message: 'Successfully did something!',
    })
  },

  subscribeSelect: async () => {
    // Subscribe to changes in the selected element
    const selectedElementCallback = (element: AnyElement | null) => {
      if (element) {
        console.log('Selected Element:', element)
      } else {
        console.log('No element is currently selected.')
      }
    }

    const unsubscribeSelectedElement = webflow.subscribe(
      'selectedelement',
      selectedElementCallback,
    )
  },

  subscribeBreakpoint: async () => {
    const unsubscribeMediaQuery = webflow.subscribe(
      'mediaquery',
      (breakpoint) => {
        switch (breakpoint) {
          case 'xxl':
            console.log(
              'The current view is for very large screens or high-resolution monitors.',
            )
            break
          case 'xl':
            console.log(
              'The current view is suitable for large desktop monitors.',
            )
            break
          case 'large':
            console.log('The current view fits standard desktop monitors.')
            break
          case 'main':
            console.log(
              'The current view is suitable for smaller desktops or large tablets.',
            )
            break
          case 'medium':
            console.log(
              'The current view is suitable for tablets and some large phones.',
            )
            break
          case 'small':
            console.log(
              'The current view is designed for larger mobile devices.',
            )
            break
          case 'tiny':
            console.log('The current view is for the smallest mobile devices.')
            break
          default:
            console.log('Unknown breakpoint:', breakpoint)
        }
      },
    )
  },

  subscribePageChange: async () => {
    // Subscribe to changes in the selected page
    const selectedPageCallback = async (page: Page | null) => {
      if (page) {
        let pageName = await page.getName()
        let pageSlug = await page.getSlug()
        let pageParent = await page.getParent()
        let searchDescription = await page.getSearchDescription()

        console.log(`Page Name: ${pageName}`)
        console.log(`Page Slug: ${pageSlug}`)
        console.log(`Page Description: ${searchDescription}`)
      } else {
        console.log('No element is currently selected.')
      }
    }

    const unsubscribeSelectedElement = webflow.subscribe(
      'currentpage',
      selectedPageCallback,
    )
  },

  subscribeCMSPageChange: async () => {
    // Callback for subscription
    const cmsCallback = async () => {
      const page = await webflow.getCurrentPage()
      console.log(await page.getPublishPath())
    }

    // Subscribe to changes for CMS Pages
    const unsubscribeCmsPages = webflow.subscribe('currentcmsitem', cmsCallback)
  },
}
