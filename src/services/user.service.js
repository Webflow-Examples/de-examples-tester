import axios from 'axios'
import authHeader from "./auth-header"

// Base URL for the test API endpoints.
const API_URL = 'http://localhost:8080/api/test/'

// Get ID Token from Webflow
const getIdToken = async () => {
    const idToken = await webflow.getIdToken()
    return idToken
}

// Resolve ID Token and get token from Backend App
const getAppToken = async (idToken) => {

    try{

        // Send ID Token to Backend
        const response = await axios.post( API_URL + 'webflow-user', {idToken: idToken})
        const appToken = response.data.token
        console.log(`Response: ${JSON.stringify(response.data)}`)

        try{
            localStorage.setItem("user", JSON.stringify({accessToken:appToken, firstName: response.data.firstName, email: response.data.email})) // Store App Token in Local Storage

        } catch (error) {
            console.error('No Token', error)
        }

    }
    catch{
        console.error('Error resolving ID Token:', error);
    }
}

const getSiteData = async () => {

    const sites = await axios.get( API_URL + 'resources/sites', {headers: authHeader()})
    return JSON.stringify(sites.data.sites)

}

const getCMSdata = async () => {
    return axios.get( API_URL + 'resources/cms', {headers: authHeader()})
}

const UserService = {
    getIdToken,
    getAppToken,
    getSiteData,
    getCMSdata
}

export default UserService