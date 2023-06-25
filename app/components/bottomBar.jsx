'use client'
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import Link from 'next/link'
const BottomBar = () => {
    return (
        <div className="md:hidden fixed z-[1200] bottom-0 w-full flex justify-between bg-slate-950 ring-1 ring-white py-1.5">
            <Link href={'/'} className="flex flex-col items-center flex-1 justify-center">
                <AiFillHome size={22} />
                <p className='text-xs'>Home</p>
            </Link>
            <Link href={'/savedVideos'} className="flex flex-col items-center flex-1 justify-center">
                <MdOutlineVideoLibrary size={22} color='#fff' />
                <p className='text-xs'>Library</p>
            </Link>
        </div>
    )
}

export default BottomBar