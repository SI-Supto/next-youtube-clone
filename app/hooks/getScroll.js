import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrollYValue, setscrollYValue] = useState(null)
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setscrollYValue(scrollPosition)
    };
    const toggleMenu = () => {
        setstatement(!statement)
    }
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return scrollYValue
};
