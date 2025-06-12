// Designer Extension Typings Loader
// This module dynamically imports all designer extension type definitions
// and provides them to Monaco Editor for intellisense support

// Import all typing files as raw strings for Monaco Editor
import indexTypes from '../designer-extension-typings/index.d.ts?raw'
import apiTypes from '../designer-extension-typings/api.d.ts?raw'
import stylesTypes from '../designer-extension-typings/styles.d.ts?raw'
import stylesGeneratedTypes from '../designer-extension-typings/styles-generated.d.ts?raw'
import pagesTypes from '../designer-extension-typings/pages.d.ts?raw'
import elementsTypes from '../designer-extension-typings/elements.d.ts?raw'
import elementsGeneratedTypes from '../designer-extension-typings/elements-generated.d.ts?raw'
import elementPresetsTypes from '../designer-extension-typings/element-presets.d.ts?raw'
import elementPresetsGeneratedTypes from '../designer-extension-typings/element-presets-generated.d.ts?raw'
import componentsTypes from '../designer-extension-typings/components.d.ts?raw'
import variablesTypes from '../designer-extension-typings/variables.d.ts?raw'
import assetsTypes from '../designer-extension-typings/assets.d.ts?raw'
import brandTypes from '../designer-extension-typings/brand.d.ts?raw'
import builderElementTypes from '../designer-extension-typings/builder-element.d.ts?raw'
import appSubscriptionTypes from '../designer-extension-typings/app-subscription.d.ts?raw'
import appModesGeneratedTypes from '../designer-extension-typings/app-modes-generated.d.ts?raw'
import appConnectionsTypes from '../designer-extension-typings/app-connections.d.ts?raw'

export interface DesignerTypings {
  [filename: string]: string
}

/**
 * Get all designer extension type definitions as a map of filename to content.
 * This provides immediate access to all typings and supports hot module replacement.
 */
export const getDesignerTypings = (): DesignerTypings => {
  return {
    'index.d.ts': indexTypes,
    'api.d.ts': apiTypes,
    'styles.d.ts': stylesTypes,
    'styles-generated.d.ts': stylesGeneratedTypes,
    'pages.d.ts': pagesTypes,
    'elements.d.ts': elementsTypes,
    'elements-generated.d.ts': elementsGeneratedTypes,
    'element-presets.d.ts': elementPresetsTypes,
    'element-presets-generated.d.ts': elementPresetsGeneratedTypes,
    'components.d.ts': componentsTypes,
    'variables.d.ts': variablesTypes,
    'assets.d.ts': assetsTypes,
    'brand.d.ts': brandTypes,
    'builder-element.d.ts': builderElementTypes,
    'app-subscription.d.ts': appSubscriptionTypes,
    'app-modes-generated.d.ts': appModesGeneratedTypes,
    'app-connections.d.ts': appConnectionsTypes,
  }
}

/**
 * Configure Monaco Editor with Webflow Designer Extension typings.
 * This adds all type definitions to Monaco's TypeScript compiler for intellisense.
 */
export const configureMonacoWithDesignerTypings = (
  monaco: typeof import('monaco-editor'),
) => {
  const typings = getDesignerTypings()

  Object.entries(typings).forEach(([filename, content]) => {
    // Add each typing file as an extra lib to Monaco for both TypeScript and JavaScript
    const uri = `file:///node_modules/@types/webflow-designer-extension/${filename}`

    monaco.languages.typescript.typescriptDefaults.addExtraLib(content, uri)
    monaco.languages.typescript.javascriptDefaults.addExtraLib(content, uri)
  })

  console.log('✅ Loaded designer extension typings:', Object.keys(typings))

  return typings
}
