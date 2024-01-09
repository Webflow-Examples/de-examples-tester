import React, { useState, useEffect } from 'react'
import UserService from '../services/user.service'
import DataTable from './DataTable'

const Auth = () => {

    const [idToken, setIdToken] = useState('')
    const [appToken, setAppToken] = useState('')
    const [siteData, setSiteData] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {

        // Fetch ID Token and send it to the Server
        const exchangeAndVerifyIdToken = async () => {
            try {

                // Get Token from Webflow
                const webflowToken = await UserService.getIdToken()
                setIdToken(webflowToken)

                // Send token to Webflow, and wait for a response with a JWT from our Backend App
                await UserService.getAppToken(webflowToken)
                setUser(JSON.parse(localStorage.getItem('user')))

            } catch (error) {
                console.error('Error fetching ID Token:', error);
            }
        }


        exchangeAndVerifyIdToken()
    }, [])

    const handleSiteDetails = async () => {

        try {
            const sites = await UserService.getSiteData()
            console.log(`Sites: ${sites}`)
            setSiteData(sites)
        } catch (error) {
            console.error('Error fetching Site Details:', errror)
        }
    }
    const handleCMSDetails = async () => {
        const users = await UserService.getCMSdata()

    }
    return (
        <div>
            <h2>Hello {user.firstName}</h2>
            <button onClick={handleSiteDetails}>Get Sites</button>
            {siteData.length > 0 && <DataTable data={siteData} />}
            {/* <button onClick={handleCMSDetails}>Get CMS Details</button> */}
        </div>
    )

}

export default Auth