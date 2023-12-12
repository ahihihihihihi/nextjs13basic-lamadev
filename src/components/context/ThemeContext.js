'use client'

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        let value = "dark"
        if (localStorage.getItem("mode")) {
            value = localStorage.getItem("mode")
        };
        return value;
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        return getFromLocalStorage();
    });

    useEffect(() => {
        localStorage.setItem("mode", mode);
    }, [mode]);

    const toggle = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            {children}
        </ThemeContext.Provider>
    );
};