/// <reference types="@webflow/designer-extension-typings" />

// --- API Helper Functions ---

/**
 * Parses a Coolors URL to extract an array of hex codes.
 * @param coolorsUrl - The URL from coolors.co.
 * @returns An array of hex strings (e.g., ["861657", "a64253"]).
 */
function parseCoolorsURL(coolorsUrl) {
  return new URL(coolorsUrl).pathname.slice(1).split('-')
}

/**
 * Refines a color palette using the Huemint AI API.
 * @param hexCodes - An array of hex codes to refine.
 * @returns A promise that resolves to an array of AI-refined hex strings.
 */
async function refineWithHuemint(hexCodes) {
  const payload = {
    mode: 'transformer',
    num_colors: hexCodes.length,
    temperature: '1.2',
    num_results: 1,
    adjacency: Array(hexCodes.length ** 2).fill('60'),
    palette: hexCodes.map((hex) => `#${hex}`), // Huemint expects the '#' prefix
  }

  try {
    const response = await fetch('https://api.huemint.com/color', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok)
      throw new Error(`Huemint API error: ${response.statusText}`)
    const data = await response.json()
    // Return the hex codes without the '#' for consistency
    return data.results[0].palette.map((hex) => hex.substring(1))
  } catch (error) {
    console.error('Failed to refine palette with Huemint:', error)
    webflow.notify({
      type: 'Error',
      message: 'Could not connect to Huemint API.',
    })
    return null // Return null on failure
  }
}

/**
 * Fetches a 9-step monochrome scale from The Color API.
 * @param hex - The base hex color code (without the #).
 * @returns A promise resolving to an array of color objects.
 */
async function getColorScale(hex) {
  try {
    const response = await fetch(
      `https://www.thecolorapi.com/scheme?hex=${hex}&mode=monochrome&count=9`,
    )
    if (!response.ok) throw new Error('The Color API response not OK')
    const data = await response.json()
    return data.colors
  } catch (error) {
    console.error(`Failed to fetch color scale for #${hex}:`, error)
    return []
  }
}

/**
 * Fetches a descriptive name for a color.
 * @param hex - The hex color code (without the #).
 * @returns A promise resolving to the color's name.
 */
async function getColorName(hex) {
  try {
    const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
    if (!response.ok) throw new Error('The Color API response not OK')
    const data = await response.json()
    return data.name.value.replace(/\s+/g, '-')
  } catch (error) {
    console.error(`Failed to fetch color name for #${hex}:`, error)
    return `Color-${hex.toUpperCase()}`
  }
}

// --- Main Function ---

/**
 * Creates a complete, themed design system in Webflow by chaining three APIs:
 * 1. Parses a Coolors URL for base colors.
 * 2. Refines the palette for UI harmony with Huemint.
 * 3. Generates monochrome scales for each color with The Color API.
 * @param coolorsUrl - The URL of the starting Coolors palette.
 */
async function createAiColorSystem(coolorsUrl) {
  try {
    // Step 1: Get base colors from Coolors
    const baseHexCodes = parseCoolorsURL(coolorsUrl)
    if (!baseHexCodes.length || baseHexCodes[0] === '') {
      webflow.notify({ type: 'Error', message: 'Invalid Coolors URL.' })
      return
    }

    // Step 2: Refine the palette with Huemint
    const refinedHexCodes = await refineWithHuemint(baseHexCodes)
    if (!refinedHexCodes) return // Stop if Huemint fails

    // Step 3: Set up Webflow Collection and Modes
    const collectionName = 'Huemint AI Design System'
    let collection
    try {
      collection = await webflow.createVariableCollection(collectionName)
    } catch (e) {
      webflow.notify({
        type: 'Error',
        message: `A collection named "${collectionName}" already exists. Please delete it.`,
      })
      return
    }
    if (!collection) {
      webflow.notify({
        type: 'Error',
        message: `Could not create collection.`,
      })
      return
    }
    const lightMode = await collection.createVariableMode('Light Mode')
    const darkMode = await collection.createVariableMode('Dark Mode')

    // Step 4: Generate scales and create variables for each refined color
    for (const hex of refinedHexCodes) {
      const name = await getColorName(hex)
      const scale = await getColorScale(hex)
      if (scale.length < 9) continue

      scale.sort((a, b) => a.hsl.l - b.hsl.l).reverse()
      const sortedHexValues = scale.map((c) => c.hex.value)

      const creationPromises = sortedHexValues.map((hexValue, i) => {
        const step = (i + 1) * 100
        return collection.createColorVariable(`${name}-${step}`, hexValue)
      })
      const lightModeVars = await Promise.all(creationPromises)

      const darkModePromises = lightModeVars.map((variable, i) => {
        const invertedHexValue = sortedHexValues[8 - i]
        return variable.set(invertedHexValue, { mode: darkMode })
      })
      await Promise.all(darkModePromises)
    }

    webflow.notify({
      type: 'Success',
      message: `Created ${
        refinedHexCodes.length * 9
      } AI-refined variables in "${collectionName}"!`,
    })
  } catch (error) {
    console.error('Failed to create AI color system:', error)
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.'
    webflow.notify({
      type: 'Error',
      message: `An error occurred: ${errorMessage}`,
    })
  }
}

// Example usage:
createAiColorSystem('https://coolors.co/861657-a64253-d56aa0-bbdbb4-fcf0cc')
