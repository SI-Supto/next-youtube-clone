import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
const ChannelCard = ({ data: { id: { channelId }, snippet } }) => {
    return (
        <div className='lg:w-[394px] w-[320px] md:w-[350px] min-h-[320px] rounded-t-2xl'>
            <Link href={`/channelDetails/${channelId}`}>
                <div className='relative w-full image-center flex justify-center'>
                    <div className='relative w-[180px] h-[180px] object-contain  rounded-t-lg'>
                        <Image src={snippet?.thumbnails?.high?.url}
                            alt='video_image'
                            className='object-cover rounded-full'
                            fill
                            priority
                        />

                    </div>
                </div>
                <div className="relative content w-full">
                    <div className='flex justify-center items-center gap-1 mt-2'>
                        <p>{snippet?.channelTitle}</p>
                        <BsCheckCircleFill size={12} color='#fff' />
                    </div>
                    <p className=' text-sm text-center  text-gray-400 mt-4'>{snippet?.description}</p>
                </div>
            </Link>
        </div>
    )
}

export default ChannelCard