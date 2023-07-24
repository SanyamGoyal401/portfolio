import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='my-5'>
            <div className='text-center'>
                <h2 className='text-5xl py-2 text-teal-600 dark:text-teal-200 font-medium md:text-6xl'>Munish Soni</h2>
                <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>CEO/Founder Premium Aussies</h3>
                <p className='text-lg py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto'>Experienced Professional providing tax consultancy services</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300'>
                <AiFillTwitterCircle className='cursor-pointer hover:text-cyan-500' />
                <a href={'https://www.linkedin.com/in/munish-soni-000a5353/'} target='_blank'>
                <AiFillLinkedin className='cursor-pointer hover:text-blue-700' />
                </a>
                <AiFillYoutube className='cursor-pointer hover:text-red-600' />
            </div>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full mt-10 overflow-hidden h-48 w-48 sm:h-80 sm:w-80 md:h-96 md:w-96'>
                <img src='./profile.jpeg' className='object-cover' alt='avatar' />
            </div>
        </section>
    )
}

export default Hero