import React from 'react'
import { useSelector } from 'react-redux'

export default function Role() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    return (
        <div className='w-[80%] mx-auto min-h-[500px] grid grid-cols-2 gap-x-4 mt-[100px]'>
            <div className="w-full h-[400px]">
                <img src="img/others/pc2.png" alt="" className='w-full h-full object-contain' />
            </div>
            <div className="w-full h-full">
                <span className='text-third text-[11px] mb-3'>{selected_sector.title} Sector</span>
                <h1 className='text-[40px] font-bold w-full text-gray-700 m-0'>
                    <span><span className="text-tertiary">Our Role</span> In The {selected_sector.title} Sector</span>
                    <div className="w-[150px] h-[5px] bg-tertiary mt-3 rounded-md"></div>
                </h1>
                <p className="mt-5 text-[12px]">
                    {selected_sector.description}
                </p>
                <button className="bg-tertiary text-white mt-3 rounded-md w-[250px] h-[60px] text-[18px]">Join Us</button>
            </div>
        </div>
    )
}
