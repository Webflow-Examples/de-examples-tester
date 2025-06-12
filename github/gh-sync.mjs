import axios from 'axios'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const repoOwner = 'victoriaplummer'
const repoName = 'examples-host'
const folderPath = './copies'
const destinationFolderPath = 'public/examples'

async function updateRepo(environment = 'production') {
  const branch = environment === 'production' ? 'main' : 'development'

  // Validate environment variables
  const authToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  if (!authToken) {
    throw new Error(
      'GITHUB_PERSONAL_ACCESS_TOKEN is not set in environment variables',
    )
  }

  // Validate folder exists
  if (!fs.existsSync(folderPath)) {
    throw new Error(`Source folder ${folderPath} does not exist`)
  }

  const headers = {
    Authorization: `token ${authToken}`,
    'Content-Type': 'application/json',
  }

  try {
    // Read the contents of the local folder
    const folderContents = fs.readdirSync(folderPath)
    if (folderContents.length === 0) {
      throw new Error(`No files found in ${folderPath}`)
    }

    console.log(`Syncing ${folderContents.length} files to ${branch} branch...`)

    // Get the latest commit SHA of the specified branch
    const commitResponse = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repoName}/commits/${branch}`,
      { headers },
    )
    const latestCommitSHA = commitResponse.data.sha

    // Create a new tree with the updated files
    const treeData = {
      base_tree: latestCommitSHA,
      tree: folderContents.map((filename) => ({
        path: path.join(destinationFolderPath, filename), // Set the destination folder path
        mode: '100644',
        type: 'blob',
        content: fs.readFileSync(path.join(folderPath, filename), 'utf-8'),
      })),
    }

    // Create a new tree with the updated files
    const treeResult = await axios.post(
      `https://api.github.com/repos/${repoOwner}/${repoName}/git/trees`,
      treeData,
      { headers },
    )

    // Create a new commit with the updated tree
    const newCommitData = {
      message: `Updated folder contents for ${environment}`,
      parents: [latestCommitSHA],
      tree: treeResult.data.sha,
    }

    const newCommitResult = await axios.post(
      `https://api.github.com/repos/${repoOwner}/${repoName}/git/commits`,
      newCommitData,
      { headers },
    )

    // Update the specified branch to point to the new commit
    const updateRefResponse = await axios.patch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/git/refs/heads/${branch}`,
      { sha: newCommitResult.data.sha },
      { headers },
    )

    if (updateRefResponse.status === 200) {
      console.log(`Folder contents updated successfully on ${branch} branch.`)
    } else {
      console.error(
        'Failed to update folder contents:',
        updateRefResponse.statusText,
      )
    }
  } catch (error) {
    console.error('Sync failed:', error.message)
    if (error.response) {
      console.error('GitHub API response:', error.response.data)
    }
    process.exit(1)
  }
}

// Execute the script when run directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
  const environment = process.argv[2] || 'production'
  updateRepo(environment)
    .then(() => console.log('Sync completed successfully'))
    .catch((error) => {
      console.error('Sync failed:', error)
      process.exit(1)
    })
}

export default updateRepo
