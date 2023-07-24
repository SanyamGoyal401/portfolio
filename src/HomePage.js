import React, { useContext } from 'react'
import Education from './components/education';
import Experience from './components/experience';
import Hero from './components/hero';
import Navbar from './components/navbar';
import { ThemeContext } from './context';


const HomePage = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="App xs:px-3 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-30 dark:bg-gray-900">
                <Navbar />
                <Hero />
                <Experience />
                <Education />
            </div>
        </div>
    )
}

export default HomePage