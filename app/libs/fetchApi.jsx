import axios from "axios";
// const rapidApiKey = encodeURIComponent(process.env.NEXT_PUBLIC_RAPIDAPI_KEY)
// const rapidApiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY
const options = {
    params: { maxResults: '50' },
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const FetchFromApi = async (param) => {
    let { data } = await axios.get(`https://youtube-v31.p.rapidapi.com/${param}`, options)
    return data
}

// "f2eed51885mshe34b56bf7390eb3p19f831jsnd4fc60d668cb"