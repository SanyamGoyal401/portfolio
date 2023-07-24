import React from 'react'

const Education = () => {
    return (
        <div>
            <h3 className='my-5 text-3xl font-medium dark:text-white'>Education</h3>
            <div className='flex flex-col sm:flex-row sm:flex-wrap gap-5'>
                <div className='shadow-2xl basis-1/3 flex-1 rounded-xl p-5 dark:bg-gray-300'>
                    <div className="flex p-8 items-center justify-center ">
                        <img src="./acu.jpeg" className="h-28 w-28" alt="acu"></img>
                    </div>
                    <div>
                        <p className='text-lg font-medium'>Australian Catholic University</p>
                    </div>
                    <div>
                        <p className='text-lg'>Postgraduate Degree in Migration Law</p>
                    </div>
                </div>
                <div className='shadow-2xl basis-1/3 flex-1 rounded-xl p-5 dark:bg-gray-300'>
                    <div className="flex p-8 items-center justify-center">
                        <img src="./uts.jpeg" className="h-28 w-28" alt="uts"></img>
                    </div>
                    <div>
                        <p className='text-lg font-medium'>University of Technology Sydney</p>
                    </div>
                    <div>
                        <p className='text-lg'>Accounting and Finance</p>
                    </div>
                </div>
                <div className='shadow-2xl basis-1/3 flex-1 rounded-xl p-5 dark:bg-gray-300'>
                    <div className="flex p-8 items-center justify-center ">
                        <img src="./uws.png" className="h-28 " alt="uws"></img>
                    </div>
                    <div>
                        <p className='text-lg font-medium'>University of Western Sydney</p>
                    </div>
                    <div>
                        <p className='text-lg'>Accounting and Business/Management</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education