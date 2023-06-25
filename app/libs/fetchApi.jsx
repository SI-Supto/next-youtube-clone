import axios from "axios";
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
