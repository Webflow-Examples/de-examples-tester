declare module '*.d.ts?raw' {
  const content: string
  export default content
}

interface ImportMetaEnv {
  readonly VITE_ANTHROPIC_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
