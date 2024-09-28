import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navItem = [
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "About",
        },
        {
            id: 3,
            text: "Projects",
        },
        {
            id: 4,
            text: "Skills",
        },
        {
            id: 5,
            text: "Contact",
        },
    ];

    return (
        <nav className='max-w-screen-2xl container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 flex justify-between border shadow-md h-16 items-center sticky top-0 bg-white z-50'>
            <div className='flex space-x-2 items-center'>
                <img src="https://avatars.githubusercontent.com/u/143833074?v=4" alt="Profile" className='cursor-pointer h-12 w-12 rounded-full m-1' />
                <div>
                    <h1 className='font-semibold text-lg md:text-xl cursor-pointer'>Himanshu <span className='text-red-500'>Sharma</span></h1>
                    <p className='text-xs md:text-sm'>Web Developer</p>
                </div>
            </div>

            {/* Desktop and Tablet menu */}
            <div className='hidden md:flex'>
                <ul className='flex space-x-6 lg:space-x-8 text-sm lg:text-base cursor-pointer'>
                    {navItem.map(({ id, text }) => (
                        <li className='hover:scale-105 duration-200 cursor-pointer hover:text-red-600' key={id}>
                            <Link 
                                to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden '>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className='absolute top-16 left-0 w-full bg-white shadow-md md:hidden  '>
                    <ul className='flex flex-col space-y-4 text-center text-sm py-4'>
                        {navItem.map(({ id, text }) => (
                            <li 
                                className='cursor-pointer hover:scale-105 duration-200 hover:text-red-600' 
                                key={id}
                                onClick={() => setIsOpen(false)}
                            >
                                <Link 
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
