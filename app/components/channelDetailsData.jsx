'use client'
import { useState, useEffect } from 'react'
import { FetchFromApi } from '../libs/fetchApi'
import Image from 'next/image'
import { FetchFromAlternativeApi } from '../libs/fetchFromAlternativeApi'
import Videos from './videos'
import { BsCheckCircleFill } from 'react-icons/bs'

const ChannelDetailsData = ({ id }) => {
    const [channelData, setchannelData] = useState({})
    const [channelVideos, setChannelVideos] = useState([])
    const fetchChannelData = async (id) => {
        try {
            await FetchFromAlternativeApi(`channel?id=${id}`)
                .then((res) => { setchannelData(res.meta) })
            await FetchFromApi(`search?part=snippet&channelId=${id}`)
                .then((res) => { setChannelVideos(res.items) })
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchChannelData(id)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { title, image, thumbnail, subscriberCount } = channelData;

    return (
        <div>
            {/* <div className='flex justify-center items-center bg-gray-500'> */}
            {image &&
                <div className="banner-image relative w-full h-[30vh] object-center ">
                    <Image src={image?.tvBanner[3]?.url}
                        className='object-fill'
                        alt='banenr_image'
                        fill
                        priority />
                </div>
            }
            {title &&
                <div className='flex flex-col md:flex-row  px-[14px] gap-7 mt-2 md:mt-4 mb-2 md:mb-4 justify-center items-center'>
                    <div className='relative w-[128px] h-[128px] object-contain  rounded-t-lg'>
                        <Image src={thumbnail[2]?.url}
                            alt='video_image'
                            className='object-cover rounded-full'
                            fill
                            priority
                        />

                    </div>
                    <div className="content flex flex-col justify-center md:justify-start gap-2.5 text-center md:text-start">
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-2xl'>{title}</h1>
                            <BsCheckCircleFill size={12} color='#fff' />
                        </div>
                        <p>@{title}</p>
                        <p>{subscriberCount} subscribers</p>



                    </div>
                </div>
            }
            <div className='px-[14px]'>
                <Videos data={channelVideos} />
            </div>
        </div>
    )
}

export default ChannelDetailsData