import React from 'react'

export const Footer = () => {
    return (
        <footer className="p-4 bg-white shadow md:px-6 md:py-4 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-center">
                <div className="flex items-center flex-col mb-4 sm:mb-0">
                    <img src="./images/overwatch-logo.svg" alt="Logo de overwatch 2" className='w-24' />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ranked Counter</span>
                </div>
            </div>
            <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© 2023 <span className='dotker'>DOTK3R</span>. All Rights Reserved.</span>
        </footer>
    )
}
