import { parse } from 'acorn'
import tsPlugin from 'acorn-typescript'
import { transform } from 'sucrase'
import JSZip from 'jszip'

export interface ParsedFunction {
  name: string
  code: string
}

/**
 * Parse playground code and extract top-level named function declarations.
 */
export function parseTopLevelFunctions(code: string): ParsedFunction[] {
  const parser = parse as unknown as (
    input: string,
    options: Record<string, unknown>,
  ) => { body: Array<{ type: string; id?: { name: string }; start: number; end: number }> }

  let ast: ReturnType<typeof parser>
  try {
    ast = parser(code, {
      sourceType: 'module',
      ecmaVersion: 'latest',
      plugins: [tsPlugin()],
      locations: true,
    })
  } catch {
    // If TypeScript parsing fails, try plain JS
    ast = parser(code, {
      sourceType: 'module',
      ecmaVersion: 'latest',
      locations: true,
    })
  }

  const functions: ParsedFunction[] = []
  for (const node of ast.body) {
    if (node.type === 'FunctionDeclaration' && node.id?.name) {
      functions.push({
        name: node.id.name,
        code: code.slice(node.start, node.end),
      })
    }
  }
  return functions
}

/**
 * Transpile TypeScript/JSX code to plain JavaScript using Sucrase.
 */
function transpileCode(code: string): string {
  return transform(code, {
    transforms: ['typescript', 'imports'],
    jsxPragma: 'React.createElement',
    jsxFragmentPragma: 'React.Fragment',
  }).code
}

/**
 * Generate the HTML for the extension.
 */
function generateHTML(appName: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${appName}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
  <style>
    :root {
      --background1: #1e1e1e;
      --background2: #2e2e2e;
      --background3: #383838;
      --actionPrimaryBackground: #006acc;
      --actionPrimaryBackgroundHover: #187cd9;
      --actionPrimaryText: #ffffff;
      --actionSecondaryBackground: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.10) 100%);
      --actionSecondaryBackgroundHover: linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.16) 100%);
      --actionSecondaryText: #e0e0e0;
      --border1: rgba(255, 255, 255, 0.13);
      --text1: #f5f5f5;
      --text2: #bdbdbd;
      --text3: #a3a3a3;
      --font-stack: 'Inter', sans-serif;
      --border-radius: 4px;
      --boxShadows-action-colored: 0px 0.5px 1px 0px rgba(0,0,0,0.8), 0px 0.5px 0.5px 0px rgba(255,255,255,0.2) inset;
      --boxShadows-action-secondary: 0px 0.5px 1px rgba(0,0,0,0.8), inset 0px 0.5px 0.5px rgba(255,255,255,0.12);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font-stack);
      background: var(--background1);
      color: var(--text1);
      padding: 16px;
    }

    h1 {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 12px;
      letter-spacing: -0.1px;
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }

    .action-btn {
      width: 100%;
      padding: 8px 12px;
      font-size: 11.5px;
      font-weight: 500;
      font-family: var(--font-stack);
      color: var(--actionPrimaryText);
      background: var(--actionPrimaryBackground);
      border: none;
      border-radius: var(--border-radius);
      box-shadow: var(--boxShadows-action-colored);
      cursor: pointer;
      transition: background 0.15s ease;
      text-align: left;
    }

    .action-btn:hover {
      background: var(--actionPrimaryBackgroundHover);
    }

    .action-btn:active {
      opacity: 0.9;
    }

    .action-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .output-label {
      font-size: 11px;
      color: var(--text3);
      margin-bottom: 4px;
    }

    .output {
      background: var(--background2);
      border: 1px solid var(--border1);
      border-radius: var(--border-radius);
      padding: 8px;
      font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace;
      font-size: 10.5px;
      color: var(--text2);
      min-height: 60px;
      max-height: 200px;
      overflow-y: auto;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .status {
      font-size: 10.5px;
      color: var(--text3);
      margin-top: 4px;
      min-height: 16px;
    }

    .status.error { color: #ff8a8a; }
    .status.success { color: #63d489; }
  </style>
</head>
<body>
  <h1>${appName}</h1>
  <div class="actions" id="actions"></div>
  <div class="output-label">Output</div>
  <div class="output" id="output"></div>
  <div class="status" id="status"></div>
  <script src="app.js"></script>
</body>
</html>`
}

/**
 * Generate the JavaScript for the extension.
 */
function generateJS(transpiledCode: string, functions: ParsedFunction[]): string {
  const buttonSetup = functions
    .map(
      (fn) => `
  {
    const btn = document.createElement('button')
    btn.className = 'action-btn'
    btn.textContent = '${fn.name.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()).trim()}'
    btn.addEventListener('click', async () => {
      btn.disabled = true
      statusEl.textContent = 'Running ${fn.name}...'
      statusEl.className = 'status'
      try {
        await ${fn.name}()
        statusEl.textContent = 'Done'
        statusEl.className = 'status success'
      } catch (err) {
        statusEl.textContent = 'Error: ' + (err.message || err)
        statusEl.className = 'status error'
        _console.error(err)
      } finally {
        btn.disabled = false
      }
    })
    actionsEl.appendChild(btn)
  }`,
    )
    .join('\n')

  return `(function () {
  const actionsEl = document.getElementById('actions')
  const outputEl = document.getElementById('output')
  const statusEl = document.getElementById('status')

  // Console capture
  const _console = {
    log: console.log.bind(console),
    error: console.error.bind(console),
    warn: console.warn.bind(console),
    info: console.info.bind(console),
  }

  function appendOutput(prefix, args) {
    const text = args.map(function (arg) {
      if (arg instanceof Error) return arg.name + ': ' + arg.message
      if (typeof arg === 'object' && arg !== null) {
        try { return JSON.stringify(arg, null, 2) } catch (e) { return String(arg) }
      }
      return String(arg)
    }).join(' ')
    outputEl.textContent += (prefix ? '[' + prefix + '] ' : '') + text + '\\n'
    outputEl.scrollTop = outputEl.scrollHeight
  }

  console.log = function () { appendOutput('', Array.from(arguments)); _console.log.apply(null, arguments) }
  console.error = function () { appendOutput('Error', Array.from(arguments)); _console.error.apply(null, arguments) }
  console.warn = function () { appendOutput('Warn', Array.from(arguments)); _console.warn.apply(null, arguments) }
  console.info = function () { appendOutput('Info', Array.from(arguments)); _console.info.apply(null, arguments) }

  // User functions
  ${transpiledCode}

  // Create buttons
  ${buttonSetup}
})()
`
}

/**
 * Generate the webflow.json manifest.
 */
function generateManifest(appName: string): string {
  return JSON.stringify(
    {
      name: appName,
      publicDir: '.',
      size: 'default',
      apiVersion: '2',
      featureFlags: { userAbilities: true },
      appIntents: { image: ['manage'] },
      appConnections: ['manageImageElement'],
    },
    null,
    2,
  )
}

export interface BundleResult {
  html: string
  js: string
  manifest: string
  functions: ParsedFunction[]
  previewHTML: string
}

/**
 * Generate a static preview HTML with inert buttons (no JS execution).
 */
function generatePreviewHTML(appName: string, functions: ParsedFunction[]): string {
  const buttons = functions
    .map((fn) => {
      const label = fn.name
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (s) => s.toUpperCase())
        .trim()
      return `    <button class="action-btn">${label}</button>`
    })
    .join('\n')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
  <style>
    :root {
      --background1: #1e1e1e;
      --actionPrimaryBackground: #006acc;
      --actionPrimaryText: #ffffff;
      --text1: #f5f5f5;
      --text3: #a3a3a3;
      --text2: #bdbdbd;
      --background2: #2e2e2e;
      --border1: rgba(255, 255, 255, 0.13);
      --font-stack: 'Inter', sans-serif;
      --border-radius: 4px;
      --boxShadows-action-colored: 0px 0.5px 1px 0px rgba(0,0,0,0.8), 0px 0.5px 0.5px 0px rgba(255,255,255,0.2) inset;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font-stack); background: var(--background1); color: var(--text1); padding: 16px; }
    h1 { font-size: 13px; font-weight: 600; margin-bottom: 12px; }
    .actions { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
    .action-btn {
      width: 100%; padding: 8px 12px; font-size: 11.5px; font-weight: 500;
      font-family: var(--font-stack); color: var(--actionPrimaryText);
      background: var(--actionPrimaryBackground); border: none;
      border-radius: var(--border-radius); box-shadow: var(--boxShadows-action-colored);
      cursor: pointer; text-align: left;
    }
    .output-label { font-size: 11px; color: var(--text3); margin-bottom: 4px; }
    .output {
      background: var(--background2); border: 1px solid var(--border1);
      border-radius: var(--border-radius); padding: 8px;
      font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace;
      font-size: 10.5px; color: var(--text2); min-height: 40px;
    }
  </style>
</head>
<body>
  <h1>${appName}</h1>
  <div class="actions">
${buttons}
  </div>
  <div class="output-label">Output</div>
  <div class="output"></div>
</body>
</html>`
}

/**
 * Generate all bundle files from playground code.
 */
export function generateBundleFiles(
  code: string,
  appName: string,
): BundleResult {
  const functions = parseTopLevelFunctions(code)
  const transpiledCode = transpileCode(code)
  const html = generateHTML(appName)
  const js = generateJS(transpiledCode, functions)
  const manifest = generateManifest(appName)
  const previewHTML = generatePreviewHTML(appName, functions)
  return { html, js, manifest, functions, previewHTML }
}

/**
 * Create a zip blob from the bundle files.
 */
export async function createBundleZip(bundle: BundleResult): Promise<Blob> {
  const zip = new JSZip()
  zip.file('index.html', bundle.html)
  zip.file('app.js', bundle.js)
  zip.file('webflow.json', bundle.manifest)
  return zip.generateAsync({ type: 'blob' })
}

/**
 * Trigger a browser file download.
 */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
