import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux'

export default function SectorDescription() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    return (
        <div className='w-full flex items-center justify-start flex-col mt-10 text-slate-700'>
            <div className="w-[80%]">
                <h1 className='text-[40px] font-bold w-full'>
                    <span className="text-blue-800">Our Role</span> In The {selected_sector.title} Sector
                </h1>
                <p className="w-full">
                    {selected_sector.description}
                </p>

            </div>
            <div
                className="w-full my-10 bg-gray-100"
            >
                <div className="w-[80%] mt-10 mx-auto">
                    <div className="my-10 font-bold text-[40px]"><span className="text-red-700">Some</span> Of Our Engangements</div>
                    <div className="w-full grid grid-cols-5 gap-x-2">
                        <div className="w-full h-[400px] col-span-3">
                            <img src="img/others/land3.gif" alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className="w-full">
                            <h1>Signed A Contract With Mopani Copper Mine</h1>
                        </div>
                        <div className="w-full h-[400px] col-span-3">
                            <img src="img/others/land3.gif" alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className="w-full">
                            <h1>Signed A Contract With Mopani Copper Mine</h1>
                        </div>
                        <div className="w-full h-[400px] col-span-3">
                            <img src="img/others/land3.gif" alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className="w-full">
                            <h1>Signed A Contract With Mopani Copper Mine</h1>
                        </div>
                    </div>
                    {/* <button className="w-[300px] h-[60px] my-10 rounded-md bg-tertiary text-white mt-3 flex items-center justify-center">
                        Become A Member Now
                        <MdArrowRight className='text-[30px]' />
                    </button> */}
                </div>
            </div>

        </div>
    )
}
