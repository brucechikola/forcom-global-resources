import React from 'react'
import { AiFillBulb } from 'react-icons/ai'
import { FaHandshake } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'
import { RiSkull2Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'

export default function Content() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    const Point = ({ color, data, icon }) => {
        return (
            <div className="w-full flex items-start justify-start my-3">
                <div className={`w-[40px] h-[40px] rounded-md bg-${color}-200 text-${color}-800 text-[30px] items-center justify-center flex`}>
                    {icon}
                </div>
                <div className="w-full ml-5">
                    <h5 className="font-bold m-0">{data.title}</h5>
                    <p className="w-full text-[12px] m-0">{data.content}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full min-h-[400px] bg-gray-200">
            <div className='w-[80%] mx-auto min-h-[500px] grid grid-cols-2 gap-x-10 mt-[30px] py-10 grid grid-cols-2'>
                <div className="w-full h-full">
                    <h3 className='font-bold m-0 text-[30px]'>Lets Get It Right</h3>
                    <p className="w-full my-3 text-[14px]">
                        In the contemporary business landscape, financial integration and collaboration represent a powerful approach for businesses seeking sustainable growth and market expansion
                    </p>
                    <div className="w-full">
                        <img src="img/others/chart.jpeg" className='h-[350px] w-full m-0 object-cover rounded-md' alt="" />
                    </div>
                </div>
                <div className="w-full h-full flex items-center justify-center flex-col pl-10">
                    <Point color="indigo" data={selected_sector.bullets[0]} icon={<GiTakeMyMoney />} />
                    <Point color="blue" data={selected_sector.bullets[1]} icon={<RiSkull2Fill />} />
                    <Point color="orange" data={selected_sector.bullets[2]} icon={<AiFillBulb />} />
                    <Point color="emerald" data={selected_sector.bullets[3]} icon={<FaHandshake />} />
                </div>
            </div>
        </div>
    )
}
