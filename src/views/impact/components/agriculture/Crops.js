import { Unique } from 'functions/common'
import React from 'react'
import { useSelector } from 'react-redux'
export default function Crops() {
    const { selected_sector } = useSelector(state => state.sector)
    const CropCard = ({ data }) => {
        return (
            <div className={`w-full min-h-[450px] bg-white border border-[10px] rounded-md shadow-dark border-white`}>
                <div className="w-full h-[200px]">
                    <img src={`${data.img}`} alt="" className='w-full h-full object-cover m-0 rounded-t-md' />
                </div>
                <h3 className='text-[16px] font-bold m-0 mt-5'>{data.title}</h3>
                <span className='text-third text-[13px]'>{data.tons}</span>
                <p className="w-full mt-3 text-[13px]">{data.content}</p>
            </div>
        )
    }
    return (
        <div className='w-full mt-[180px] min-h-[500px] relative'>
            <div className="w-[50%] absolute left-0 top-0 h-[400px] bg-tertiary z-[-0] rounded-r-lg"></div>
            <div className="w-[70%] mx-auto z-[20] relative">
                <div className="grid w-full grid-cols-2 gap-x-5">
                    <div className="left-w-full mt-[50px] text-white">
                        <span className='text-[13px]'>T H E   <span className="mx-2">C R O P S</span>   <span className="mx-2">W E </span>  G R O W</span>
                        <div className="w-full mt-3 text-[28px] font-bold">
                            Below Id A Brief Description on the Crops We Grow
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-end">
                        <div className="w-[90%] text-[13px]">
                            Our agricultural approach is built on strong collaboration with both small-scale and commercial farmers.
                            Through mutual partnerships, we share expertise, resources, and best practices, fostering a community-driven approach to farming.
                            This collaborative effort empowers farmers to optimize their productivity while promoting sustainable agricultural practices
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 mt-10 gap-6">
                    {
                        selected_sector?.bullets?.map((b, i) => i <= 20 && <CropCard key={Unique()} data={b} />)
                    }
                </div>
                <div className="w-full h-[30px] mt-10 flex items-center justify-center">
                    <div className="slider w-[20px] mx-3 h-[20px] flex items-center justify-center cursor-pointer rounded-full bg-white border border-tertiary border-1">
                        <div className="w-[13px] h-[13px] bg-tertiary rounded-full"></div>
                    </div>
                    <div className="slider w-[20px] mx-3 h-[20px] flex items-center justify-center cursor-pointer rounded-full bg-white border border-tertiary border-1">
                        <div className="w-[13px] h-[13px] bg-tertiary rounded-full"></div>
                    </div>
                    <div className="slider w-[20px] mx-3 h-[20px] flex items-center justify-center cursor-pointer rounded-full bg-white border border-tertiary border-1">
                        <div className="w-[13px] h-[13px] bg-tertiary rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
