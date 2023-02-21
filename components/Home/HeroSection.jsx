import React from 'react'
import Carousel from './Carousel'

const slides = [
  "1.jpg",
  "2.jpg",
  "3.jpg"
]

function HeroSection() {
  return (
    <>
      <div className="w-full md:heroSection">
        <div className="max-w-Ig h-full w-full">
          <Carousel autoSlide={true}>
            {
              slides.map((s) =>(
                <img src={s} />
              ))
            }
          </Carousel>  
        </div>
      </div>
    </>
  )
}

export default HeroSection

