import { Unique } from 'functions/common'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Narrations() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    const Narration = ({ data }) => {
        return (
            <div className="w-full flex items-center justify-start rounded-md shadow-darker flex-col overflow-hidden">
                <img src={`${data.img}`} alt="" className="w-full m-0 h-[280px] object-cover" />
                <h1 className='text-[17px] p-5 pb-0 w-full font-bold text-center'>{data.title}</h1>
                <p className="w-full text-[13px] p-5 pt-0">{data.content}</p>
            </div>
        )
    }
    return (
        <div className='w-[80%] mx-auto min-h-[300px] grid grid-cols-3 gap-x-7 mt-[100px]'>
            {
                selected_sector?.bullets?.map(b => <Narration key={Unique()} data={b} />)
            }
        </div>
    )
}
