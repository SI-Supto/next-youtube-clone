'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"
import { BsCheckCircleFill } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Loading from "./loading"
import { toast } from "react-hot-toast"

const SavedVideosData = () => {
    const [videos, setVideos] = useState([])
    const router = useRouter();

    const fetchVideoData = async () => {
        await axios.get('/api/getVideos').then((e) => {
            setVideos(e.data.savedVideos)
        })
    }
    const handleDeleteVideo = async (id) => {
        try {
            await axios.delete(`/api/deleteVideos/${id}`)
            toast.success('video deleted successfully')
            fetchVideoData()
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchVideoData();
    }, [])

    if (videos.length == 0) {
        return <Loading />
    }
    return (
        <>
            <div className="md:px-4 px-1.5  pb-4 pt-2 md:pt-4 mb-12  flex flex-row flex-wrap gap-2 justify-center md:justify-start items-center">
                {
                    videos.map((data) => {
                        return (
                            <div key={data.id} className='lg:w-[394px] sm:w-[300px] w-[300px] md:w-[350px] min-h-[320px] rounded-t-2xl'>
                                <Link href={`/videoDetails/${data.videoId}`}>
                                    <div className='relative w-full h-[180px] object-contain  rounded-t-lg'>
                                        <Image src={data.thumbnailUrl}
                                            alt='video_image'
                                            className='object-cover rounded-t-lg'
                                            fill
                                            priority
                                        />

                                    </div>
                                </Link>
                                <div className="content">
                                    <Link href={`/videoDetails/${data.videoId}`}>
                                        <p>{`${data.title.slice(0, 60)}...` || `New videos..`}</p>
                                    </Link>
                                    <Link href={`/channelDetails/${data.channelId}`}>
                                        <div className='flex gap-1 items-center mt-1'>
                                            <p>{data.channelTitle}</p>
                                            <BsCheckCircleFill size={12} color='#fff' />
                                        </div>
                                    </Link>
                                    <Link href={`/videoDetails/${data.videoId}`}>
                                        <p className=' text-sm  text-gray-400 mt-4'>{new Date(data.publishTime).toUTCString()}</p>
                                    </Link>
                                </div>
                                <div className="flex justify-center py-3"><RiDeleteBin6Line color='#fff' size='24' onClick={() => { handleDeleteVideo(data.id) }} /></div>
                            </div>
                        )
                    })

                }
            </div>
        </>
    )
}

export default SavedVideosData