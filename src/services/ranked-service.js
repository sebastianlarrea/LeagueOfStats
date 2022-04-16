import axios from 'axios'
import RIOT_API from '../constants/js/services-url'

axios.interceptors.response.use(response => {

    if (response?.status === 200) return response?.data?.entries

    throw new Error('La petición falló!')
})

const getUrl = (region, tier) => {

    const apiUrl = new URL(
        `${tier}${RIOT_API.QUEU}`,
        `https://${region}${RIOT_API.BASE_URL}`
    )

    apiUrl.searchParams.set('api_key', RIOT_API.API_KEY)
    return apiUrl
}

const ranked = {

    challengers: (region) => {

        const url = getUrl(region, RIOT_API.CHALLENGERS)
        return axios.get(url)
    },
    
    grandMasters: (region) => {

        const url = getUrl(region, RIOT_API.GRANDMASTERS)
        return axios.get(url)
    },

    masters: (region) => {

        const url = getUrl(region, RIOT_API.MASTERS)
        return axios.get(url)
    },
}

export default ranked
