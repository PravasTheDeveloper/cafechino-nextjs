import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function OurTeamMembersCard({image , name , position}) {
    return (
        <>
            <div className='w-[350px] h-[600px] bg-white shadow-xl flex flex-col items-center mb-20'>
                <div className='w-[220px] h-[220px] bg-red-100 rounded-full mt-10 text-center'>
                    <img src={`persons/${image}`} alt="" />
                </div>
                <div className='text-xl mt-3'>{name}</div>
                <div className='text-2xl my-5'>{position}</div>
                <div className='px-10 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia explicabo totam in corrupti recusandae temporibus, vitae beatae quia velit cupiditate veniam vel ea cum earum facilis ratione. </div>
                <div className='flex mt-5 text-xl'>
                    <div><FaFacebookF /></div>
                    <div className='mx-5'><FaTwitter /></div>
                    <div><FaInstagram /></div>
                </div>
            </div>
        </>
    )
}

export default OurTeamMembersCard
