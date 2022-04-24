import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
const Navbar = () => {
    return (
        <div className='w-screen h-[60px] z-10 bg-white fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-base text-green-800 font-medium ml-12 sm:text-2xl'> LZY</h1>


                </div>


                <div className="hidden md:flex pr-12 items-baseline">
                    <ul className="hidden md:flex p-2 items-baseline text-center">
                        <li>Intro</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Login</li>
                    </ul>

                    <button className='px-4 py-2 m-4'>Sign Up</button>

                </div>


            </div>
            <MenuIcon className='w-8' />
        </div>
    )
}

export default Navbar