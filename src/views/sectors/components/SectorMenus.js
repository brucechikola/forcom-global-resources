import { Unique } from 'functions/common'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedSector } from 'store/sectors/sectorSlice'

export default function SectorMenus() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    const dispatch = useDispatch()
    const Menu = ({ sector }) => {
        const bg = selected_sector.title === sector.title ? 'bg-tertiary text-white' : 'bg-slate-200 text-slate-800'
        return <button
            onClick={() => dispatch(setSelectedSector(sector))}
            className={`${bg}  p-3 min-h-[50px] rounded-md text-[13px]`}>
            {sector.title}
        </button>
    }
    return (
        <div className='w-full flex items-center justify-center flex-col min-h-[50px] mt-5'>

            <div className="w-[70%] grid grid-cols-4 gap-7">
                <h1 className='text-[30px] font-bold col-span-4 text-center text-blue-800'>Other Sectors</h1>
                {
                    sectors?.length > 0 && sectors.map(sec => <Menu key={Unique()} sector={sec} />)
                }
            </div>
        </div>
    )
}
