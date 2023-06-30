import React from 'react'
import { MdChevronLeft, MdChevronRight, MdPlayCircleFilled } from 'react-icons/md'

export default function About() {
    return (
        <div className="bg-white w-full min-h-[100vh] flex items-center justify-center  inset-1">
            <button className="scroll-down flex items-center justify-center absolute bottom-[10px] border border-2 border-gray-200 rounded-full w-[30px] h-[30px]">
                <MdChevronLeft className='text-[40px] text-gray-200 rotate-[-90deg]' />
            </button>

            <div className="w-[85%] mx-auto min-h-[80vh] grid grid-cols-3 relative">
                <div className="w-full h-full flex items-start justify-center flex-col col-span-2">
                    <h1 className="hero-title text-[50px] font-bold m-0 w-[70%]" style={{ lineHeight: 1.4 }}>Welcome to Forcom Global Resources</h1>
                    <p className="hero-desc">
                        We are a global business development and sustainability company which is incorporated and
                        established in lusaka from 2020. Our Enterprise culture &
                        values revolve around fulfilling the outcomes of all potential opportunities for
                        businesses or ideas that want to develop and grow through diversification.
                    </p>
                    <div className="flex -tems-center justify-start mt-10">
                        <button className="w-[250px] shadow-default h-[60px] grid grid-cols-4 bg-gray-200 text-[17px] font-semibold rounded-md text-black transition hover:translate-x-[-3%] overflow-hidden">
                            <div className="col-span-3 w-full h-full flex items-center justify-center">Learn More</div>
                            <div className="bg-indigo-800 text-white flex items-center justify-center w-full h-full">
                                <MdChevronRight size={30} />
                            </div>
                        </button>
                        <button className="w-[250px] h-[60px] flex items-center justify-center border border-3 border-gray-100 text-[17px] font-semibold rounded-md text-white ml-10 transition hover:translate-x-[-3%]">
                            <MdPlayCircleFilled className='mr-3 text-[30px]' />
                            Watch Video
                        </button>
                    </div>
                </div>
                <div className="absolute w-[350px] h-[40px] grid grid-cols-4 bottom-0 right-0 gap-x-[10px]">
                    <div className="col-span-3 flex items-center justify-center w-full relative">
                        <div className="w-full h-[2px] bg-gray-400 rounded-md absolute"></div>
                        <div className="w-[33.3%] h-[5px] bg-white rounded-md absolute left-0"></div>
                    </div>
                    <div className="w-full grid grid-cols-2  gap-x-[10px]">
                        <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-600 text-[25px]">
                            <MdChevronLeft />
                        </button>
                        <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-600 text-[25px]">
                            <MdChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
