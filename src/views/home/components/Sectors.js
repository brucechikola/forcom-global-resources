import React from 'react'
import Sector from './Sector'
import { SiGodotengine } from 'react-icons/si'
import { GiFarmTractor, GiTakeMyMoney, GiWorld } from 'react-icons/gi'
import { MdOutlineConstruction, MdOutlineHomeRepairService, MdProductionQuantityLimits, MdSchool } from 'react-icons/md'
import { BsMinecart } from 'react-icons/bs'
import { useSelector } from 'react-redux'
export default function Sectors() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    return (
        <div className='w-full bg-tertiary min-h-[400px] pt-5 flex items-center justify-center flex-col text-white pb-10'>
            <div className="w-[83%] min-h-[400px] mt-[50px]">
                <div className="w-full my-5 text-black">
                    <span className="text-blue-400 text-[14px]">The Industry</span>
                    <div className="text-[50px] font-bold text-white">Sectors</div>
                    <p className="w-full lg:w-[60%] text-white">
                        Since 2020, we have been involved in the following activities which have strengthened our experience to understand our clients and market demand better.
                    </p>
                </div>
                <div className="grid grid-cols-3 w-full my-8">
                    {
                        sectors.map(s => <Sector data={s} icon={<SiGodotengine />} />)
                    }

                    {/* <Sector title="Finance & accounting" icon={<GiTakeMyMoney />} />
                    <Sector title="Construction" icon={<MdOutlineConstruction />} />
                    <Sector title="Agriculture & food production" icon={<GiFarmTractor />} />
                    <Sector title="Production & supply chain" icon={<MdProductionQuantityLimits />} />
                    <Sector title="Veterinary services" icon={<MdOutlineHomeRepairService />} />
                    <Sector title="Mining and gemstone industry" icon={<BsMinecart />} />
                    <Sector title="Global Market Agency & trade Management" icon={<GiWorld />} />
                    <Sector title="Education" icon={<MdSchool />} /> */}
                </div>
            </div>
        </div>
    )
}
