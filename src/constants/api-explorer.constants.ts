import type {
  MethodDescriptions,
  ParameterDependencies,
} from '../types/api-explorer.types'

export const METHOD_DESCRIPTIONS: MethodDescriptions = {
  elements: {
    'elementManagement.getSelectedElement':
      'Get info about the currently selected element',
    // Add more descriptions as needed
  },
}

export const PARAMETER_DEPENDENCIES: ParameterDependencies = {
  variableName: {
    dependsOn: 'collection',
  },
  // Add more dependent parameters here as needed
}

export const STALE_TIME = 5 * 60 * 1000 // 5 minutes
export const CACHE_TIME = 10 * 60 * 1000 // 10 minutes
