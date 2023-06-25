'use client'
import Category from "./category";
import { useState, useEffect, useContext, Suspense } from "react";
import { Context } from "./context";
import { FetchFromApi } from "../libs/fetchApi";
import Videos from "./videos";
const Home = () => {
    const { topic } = useContext(Context)
    const [data, setData] = useState([]);
    const fetchData = async (topic) => {
        const apiResult = await FetchFromApi(`search?part=snippet&q=${topic}`)
        setData(apiResult.items)
    }
    useEffect(() => {
        fetchData(topic)
    }, [topic])
    return (
        <div className="mt-2 flex flex-col px-[14px]">
            <Category />
            <div>
                <Videos data={data} />
            </div>
        </div>
    )
}

export default Home