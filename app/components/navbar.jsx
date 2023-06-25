'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import { useScroll } from '../hooks/getScroll'
import YoutubeIcon from '../../assets/icons8-youtube-96.png'
import SearchBar from './Searchbar'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineArrowLeft, AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import SignInBtn from './signInBtn'

const roboto = Roboto({
    weight: '500',
    subsets: ['greek']
})
const Navbar = () => {
    const [statement, setStatement] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const scrollValue = useScroll();
    return (
        <div className={`${scrollValue > 0 ? `sticky top-0 z-[800] w-full` : `relative`} bg-black h-50 transition duration-300 ease-in-out  flex ${statement ? 'justify-center' : "justify-between"} overflow-x-hidden px-[14px] py-[9px] items-center`}>
            <div className={`${statement ? 'hidden' : 'block'} flex justify-center items-center gap-2`}>
                <div className='hidden md:block relative'>
                    <div
                        className='rounded-full hover:bg-gray-500 hover:bg-opacity-70 transition p-2'
                        onClick={() => { setShowDropdown(!showDropdown) }}
                    >
                        <AiOutlineMenu size={28} color='#fff' />
                    </div>
                    <div className={`fixed top-[60px] z-[1200] ${showDropdown ? 'translate-x-[0%]' : 'translate-x-[-100%]'} transition duration-700  rounded-sm bg-black bg-opacity-60 w-full left-0 h-full`}>
                        <div className='bg-black h-full w-[190px] flex flex-col  items-start gap-2 pt-2'>
                            <div className="flex items-center w-full justify-center gap-2">
                                <MdOutlineVideoLibrary size={22} color='#fff' />
                                <p className='text-sm'>Library</p>
                            </div>
                            <Link href={'/savedVideos'} className='text-md bg-gray-500 hover:bg-gray-700 transition rounded-sm w-full flex justify-center py-3 cursor-pointer'
                                onClick={() => { setShowDropdown(!showDropdown) }}
                            >
                                Saved videos
                            </Link>
                        </div>
                    </div>
                </div>
                <Link href={'/'}>
                    <div className='logo text-2xl flex gap-1 items-center'>
                        <div>
                            <Image src={YoutubeIcon} alt="image" className='w-[41px]' />
                        </div>
                        <p className={`${roboto.className} tracking-wide md:text-2xl text-lg`}>YouTube</p>
                    </div>
                </Link>
            </div>
            <div className={`md:hidden ${statement ? 'block' : "hidden"} flex items-center gap-5`}>
                <div
                    className='back-icon cursor-pointer'
                    onClick={() => { setStatement(!statement) }}
                >
                    <AiOutlineArrowLeft color='white' size={18} />
                </div>
                <SearchBar />
            </div>

            <div className='hidden md:block' >
                <SearchBar />
            </div >

            <div className={`flex items-center gap-4 md:gap-0 ${statement ? 'hidden' : 'block'}`}>
                <div
                    className={`md:hidden cursor-pointer`}
                    onClick={() => { setStatement(!statement) }}
                >
                    <FiSearch color='white' size={18} />
                </div>
                <div className='mr-2'>
                    <SignInBtn />
                </div>
            </div>
        </div >
    )
}

export default Navbar