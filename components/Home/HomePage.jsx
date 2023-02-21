import HeroSection from './HeroSection'
import Navbar from 'components/Navigation/Navbar'
import React from 'react'
import BottomInfo from './BottomInfo'
import OurStory from './OurStory'
import OurMenu from './OurMenu'
import OurTeamMembers from './OurTeamMembers'
import WorkingInfo from './WorkingInfo'

function HomePage() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <BottomInfo />
        <OurStory />
        <OurMenu />
        <OurTeamMembers />
        <WorkingInfo />
    </>
  )
}

export default HomePage
