'use client '
import { useState } from "react"
import { FiSearch } from 'react-icons/fi'
import { useRouter } from "next/navigation"
const SearchBar = () => {
    const [search, setSearch] = useState('')
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/videos/${search}`)
    }
    return (
        <form onSubmit={handleSubmit} className="
        relative 
        flex 
        items-center
        gap-[1px]
        ">
            <input
                type="text"
                value={search}
                placeholder="search"
                onChange={(e) => setSearch(e.target.value)}
                className="
                w-[195px]
               md:w-[250px]
                lg:w-[400px]
                py-[8px] 
                px-[10px]
                rounded-l-full
              bg-gray-950
                text-white
                focus:ring-1
                focus:ring-white
                transition
                duration-200
                ease-in-out
                outline-none
                tracking-wide
                "
            />
            <button
                type="submit"
                className="
                py-[8px]
                px-[10px]
                bg-[#303030]
                rounded-r-full            
                "
            >
                <FiSearch
                    color="white"
                    size={20}
                />
            </button>
        </form>
    )
}

export default SearchBar