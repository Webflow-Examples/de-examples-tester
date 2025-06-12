# Designer Typings Integration

This directory contains utilities for integrating Webflow Designer Extension typings with Monaco Editor to provide intellisense support in the playground.

## How it works

### `designerTypings.ts`

This module dynamically imports all TypeScript definition files from `../designer-extension-typings/` as raw strings using Vite's `?raw` suffix. This approach provides several benefits:

1. **Static Analysis**: All imports are statically analyzable by Vite and TypeScript
2. **Hot Module Replacement**: Changes to typing files are automatically reflected in the playground
3. **Bundle Optimization**: Vite can optimize the imports and only include what's used
4. **Type Safety**: TypeScript can verify that all typing files exist at build time

### Key Functions

- `getDesignerTypings()`: Returns a map of all typing file contents
- `configureMonacoWithDesignerTypings(monaco)`: Configures Monaco Editor with all the typings

## Usage in Components

```typescript
import { configureMonacoWithDesignerTypings } from '../utils/designerTypings'

// In a React useEffect or similar
useEffect(() => {
  if (monaco) {
    configureMonacoWithDesignerTypings(monaco)
  }
}, [monaco])
```

## Adding New Typing Files

When new `.d.ts` files are added to the `designer-extension-typings` directory:

1. Add the import statement in `designerTypings.ts`
2. Add the file to the return object in `getDesignerTypings()`

The integration will automatically pick up the new types and provide intellisense for them.

## Benefits

- **Dynamic Updates**: When typing versions are updated, the playground automatically reflects the changes
- **Full Intellisense**: Complete autocomplete, parameter hints, and type checking
- **Error Detection**: Monaco Editor will highlight type errors in user code
- **Performance**: Efficient loading and caching of type definitions
