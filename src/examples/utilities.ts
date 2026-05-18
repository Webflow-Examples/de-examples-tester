/* Site information and Settings */
export enum ExtensionSizeEnum {
  Large = 'large',
  Default = 'default',
  Comfortable = 'comfortable',
  Compact = 'compact',
}

export const Utilities = {
  // Site Info
  siteInfo: {
    getSiteInfo: {
      displayName: 'Get site info',
      code: async () => {
        // Get Site Information
        const siteInfo = await webflow.getSiteInfo()

        // Print Site Information
        console.log(JSON.stringify(siteInfo, null, 2))
      },
    },

    getIdToken: {
      displayName: 'Get ID token',
      code: async () => {
        // Get ID Token
        const idToken = await webflow.getIdToken()

        // Print ID Token
        console.log(idToken)
      },
    },

    checkAppMode: {
      displayName: 'Check app mode',
      code: async () => {
        const capabilities = await webflow.canForAppMode([
          webflow.appModes.canEdit,
          webflow.appModes.canDesign,
        ])

        console.log(capabilities)
      },
    },

    checkAppConnection: {
      displayName: 'Check app connection',
      code: async () => {
        // Check for current app connection
        const appConnection = await webflow.getCurrentAppConnection()
        console.log(appConnection)
      },
    },

    getLaunchContext: {
      displayName: 'Get launch context',
      code: async () => {
        const context = await webflow.getLaunchContext()
        console.log('Launch Context:', context)

        if (context) {
          const contextType = context.type
          const contextValue = context.value

          console.log('Launch Type:', contextType)
          console.log('Launch Value:', contextValue)

          // Notify user of launch context
          await webflow.notify({
            type: 'Info',
            message: `App launched via ${contextType}${contextValue ? ` with ${JSON.stringify(contextValue)}` : ''}`,
          })
        } else {
          console.log('No specific launch context')
        }
      },
    },
  },

  // Display & UI
  displayAndUI: {
    setExtensionSize: {
      displayName: 'Set extension size',
      code: async (extensionSizeEnum: ExtensionSizeEnum) => {
        // Set the extension UI size to "default", "comfortable", or "large"
        await webflow.setExtensionSize(extensionSizeEnum.id)

        console.log(`Extension UI size set to: ${extensionSizeEnum.id}`)
      },
    },

    displayCurrentMediaQuery: {
      displayName: 'Display current media query',
      code: async () => {
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
    },

    getPseudoMode: {
      displayName: 'Get pseudo mode',
      code: async () => {
        // Select a state in the designer to see the pseudo mode in the console
        const pseudoMode = await webflow.getPseudoMode()
        console.log('Pseudo Mode:', pseudoMode)
      },
    },

    notifyUser: {
      displayName: 'Notify user',
      code: async () => {
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
    },

    getElementSnapshot: {
      displayName: 'Get element snapshot',
      code: async () => {
        // Get the currently selected element
        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement) {
          // Capture a screenshot of the element
          console.log('Getting screenshot of element...')
          const screenshot = await webflow.getElementSnapshot(selectedElement)

          if (screenshot) {
            console.log('Screenshot captured successfully!')
            console.log('Base64 string:', screenshot.substring(0, 100) + '...')

            console.log(
              '%c ',
              `font-size:400px; background:url(${screenshot}) no-repeat; background-size: contain;`,
            )
          } else {
            console.log('Failed to capture screenshot')
          }
        } else {
          console.log('No element selected. Please select an element first.')
        }
      },
    },
  },

  // Subscriptions
  subscriptions: {
    subscribeSelect: {
      displayName: 'Subscribe select',
      code: async () => {
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
    },

    subscribeBreakpoint: {
      displayName: 'Subscribe breakpoint',
      code: async () => {
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
    },

    subscribePageChange: {
      displayName: 'Subscribe page change',
      code: async () => {
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
    },

    subscribeAppModes: {
      displayName: 'Subscribe app modes',
      code: async () => {
        // Subscribe to changes in the selected page
        const checkAppModes = async () => {
          const capabilities = await webflow.canForAppMode(
            Object.values(webflow.appModes),
          )
          console.log(capabilities)
        }

        const unsubscribeSelectedElement = webflow.subscribe(
          'currentappmode',
          checkAppModes,
        )
      },
    },

    subscribePseudoMode: {
      displayName: 'Subscribe pseudo mode',
      code: async () => {
        // Subscribe to changes in the pseudo mode
        const pseudoModeCallback = (pseudoMode: PseudoStateKey | null) => {
          console.log('Pseudo Mode:', pseudoMode)
        }

        const unsubscribePseudoMode = webflow.subscribe(
          'pseudomode',
          pseudoModeCallback,
        )
      },
    },

    subscribeSelectedVariant: {
      displayName: 'Subscribe selected variant',
      code: async () => {
        // Subscribe to variant selection changes on the component canvas
        const unsubscribe = webflow.subscribe('selectedvariant', (variant) => {
          console.log('Selected variant:', variant.name)
          console.log('Variant ID:', variant.id)
        })

        // Stop listening after 10 seconds
        setTimeout(unsubscribe, 10000)
      },
    },
  },
}
