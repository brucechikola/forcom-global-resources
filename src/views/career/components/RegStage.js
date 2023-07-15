import React from 'react'
import { useSelector } from 'react-redux'

export default function RegStage({ title, index }) {
    const { registration_stage } = useSelector(state => state.career)
    const bg = registration_stage >= index ? 'bg-tertiary text-white' : ''
    const index_bg = registration_stage >= index ? 'bg-white text-tertiary' : ''
    return (
        <div className={`w-full h-full flex items-center justify-center border-r border-r-gray-300 ${bg} cursor-pointer`}>
            <div className={`index flex items-center justify-center rounded-full w-[26px] h-[26px] mr-3 font-bold ${index_bg}`}>
                {index}
            </div>
            <span className="">{title}</span>
        </div>
    )
}
