import React from 'react'
import reactLogo from '../assets/react.svg'


const Navbar = () => {
    return (
        <nav className="flex flex-row px-10 bg-stone-900 flex-center">
            <img
                src={reactLogo}
                alt='react logo'
                className='w-[4em]'
            />
            <h1 className="text-white headings text-center px-4 py-6">React Login Page - Authentication with JWT</h1>
        </nav>
    )
}

export default Navbar
