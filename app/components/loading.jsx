'use client'

import Image from "next/image"
import { useState } from "react";
import logoSvg from '../../assets/loading.svg';
const Loading = () => {
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 8000);
    return (
        <div className="w-auto h-[450px] flex justify-center items-center">
            {isLoading ? (<Image src={logoSvg} width={50} height={50} alt="loading.." />)
                :
                (<p>no data to show</p>)
            }

        </div>
    )
}

export default Loading