export default function authHeader() {

    // Retrieve the user object from local storage and parse it from JSON format
    const user = JSON.parse(localStorage.getItem('user'))

    // Check if the user object exists and has the acces token property
    if (user?.accessToken) {

        // If so return an object containing the Authorization Header
        return { 'x-access-token': user.accessToken }
    } else { // If the user object doesn't exist, or doesn't have an accessToken, return empty object

        return {}
    }

}

