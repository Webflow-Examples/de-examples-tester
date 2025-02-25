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

  try {
    // Read the contents of the local folder
    const folderContents = fs.readdirSync(folderPath)

    // Authenticate with GitHub (you might need to generate a personal access token)
    const authToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN
    const headers = {
      Authorization: `token ${authToken}`,
      'Content-Type': 'application/json',
    }

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
    console.error('An error occurred:', error)
  }
}

export default updateRepo
