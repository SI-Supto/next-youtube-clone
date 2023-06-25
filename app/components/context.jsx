'use client'

import { useState, createContext, useContext } from "react"
export const Context = createContext();
export const ContextProvider = ({ children }) => {
    const [topic, setTopic] = useState('new')

    return (
        <Context.Provider value={{ topic, setTopic }}>
            {children}
        </Context.Provider>
    )

}