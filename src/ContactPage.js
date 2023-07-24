import React, { useContext } from 'react'
import Navbar from './components/navbar'
import Contact from './components/contact'
import { ThemeContext } from './context'


const ContactPage = () => {
    const {darkMode} = useContext(ThemeContext)
  return (
    <div className={darkMode ? "dark" : ""}>
    <div className="App xs:px-3 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-30 dark:bg-gray-900">
        <Navbar/>
        <Contact/>
    </div>

    </div>
  )
}

export default ContactPage