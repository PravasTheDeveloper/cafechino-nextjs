import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

function OurMenu() {
    return (
        <>
            <div className='h-full w-full mb-[550px] md:mb-0 container mx-auto md:px-28 p-5'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h1 className='text-4xl md:text-6xl font-semibold pt-32'>Explore Our Menu</h1>
                    <div className='flex justify-center mt-5'>
                        <img src="exploreOurMenu.png" alt="" />
                    </div>
                </div>
                <div className='w-full h-[400px] mt-20 md:flex justify-between'>
                    <div className='h-full w-full flex flex-col justify-between'>
                        <div className='md:w-7/12 w-full h-20 flex items-center'>
                            <img src="coffee/1.png" alt="" className='h-full' />
                            <div className='text-xl flex w-full justify-between'>
                                <p className='ml-4'>CAFE LATTE</p>
                                <p className='ml-2'> _ _ _ _ _ $3.45</p>
                            </div>
                        </div>
                        <div className='md:w-7/12 w-full h-20 flex items-center'>
                            <img src="coffee/2.png" alt="" className='h-full' />
                            <div className='text-xl flex w-full justify-between'>
                                <p className='ml-4'>ICE COFFEE</p>
                                <p className='ml-2'> _ _ _ _ _ $2.20</p>
                            </div>
                        </div>
                        <div className='md:w-7/12 w-full h-20 flex items-center'>
                            <img src="coffee/3.png" alt="" className='h-full' />
                            <div className='text-xl flex w-full justify-between'>
                                <p className='ml-4'>MOCHA</p>
                                <p className='ml-2'> _ _ _ _ _ $2.10</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-full flex flex-col justify-between md:items-end md:mt-0 mt-20'>
                        <div className='md:w-7/12 w-full h-20 flex items-center'>
                            <img src="coffee/4.png" alt="" className='h-full' />
                            <div className='text-xl flex w-full justify-between'>
                                <p className='ml-4'>ESPRESSO</p>
                                <p className='ml-2'> _ _ _ _ _ $4.80</p>
                            </div>
                        </div>
                        <div className='md:w-7/12 w-full h-20 flex items-center'>
                            <img src="coffee/5.png" alt="" className='h-full' />
                            <div className='text-xl flex w-full justify-between'>
                                <p className='ml-4'>AMERICANO</p>
                                <p className='ml-2'> _ _ _ _ _ $1.50</p>
                            </div>
                        </div>
                        <div className='md:w-7/12 w-full h-20 flex items-center'>
                            <img src="coffee/6.png" alt="" className='h-full' />
                            <div className='text-xl flex w-full justify-between'>
                                <p className='ml-4'>CAPPUCCINO</p>
                                <p className='ml-2'> _ _ _ _ _ $4.02</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurMenu
