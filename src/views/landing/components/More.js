import { IMG_PATH } from 'constants'
import React from 'react'

export default function More() {
    return (
        <div className='w-full min-h-[100vh] bg-white z-[15] inset-2 flex items-center justify-start flex-col  text-black text-[14px]'>
            <div className="w-[83%] min-h-[400px] mt-[50px]">
                <div className="w-full my-5 text-black">
                    <span className="text-indigo-700 text-[14px]">Business As Usual</span>
                    <div className="text-[50px] font-bold text-slate-800">Our Experience</div>
                    <p className="w-full lg:w-[60%]">
                        Since 2020, we have been involved in the following activities which have strengthened our experience to understand our clients and market demand better.
                    </p>
                </div>
                <div className="grid grid-cols-2 w-full my-8">
                    <div className="w-full min-h-[470px]"
                        style={{
                            backgroundImage: `url(${IMG_PATH}ict.jpeg)`,
                            backgroundPosition: 'cenetr',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >

                    </div>
                    <div className="w-full min-h-[470px] bg-gray-50 p-5">
                        <div className="text-[35px] font-bold text-slate-800">ICT solutions and System Integration</div>
                        <p className="">
                            With a digital global village in site, we have been developing ict systems for every sector to make consumers find
                            information and products easily in education, commercial world and economic sector environment,
                            Equipment and machinery monitoring technologies, payment gateways and systems.
                            <br /><br />
                            Check us here:  <br />
                            <div className="flex items-center justify-start my-3">
                                <div className="flex items-center justify-center rounded-full bg-indigo-300 relative w-[20px] h-[20px] mr-2">
                                    <div className="rounded-full bg-indigo-800 w-[7px] h-[7px]"></div>
                                </div>
                                <a href="#">amstadm.com</a>
                            </div>
                            <div className="flex items-center justify-start my-3">
                                <div className="flex items-center justify-center rounded-full bg-indigo-300 relative w-[20px] h-[20px] mr-2">
                                    <div className="rounded-full bg-indigo-800 w-[7px] h-[7px]"></div>
                                </div>
                                <a href="#">thefortunegame.com</a>
                            </div>
                            <div className="flex items-center justify-start my-3">
                                <div className="flex items-center justify-center rounded-full bg-indigo-300 relative w-[20px] h-[20px] mr-2">
                                    <div className="rounded-full bg-indigo-800 w-[7px] h-[7px]"></div>
                                </div>
                                <a href="#">sms.fgr.co.zm</a>
                            </div>

                        </p>
                        <button className="flex items-center justify-center w-[220px] h-[50px] rounded-md bg-tertiary text-white my-8">Learn More</button>
                    </div>
                    <div className="w-full min-h-[470px] bg-gray-50 p-5">
                        <div className="text-[35px] font-bold text-slate-800">Enterprise Development and Management</div>
                        <p className="">
                            We work with you to develop your ideas to improve on your product or service delivery to the consumers in a more
                            convenient and eff ective way. Areas of interest are business development, market research, cost benefit analysis for new
                            and progressive business opportunities to start or expand, tender valuation and responses preparation in diff erent sectors.
                            We supply professional resources that will change your idea into a valuable reality.
                        </p>
                        <button className="flex items-center justify-center w-[220px] h-[50px] rounded-md bg-tertiary text-white">Learn More</button>
                    </div>
                    <div className="w-full min-h-[470px]"
                        style={{
                            backgroundImage: `url(${IMG_PATH}agr.jpeg)`,
                            backgroundPosition: 'cenetr',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >

                    </div>

                </div>
            </div>
        </div>
    )
}
