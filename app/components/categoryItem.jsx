'use client'

const CategoryItem = ({ name, topic, setTopic }) => {
    return (
        <button
            className={`w-max rounded-md gap-2 px-[6px] py-[3.5px] md:px-[8px] ${topic === name.toLowerCase() ? 'bg-white text-black' : 'bg-[#4E4E4E] text-white'}  transition`}
            onClick={() => setTopic(name.toLowerCase())}
        >
            {name}
        </button>
    )
}

export default CategoryItem