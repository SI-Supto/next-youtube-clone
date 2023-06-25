import axios from "axios";
const options = {
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_ALTERNATIVE_RAPID_API_KEY || '',
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
};
export const FetchFromAlternativeApi = async (param) => {
    let { data } = await axios.get(`https://youtube-v3-alternative.p.rapidapi.com/${param}`, options)
    return data
}
