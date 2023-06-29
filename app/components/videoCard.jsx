import React from 'react'
import Image from 'next/image'
import { BsCheckCircleFill } from "react-icons/bs"
import Link from 'next/link'

const VideoCard = ({ data }) => {
    return (
        <div className='lg:w-[394px] w-[320px] md:w-[350px] min-h-[320px] rounded-t-2xl'>
            <Link href={`/videoDetails/${data?.id?.videoId}`}>
                <div className='relative w-full h-[180px] object-contain  rounded-t-lg'>
                    <Image src={data?.snippet?.thumbnails?.high?.url}
                        alt='video_image'
                        className='object-cover rounded-t-lg'
                        fill
                        priority
                    />

                </div>
            </Link>
            <div className="content">
                <Link href={`/videoDetails/${data?.id?.videoId}`}>
                    <p>{`${data?.snippet?.title.slice(0, 60)}...` || `New videos..`}</p>
                </Link>
                <Link href={`/channelDetails/${data?.snippet?.channelId}`}>
                    <div className='flex gap-1 items-center mt-1'>
                        <p>{data?.snippet?.channelTitle}</p>
                        <BsCheckCircleFill size={12} color='#fff' />
                    </div>
                </Link>
                <Link href={`/videoDetails/${data?.id?.videoId}`}>
                    <p className=' text-sm  text-gray-400 mt-4'>{new Date(data?.snippet?.publishTime).toUTCString()}</p>
                </Link>
            </div>

        </div>
    )
}

export default VideoCard