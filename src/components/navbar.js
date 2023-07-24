import React, { useContext } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context';
const Navbar = () => {

    const {darkMode, setDarkMode} = useContext(ThemeContext);
    return (
        <nav className='py-5 flex justify-between'>
            <Link to={'/'}>
                <h1 className='text-xl font-burtons dark:text-white'>Munish Soni</h1>
            </Link>
            <ul className='flex items-center'>
                <li>
                    <BsFillMoonStarsFill className= {'cursor-pointer text-2xl dark:text-white'} onClick={() => setDarkMode(!darkMode)} />
                </li>
                <li>
                    <Link className='bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' to={'/contact'}>Contact</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar