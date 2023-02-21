import React, { useState } from 'react'
import { AiOutlineMenu ,AiFillCloseCircle } from "react-icons/ai";

function Navbar() {

    const [hidderNav, sethidderNav] = useState(false)

    return (
        <>
            <div className='w-full h-20 navigation px-4 md:px-0 text-color'>
                <div className='h-full container mx-auto'>
                    <div className='h-full w-full flex'>
                        <div className='w-full h-full flex items-end pb-2'>
                            <img src="Main_Logo_Web.png" alt="" className='w-auto mb-2 md:m-0 h-10 md:h-14' />
                        </div>
                        <div className='w-full h-full'>
                            <ul className='hidden h-full w-full md:flex justify-end items-center text-base font-semibold'>
                                <li>Home</li>
                                <li className='mx-12'>Menu</li>
                                <li>Contacts</li>
                            </ul>

                        </div>
                        <div className='flex items-center md:hidden'>
                            <AiOutlineMenu className='text-2xl' onClick={() => {sethidderNav(!hidderNav)}} />
                        </div>
                        <div className={hidderNav == false ? 'hiddenNavigation w-screen h-56 absolute z-50 left-0' : 'showNavigation w-screen h-56 absolute z-50 left-0'}>
                            <ul className='text-base font-semibold w-full h-full flex flex-col justify-center items-center relative'>
                                <li>Home</li>
                                <li className='my-6'>Menu</li>
                                <li>Contacts</li>
                                <div className=''>
                                    <AiFillCloseCircle className='text-color absolute top-5 right-5 text-3xl' onClick={()=>{sethidderNav(!hidderNav)}} />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
