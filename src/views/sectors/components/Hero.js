import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { MdArrowRight } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedSector } from 'store/sectors/sectorSlice'

export default function Hero() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    const dispatch = useDispatch()
    const onNext = () => {
        let index = sectors.indexOf(selected_sector)
        console.log(sectors.length, index)
        if (index < sectors.length - 1) {
            dispatch(setSelectedSector(sectors[index + 1]))
        }
        else {
            dispatch(setSelectedSector(sectors[0]))
        }
    }
    return (
        <div
            style={{
                clipPath: 'polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)',
                backgroundImage: `linear-gradient(rgb(0,0,0,50%), rgba(0,0,0,60%)), url(${selected_sector.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='w-full h-[680px] bg-tertiary'
        >
            <div className="w-[80%] mx-auto h-full flex items-start justify-center flex-col text-white relative">
                <h1 className='font-bold w-[70%] text-[50px]'>{selected_sector.title} Sector</h1>
                <p className="w-[60%] text-white">{selected_sector.brief}</p>
                <button className="w-[300px] h-[60px] rounded-md bg-white text-black mt-3 flex items-center justify-center">
                    Become A Member Now
                    <MdArrowRight className='text-[30px]' />
                </button>
                <button
                    onClick={() => onNext()}
                    className="absolute hover:bg-transparent right-0 bg-transparent border border-white border-4 rounded-full w-[70px] h-[70px] flex items-center justify-center text-[50px] text-white">
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}
