import React from 'react'

export const Header = () => {
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex gap-4">
                    <img className="w-16" src="./images/overwatch-logo.svg" alt="Logo de overwatch" />
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Ranked Counter</h1>
                </div>
            </header>
        </>
    )
}
