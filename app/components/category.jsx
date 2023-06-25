'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { categories } from "@/utils/data";
import CategoryItem from "./categoryItem";
import { Roboto } from "next/font/google";
import { Context } from "./context";
import { useContext } from "react";
const roboto = Roboto({
    weight: "300",
    subsets: ['vietnamese']
})
const Category = () => {
    const { topic, setTopic } = useContext(Context)
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 12
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 11
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    return (
        <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            keyBoardControl={true}
            className={`font-thin ${roboto.className}`}
        >
            {categories.map((e, idx) => (
                <CategoryItem key={idx} name={e.name} topic={topic} setTopic={setTopic} />
            ))}
        </Carousel>
    )
}

export default Category

