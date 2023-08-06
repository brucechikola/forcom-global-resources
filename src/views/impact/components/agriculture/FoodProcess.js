import React from 'react'

export default function FoodProcess() {
    return (
        <div className='w-full bg-white min-h-[600px] mt-[100px] py-[50px]'>
            <div className="w-[70%] mx-auto grid grid-cols-2 gap-x-6">
                <div className="w-full">
                    <span className='font-bold text-[30px]'>Crop Processing</span>
                    <p className="text-[13px]">

                        Our expertise in crop production and preservation drives us to enhance the value of these crops by turning them into ready-to-use products, meeting consumer demand for convenience. This approach not only caters to essential human needs but also generates employment and sustains industries, contributing significantly to economic stability. The transition from raw crops to finished goods creates a robust industrial ecosystem, providing jobs and fostering innovation, ultimately benefiting both consumers and the economy at large.
                    </p>
                    <button className="w-[230px] h-[46px] border border-gray-300 text-[13px] font-bold rounded-md mt-5">Get Started Now</button>
                </div>
                <div className="w-full h-full min-h-[500px]">
                    <img src="img/others/processing.jpg" alt="" className="w-full h-full object-cover rounded-md m-0" />
                </div>
            </div>
        </div>
    )
}
