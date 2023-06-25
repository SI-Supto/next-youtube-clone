'use client'
import { useEffect, useState } from "react"
import { FetchFromApi } from "../libs/fetchApi"
import Videos from "./videos"
const SearchedVideos = ({ searchTerm }) => {
    const [data, setData] = useState([])
    const fetchData = async (term) => {
        const jsonData = await FetchFromApi(`search?part=snippet&q=${term}`);
        setData(jsonData.items)
    }
    useEffect(() => {
        fetchData(searchTerm)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Videos data={data} />
    )
}

export default SearchedVideos