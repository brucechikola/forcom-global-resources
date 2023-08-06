import { Unique } from 'functions/common'
import React from 'react'
import { MdArrowLeft, MdArrowRight, MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useSelector } from 'react-redux'

export default function Projects() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    const Project = ({ data }) => {
        return (
            <div className="w-full h-[300px] relative overflow-hidden group">
                <img src={`${data.img}`} alt="" className='w-full h-full object-cover m-0 bg-indigo-900 bg-opacity-25 hover:bg-opacity-60 cursor-pointer' />
                <div className="w-full h-[100%] bg-tertiary text-white absolute top-[-100%]  group-hover:top-0 left-0 bg-opacity-50 text-[14px] font-bold transition-all duration-300 p-10">
                    <span>{data.title}</span>
                    <p className="w-full text-12px font-normal">
                        {data.description}
                    </p>
                </div>
            </div>
        )
    }

    const Slide = ({ data }) => {
        return (
            <div className="w-[20px] h-[20px] rounded-full bg-tertiary mx-3"></div>
        )
    }
    return (
        <div className='w-[80%] mx-auto min-h-[300px] gap-x-4 mt-[100px] relative'>
            <h2 className='font-bold m-0 text-[40px] text-gray-600 w-[60%]'>Projects Worked On</h2>
            <div className="w-[150px] h-[6px] bg-tertiary rounded-full my-5"></div>
            <span>Some of the projects we have worked on so far.</span>
            <div className="w-full grid grid-cols-3 mt-4">
                {
                    selected_sector?.projects?.map(p => <Project key={Unique()} data={p} />)
                }

            </div>

            <button className="flex items-center justify-center w-40px h-40px text-[70px] absolute left-[-80px] top-[50%] font-bold">
                <MdChevronLeft />
            </button>
            <button className="flex items-center justify-center w-40px h-40px text-[70px] absolute right-[-80px] top-[50%]">
                <MdChevronRight />
            </button>
            <div className="w-full flex items-center justify-center my-10">
                <Slide />
                <Slide />
                <Slide />
            </div >
        </div>

    )
}
