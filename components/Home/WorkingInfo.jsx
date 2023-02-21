import React from 'react'

function WorkingInfo() {
    return (
        <>
            <div className='w-full md:h-[800px] h-full bg-red-800'>
                <div className='w-full h-full md:flex'>
                    <div className='w-full h-full bg-cyan-900 p-20 flex justify-center items-center workingHourBg'>
                        <div className='w-[400px] h-[400px] text-center flex flex-col justify-center items-center text-white font-medium'>
                            <p className='mb-4'>Working hours:</p>
                            <p className='mb-4'>Monday - Friday // 09:00 - 23:00</p>
                            <p className='mb-4'>Saturday // 10:00 - 01:00</p>
                            <p className='mb-4'>Sunday // CLOSED</p>
                        </div>
                    </div>
                    <div className='w-full h-full stroke-lime-700 flex justify-center workingHourBg2'>
                        <div className='w-full h-full text-white md:p-20 p-4 flex justify-center flex-col items-center'>
                            <div className='mb-10'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4511920548152!2d90.49775954319456!3d23.624007522032237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b108e76c9959%3A0x863be4bba7b572fb!2sNarayanganj%20Hwy%2C%20Narayanganj!5e0!3m2!1sen!2sbd!4v1676976701324!5m2!1sen!2sbd" width="400" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                             <p>Store Address:</p>
                             <p>Casara, Narayanganj, Dhaka, Bangladesh</p>
                             <p>tel: 01875859640</p>
                             <p>tel: 01972428482</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkingInfo
