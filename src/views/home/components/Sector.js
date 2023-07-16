import Image from 'components/shared/Image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedSector } from 'store/sectors/sectorSlice'

export default function Sector({ data }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const HandleClick = () => {
        dispatch(setSelectedSector(data))
        navigate('/sectors')
    }
    return (
        <div
            onClick={() => HandleClick()}
            className="w-full flex items-center justify-center border border-gray-300 min-h-[200px] flex-col bg-gray-900 hover:bg-gray-800 cursor-pointer relative ">

            <Image path={data.background} className="w-full h-full object-cover" />
            <div className="text-[20px] font-bold text-center absolute bg-indigo-900 bg-opacity-25 hover:bg-opacity-60 z-[2] w-full h-full flex items-center justify-center">{data.title}</div>
        </div>
    )
}
