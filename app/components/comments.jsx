'use client'
import { useState } from "react"
import { FetchFromApi } from "../libs/fetchApi"
import Image from "next/image"

const Comments = ({ videoId }) => {
    const [commentsData, setCommentsData] = useState([])
    const [isShowComments, setIsShowComments] = useState(false)

    const handleComments = async (videoId) => {
        await FetchFromApi(`commentThreads?part=snippet&videoId=${videoId}&maxResults=50`)
            .then((e) => { setCommentsData(e.items) });
        setIsShowComments(!isShowComments)
    }
    return (
        <div className="mt-3 flex flex-col gap-4 mb-3">
            <div>
                <button
                    className="px-2 py-1 bg-gray-500 rounded-full text-sm md:text-md"
                    onClick={() => handleComments(videoId)}
                >{isShowComments ? 'Hide comments' : "Show comments"}
                </button>
            </div>
            {isShowComments &&
                <div className="flex flex-col gap-4 ">
                    {commentsData.map((data) => (
                        <div
                            key={data?.id}
                            className="flex gap-2 h-auto flex-col md:flex-row overflow-x-hidden"
                        >
                            <div className="flex items-center">
                                <Image
                                    src={`${data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}`}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    alt="author-profile"
                                />
                            </div>
                            <div className="px-3 flex flex-col gap-1">
                                <p className="text-sm ">
                                    {data?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                                </p>
                                <p className="text-sm">{data?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
                            </div>
                        </div>
                    ))}
                </div>

            }

        </div>
    )
}

export default Comments