import React from 'react'
import { MdPlayArrow } from 'react-icons/md'
export default function Role() {
    return (
        <div className="w-full grid grid-cols-2">
            <div className="w-full relative h-[500px]">
                <div className="w-[80%] h-full">
                    <img src="img/others/a group of blac 1.png" alt="" className='w-full h-full object-cover rounded-md m-0' />
                </div>
                <div className="w-[80px] h-[80px] absolute right-[80px] top-[30%] flex rounded-full items-center justify-center border border-tertiary border-[2px] sborder-t-transparent">
                    <div className="w-[50px] h-[50px] bg-tertiary flex items-center justify-center rounded-full bg-tertiary">
                        <MdPlayArrow className=' text-[30px] text-white' />
                    </div>
                </div>
                <div className="absolute w-[230px] h-[250px] rounded-md border border-white right-[20px] bottom-[-80px] bg-tertiary border-[5px]">
                    <img src="img/others/Cabbage field i 0.png" alt="" className="w-full h-full object-cover rounded-lg m-0 p-0 shadow-dark" />
                </div>
            </div>
            <div className="w-full">
                <span className='text-third text-[11px] mb-3'>Agriculture Sector</span>
                <h1 className='text-[40px] font-bold w-full text-gray-700 m-0'>
                    <span className="text-tertiary">Our Role</span> In The Agriculture Sector
                </h1>
                <p className="mt-5 text-[12px]">
                    In collaboration with our partners, we have ventured into the cultivation of
                    other valuable crops. Our wheat production reaches an
                    impressive 1050 tons, while Irish potatoes contribute 250
                    tons each month for a period of three months.
                    In the agriculture sector, similar to the mining industry,
                    our approach is built on the foundation of collaboration with both small-scale and commercial farmers.
                    Our primary goal is to cultivate cash crops and high-value crops that meet the demands of both local and international markets.
                    By joining forces with these farmers, we create a network that maximizes productivity, efficiency, and sustainability.
                    At the heart of our agricultural operations is a commitment to cultivating a diverse range of cash crops and high-value crops. By diversifying our crop portfolio, we mitigate risks associated with overreliance on a single crop and adapt to market fluctuations. Additionally, crop rotation techniques enhance soil health, reducing the need for chemical fertilizers and promoting long-term ecological balance.
                </p>
                <button className="bg-tertiary text-white mt-3 rounded-md w-[200px] h-[40px] text-[13px]">Join Us</button>
            </div>
        </div>
    )
}
