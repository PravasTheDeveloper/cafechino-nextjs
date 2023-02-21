import React from 'react'

function OurStory() {
  return (
    <>
      <div className='container mx-auto pt-32 w-full h-full flex flex-col items-center'>
        <div className='mb-[100px] h-full w-full flex flex-col justify-center'>
          <h1 className='text-6xl text-one font-extrabold text-center'>Our Story</h1>
          <div className='flex justify-center m-[-70px]'>
            <img src="ourStory.png" alt="" />
          </div>
          
        </div>

        <p className='h-full max-w-6xl text-center '>
          Near the historic Tower Theater on Broadway sits another piece of Sacramento history,
          the Tower Cafe. Owner Pravas Sarkar founded his worldly fusion eatery on Earth Day 2018, with the intent of bringing the hearts, minds and appetites of the city's diverse population under one roof. Specialties from across the globe range from the award winning Famous Bangal Toast (a custard soaked slice of Heaven) to Piag's Thai Steak, Bangladeshi Coffee as well as a selection of seasonal daily specials.
        </p>
      </div>

    </>
  )
}

export default OurStory
