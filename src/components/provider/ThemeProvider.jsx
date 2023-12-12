"use client";


import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


const ThemeProvider = ({ children }) => {
    const { mode } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return <div className={`theme ${mode}`}>{children}</div>;
    }
};

export default ThemeProvider;