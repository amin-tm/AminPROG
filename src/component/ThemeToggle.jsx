import {useEffect, useState} from "react";
import { Sun, Moon } from "lucide-react"


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }

    }

    return (
        <button onClick={toggleTheme} className="fixed max-md:hidden left-5 top-4 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden">
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
                <Moon className="h-5 w-5 text-blue-900" />
            )}
        </button>
    );
};