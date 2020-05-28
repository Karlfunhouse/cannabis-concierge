
const apiLink = 'https://strainapi.evanbusse.com/tPkqguz/'

export const allStrainsData = async () => {
    try {
        let response = await fetch(`${apiLink}strains/search/all`)
        let data = await response.json()
        return data
    }
    catch(error) {
        console.error(error)
    }
}

