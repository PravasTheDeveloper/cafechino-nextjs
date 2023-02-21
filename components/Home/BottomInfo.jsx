import React from 'react'

const icons = [
    "facebook1.png",
    "google-plus1.png",
    "linkedin1.png",
    "pinterest1.png",
    "twitter1.png"
]

function BottomInfo() {
    return (
        <>
            <div className='w-full h-full bottomInfombl p-4'>
                <div className='container mx-auto w-full h-full md:flex items-center'>
                    <div className='md:w-6/12 w-full flex justify-center flex-col'>
                        <h1 className='text-2xl font-semibold mb-3'>Social Media</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae sunt rem aliquam esse dolorum quibusdam laboriosam maxime</p>
                    </div>
                    <div className='md:w-6/12 w-full h-full flex items-center justify-between mt-10'>
                        {icons.map((data) => {
                            return (<img src={`Icons/${data}`} className="md:h-16 h-10" alt="" />)
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomInfo
