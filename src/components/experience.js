import React from 'react'

const Experience = () => {
    return (
        <section className='my-10'>
            <div>
                <h3 className='text-3xl dark:text-white font-medium'>Services I offer</h3>
                <p className='text-lg py-2 leading-8 text-gray-800 dark:text-gray-200'>
                    I run ITP Accounting professionals where we provide Australians with the best quality tax preparation service at the best possible price.
                    <span className="text-teal-500"> Our Service </span>
                    is simple, quick, and stress-free. Your tax return can be completed in just one visit and at <span className="text-teal-500">highly competitive rates.</span>
                </p>
            </div>
            <h3 className='my-5 text-3xl font-medium dark:text-white'>Experiences</h3>
            <div className='flex flex-col my-5 sm:flex-row sm:flex-wrap gap-10'>
                <div className='shadow-2xl basis-1/3 flex-1 rounded-xl my-5 p-5 dark:bg-gray-300'>
                    <div className="flex p-8 items-center justify-center">
                        <img src="./apl.png" className="h-28 w-28" alt="apl"></img>
                    </div>
                    <p className='text-lg font-medium'>Member Board of Directors</p>
                    <p className='text-lg'>American Premier League</p>
                    <p className='text-lg'>Feb 2023 - Present. 6 months</p>
                    <p className='text-lg'>United States. Hybrid</p>
                </div>
                <div className='shadow-2xl basis-1/3 flex-1 rounded-xl my-5 p-5 dark:bg-gray-300'>
                    <div className="flex p-8 items-center justify-center">
                        <img src="./itp.jpg" className="h-28 w-28" alt="itp1"></img>
                    </div>
                    <p className='text-lg font-medium'>Director</p>
                    <p className='text-lg'>ITP Accounting professionals NT(Darwin)</p>
                    <p className='text-lg'>Jan 2020 - Present. 3 Years 7 Months</p>
                    <p className='text-lg'>Australia</p>
                </div>
                <div className='shadow-2xl basis-1/3 flex-1 rounded-xl my-5 p-5 dark:bg-gray-300'>
                    <div className="flex p-8 items-center justify-center ">
                        <img src="./building.jpg" className="h-28 w-28" alt="building1"></img>
                    </div>
                    <p className='text-lg font-medium'>Director</p>
                    <p className='text-lg'>Pacific Wealth Group</p>
                    <p className='text-lg'>Aug 2019 - Present. 4 Years</p>
                    <p className='text-lg'>Australia</p>
                </div>
                <div className='shadow-2xl basis-1/3 flex-1 rounded-xl my-5 p-5 dark:bg-gray-300'>
                    <div className="flex p-8 items-center justify-center ">
                        <img src="./itp.jpg" className="h-28 w-28" alt="itp2"></img>
                    </div>
                    <p className='text-lg font-medium'>Senior Tax Consultant</p>
                    <p className='text-lg'>ITP - The Income Tax Professionals</p>
                    <p className='text-lg'>July 2013 - Present. 10 Years 1 Month</p>
                    <p className='text-lg'>Sydney</p>
                </div>
                <div className='shadow-2xl basis-1/3 flex-1 rounded-xl my-5 p-5 dark:bg-gray-300'>
                    <div className="flex p-8 items-center justify-center">
                        <img src="./building.jpg" className="h-28 w-28" alt="building2"></img>
                    </div>
                    <p className='text-lg font-medium'>Director</p>
                    <p className='text-lg'>Migration Advice Centre</p>
                    <p className='text-lg'>May 2010 - Present. 13 Years 3 Months</p>
                    <p className='text-lg'>Australia</p>
                </div>
            </div>
        </section>
    )
}

export default Experience