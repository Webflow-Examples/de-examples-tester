import('./gh-sync.mjs').then((module) => {
  const environment = 'development' // Force development environment
  module.default(environment)
})
