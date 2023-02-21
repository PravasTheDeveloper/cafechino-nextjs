import HeroSection from './HeroSection'
import Navbar from 'components/Navigation/Navbar'
import React from 'react'
import BottomInfo from './BottomInfo'
import OurStory from './OurStory'
import OurMenu from './OurMenu'

function HomePage() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <BottomInfo />
        <OurStory />
        <OurMenu />
    </>
  )
}

export default HomePage
