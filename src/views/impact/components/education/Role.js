import React from 'react'
import { useSelector } from 'react-redux'
export default function Role() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    return (
        <div className='w-[80%] mx-auto min-h-[500px] grid grid-cols-2 gap-x-4 mt-[100px]'>

            <div className="w-full h-full relative">
                <span className='text-third text-[11px] mb-3'>{selected_sector.title} Sector</span>
                <h1 className='text-[40px] font-bold w-full text-gray-700 m-0'>
                    <span><span className="text-tertiary">Our Role</span> In The {selected_sector.title} Sector</span>
                    <div className="w-[150px] h-[5px] bg-tertiary mt-3 rounded-md"></div>
                </h1>
                <p className="mt-5 text-[12px]">
                    {selected_sector.description}
                </p>
                <button className="bg-tertiary text-white mt-3 rounded-md w-[250px] h-[60px] text-[18px] relative z-[3]">Join Us</button>
                <img src="img/others/pppointed.svg" alt="" className='h-[200px] absolute bottom-[-50px]' />
            </div>
            <div className="w-full h-[400px] relative">
                <img src="img/others/education.jpeg" alt="" className='w-full h-full object-cover relative z-[2] rounded-md' />
                <div className="absolute w-[70%] h-[80%] bg-tertiary right-[-40px] bottom-[-70px] rounded-md"></div>
                <div className="absolute w-[60%] h-[60%] bg-tertiary right-[-60px] bg-opacity-20 bottom-[-90px] rounded-md"></div>
            </div>
        </div>
    )
}
