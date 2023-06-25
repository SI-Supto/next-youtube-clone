'use client'
import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react"
import { BsChevronDown } from 'react-icons/bs'
import Image from "next/image"
import { useState } from "react"

const SignInBtn = () => {
    const { data } = useSession()
    const [isShowDropdown, setIsShowDropdown] = useState(false)
    if (data?.user) {
        return (
            <div className="flex items-center gap-3 mr-2 cursor-pointer relative"
                onClick={() => setIsShowDropdown(!isShowDropdown)}
            >
                <Image
                    src={data?.user?.image}
                    width={40}
                    height={40}
                    alt="profile_img"
                    className="rounded-full"
                />
                <BsChevronDown
                    size={14}
                    color="#fff"
                    className={`${isShowDropdown ? 'rotate-180' : 'rotate-0'} transition font-bold`}
                />
                {isShowDropdown &&
                    <div className="fixed flex flex-col rounded-sm gap-2 z-[1200] ring-1 ring-gray-300 bg-slate-800 px-2 py-2 top-[58px] right-[13px]">
                        <div className="flex items-center gap-2 hover:bg-slate-500 transition px-2 rounded-sm">
                            <Image
                                src={data?.user?.image}
                                width={35}
                                height={35}
                                alt="profile_img"
                                className="rounded-full"
                            />
                            <p className="text-sm">{data?.user?.name}</p>
                        </div>
                        <div onClick={() => { signOut() }}
                            className="hover:bg-slate-500 transition px-2 rounded-sm"
                        >
                            <p className="text-sm text-center">sign out</p>
                        </div>
                    </div>
                }
            </div>)
    }
    return (
        <>
            <button
                onClick={() => { signIn() }}
                className='
                ring-1
                ring-blue-600
                text-blue-600
                hover:text-blue-500
                hover:ring-blue-500
                py-[3px]
                px-[10px]
                rounded-sm
                transition
                '
            >
                sign in
            </button>
        </>
    )
}

export default SignInBtn