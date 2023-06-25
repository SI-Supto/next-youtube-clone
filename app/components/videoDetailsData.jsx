'use client'

import ReactPlayer from "react-player"
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FetchFromApi } from "../libs/fetchApi";
import Videos from "./videos";
import { BiLike } from "react-icons/bi"
import { BsCheckCircleFill } from 'react-icons/bs'
import Link from "next/link";
import Comments from "./comments";
import axios from "axios";
import { toast } from "react-hot-toast";

const VideoDetailsData = ({ videoId }) => {
    const { data } = useSession()
    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState([])
    const [isDescription, setIsDescription] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    const formatDate = (givenDate) => {

        let timestamp = givenDate;

        let date = new Date(timestamp);

        let options = { year: "numeric", month: "long", day: "numeric" };

        let formattedDate = date.toLocaleDateString("en-US", options);

        return formattedDate
    }

    const fetchDataFromApi = async () => {
        await FetchFromApi(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => setVideoDetail(data.items[0]))

        await FetchFromApi(`search?part=snippet&relatedToVideoId=${videoId}&type=video`)
            .then((e) => { setVideos(e.items) })

    }
    const handleSave = async (videoDetail, data) => {
        try {
            if (!data?.user) {
                await signIn();
                return
            }
            let bodyData = {
                videoId: videoDetail?.id,
                thumbnailUrl: videoDetail?.snippet?.thumbnails?.high?.url,
                title: videoDetail?.snippet?.title,
                channelId: videoDetail?.snippet?.channelId,
                channelTitle: videoDetail?.snippet?.channelTitle,
                publishTime: videoDetail?.snippet?.publishedAt
            }
            await axios.post('/api/saveVideos', bodyData)
            setIsSaved(true)
            toast.success('added successfully')
            setTimeout(() => {
                setIsSaved(false)
            }, 2000);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDataFromApi();
    }, [])
    return (
        <div className="flex lg:flex-row flex-col justify-around md:px-[14px] px-[7px] overflow-x-hidden">
            <div className="flex flex-col mt-[14px]  w-full lg:w-[70vw] h-auto ">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    className=' react-player'
                />
                <div className="video-details">
                    <p className="text-2xl md:mt-[13px] md:mb-[13px] mb-[8px] leading-tight">{videoDetail?.snippet?.localized?.title}</p>
                    <div className="flex justify-between">
                        <div className="flex gap-1 mr-7 md:mr-5 items-center md:px-3 py-1.5 md:py-2 md:bg-gray-500 rounded-full cursor-pointer">
                            <BiLike color="#fff" size={20} />
                            <p className="text-sm  tracking-wider">{parseInt(videoDetail?.statistics?.likeCount).toLocaleString()}</p>
                        </div>
                        <div>
                            <button
                                className="px-2 py-1 rounded-full bg-white text-black"
                                onClick={() => { handleSave(videoDetail, data) }}
                            >
                                {isSaved ? "saved" : '+ save'}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between md:flex-row flex-col">
                        <div className="flex gap-[8px]">
                            <p className="text-sm  tracking-wider">{parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views</p>
                            <p className="text-sm  tracking-wider">{formatDate(videoDetail?.snippet?.publishedAt)}</p>
                        </div>

                    </div>
                    <Link href={`/channelDetails/${videoDetail?.snippet?.channelId}`} className="flex items-center gap-2 mt-2">
                        <p className="text-md"> {videoDetail?.snippet?.channelTitle}</p>
                        <BsCheckCircleFill size={12} color='#fff' />
                    </Link>
                </div>
                <div className="description mt-2 overflow-x-hidden">
                    {isDescription &&
                        <p className="pt-3 md:pt-5 mr-[16px] text-sm text-gray-300">{videoDetail?.snippet?.description}</p>
                    }
                    <button className="text-blue-500"
                        onClick={() => { setIsDescription(!isDescription) }}
                    >{isDescription ? "show less" : "show more"}</button>
                </div>
                <div className="comments w-full lg:w-[70vw] ">
                    <Comments videoId={videoId} />
                </div>
            </div>
            <div className=" lg:w-[20vw] w-[100vw]">
                <Videos data={videos} />
            </div>
        </div>
    )
}

export default VideoDetailsData