import React from 'react'

export default function Investments() {
    return (
        <div className='w-[80%] mx-auto min-h-[400px] grid grid-cols-2 gap-x-10 mt-[40px] py-10 grid grid-cols-2'>
            <h2 className="font-bold m-0 text-[30px] col-span-2">Our Investments By Sector</h2>
            {/* <h2 className="font-bold m-0 text-[20px]">Some Of Our Investments</h2> */}
            <div className="w-full h-[max-content] mt-10 grid grid-cols-2 gap-5">
                <div className="w-full p-2 rounded-md flex h-[120px] items-center justify-center flex-col bg-indigo-100">
                    <h1 className="font-bold text-indigo-800 m-0 mb-3 text-[20px]">ZMW 500,000.00</h1>
                    <span class="text-[13px]">ICT Sector</span>
                </div>
                <div className="w-full p-2 rounded-md flex h-[120px] items-center justify-center flex-col bg-indigo-100">
                    <h1 className="font-bold text-emerald-800 m-0 mb-3 text-[20px]">ZMW 776,800.00</h1>
                    <span class="text-[13px]">Agriculture Sector</span>
                </div>
                <div className="w-full p-2 rounded-md flex h-[120px] items-center justify-center flex-col bg-indigo-100">
                    <h1 className="font-bold text-blue-800 m-0 mb-3 text-[20px]">ZMW 1M</h1>
                    <span class="text-[13px]">Construction Sector</span>
                </div>
                <div className="w-full p-2 rounded-md flex h-[120px] items-center justify-center flex-col bg-indigo-100">
                    <h1 className="font-bold text-yellow-800 m-0 mb-3 text-[20px]">ZMW 1.5M</h1>
                    <span class="text-[13px]">Education Section</span>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full">
                    <h3 className="font-bold">
                        Strengthening Market Share
                    </h3>
                    <p className="w-full text-[13px]">
                        A well-executed financial integration strategy can significantly contribute to increasing market share. By diversifying their portfolio and expanding into new markets, businesses become less reliant on specific revenue streams. This resilience allows companies to weather economic downturns and seize growth opportunities that arise in various sectors. Additionally, the ability to finance and manage diverse projects helps build brand reputation and credibility, attracting more investors and stakeholders
                    </p>
                </div>
                <div className="w-full">
                    <h3 className="font-bold">
                        Social Impact and Community Development
                    </h3>
                    <p className="w-full text-[13px]">
                        Beyond bricks and mortar, our construction division aims to make a lasting social impact. We recognize that improved infrastructure positively influences education, healthcare, and livelihood opportunities for residents. As we embark on construction projects, we actively involve local communities, seeking their input and incorporating cultural sensitivities into our designs. By nurturing a sense of ownership and involvement, we aim to foster sustainable communities that thrive on cooperation and shared prosperity
                    </p>
                </div>
            </div>
        </div>
    )
}
