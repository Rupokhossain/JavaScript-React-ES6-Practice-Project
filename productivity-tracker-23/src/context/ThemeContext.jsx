import { createContext, useEffect, useState } from "react";


// 1. create context
export const ThemeContext = createContext();

// 2. create provider
export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark" ? true : false;

    });

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    // theme change hole localStorage a save kora
    useEffect (() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    );
};