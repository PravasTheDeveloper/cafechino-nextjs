import React from 'react'
import OurTeamMembersCard from './OurTeamMembersCard'

function OurTeamMembers() {
    return (
        <><h1 className='md:text-6xl text-4xl my-20 text-center'>
            Meet Our Team
        </h1>
            <div className='h-auto w-full'>
                <div className='ourteamwrapper'>

                </div>
                <div className='w-full h-full container mx-auto relative mt-[-350px]'>
                    <div className='w-full h-full flex md:justify-between flex-col md:flex-row items-center justify-center'>
                        <OurTeamMembersCard image="1.png" name="Pravas Chandra Sarkar" position="Owner" />
                        <OurTeamMembersCard image="2.png" name="Jahirul Hossan Akash" position="Accountant" />
                        <OurTeamMembersCard image="3.png" name="Meiad Khan" position="Chief Chef" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeamMembers
