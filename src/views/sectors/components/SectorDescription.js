import { Unique } from 'functions/common'
import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux'
import Bullet from './Bullet'

export default function SectorDescription() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    return (
        <div className='w-full flex items-center justify-start flex-col mt-10 text-slate-700'>
            <div className="w-[80%]">
                <h1 className='text-[40px] font-bold w-full'>
                    <span className="text-blue-800">Our Role</span> In The {selected_sector.title} Sector
                </h1>
                <p className="w-full">
                    {selected_sector.description}
                </p>

            </div>
            <div
                className="w-full my-10 bg-gray-100 py-3"
            >
                <div className="w-[80%] mt-10 mx-auto">
                    <div className=" font-bold text-[40px] mb-10"><span className="text-blue-800">Our</span> Engangements</div>
                    {
                        selected_sector.bulletise && (
                            <div className="w-full grid grid-cols-2 gap-5">
                                {
                                    selected_sector.bullets.length > 0 && selected_sector.bullets.map(b => <Bullet key={Unique()} data={b} />)
                                }
                            </div>
                        )
                    }
                    {
                        !selected_sector.bulletise && (
                            <div className="w-full grid grid-cols-4 gap-5">
                                <div className="w-full h-[400px] col-span-2 relative rounded-md">
                                    <img src="img/others/mining.jpeg" alt="" className='w-full h-full object-cover m-0 rounded-md' />
                                </div>
                                <div className="w-full col-span-2">
                                    <h3 className='font-bold text-[25px]'>Signed A Contract With Mopani Copper Mine</h3>
                                    <p className="text-slate-800">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora sapiente expedita eos, qui voluptas.
                                        Numquam adipisci blanditiis asperiores, mollitia odit
                                        reprehenderit vitae non laudantium ex assumenda doloribus fugiat quo?
                                        Animi corporis, culpa iure sunt doloribus consectetur, libero ex repellendus natus mollitia fuga qui assumenda ab
                                        praesentium, excepturi beatae. Delectus quasi unde quas velit rerum fugiat soluta recusandae architecto molestias!
                                    </p>
                                </div>

                                <div className="w-full col-span-2">
                                    <h3 className='font-bold text-[25px] relative mb-6'>
                                        <div className="absolute bottom-[-15px] h-[7px] bg-blue-800 rounded-full w-[100px]"></div>
                                        Harvested Over 400MT of Maize
                                    </h3>
                                    <p className="text-slate-800">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora sapiente expedita eos, qui voluptas.
                                        Numquam adipisci blanditiis asperiores, mollitia odit
                                        reprehenderit vitae non laudantium ex assumenda doloribus fugiat quo?
                                        Animi corporis, culpa iure sunt doloribus consectetur, libero ex repellendus natus mollitia fuga qui assumenda ab
                                        praesentium, excepturi beatae. Delectus quasi unde quas velit rerum fugiat soluta recusandae architecto molestias!
                                    </p>
                                </div>
                                <div className="w-full h-[400px] col-span-2 relative rounded-md">
                                    <img src="img/others/agr.jpeg" alt="" className='w-full h-full object-cover m-0 rounded-md' />
                                </div>
                                <div className="w-full h-[400px] col-span-2 relative rounded-md">
                                    <img src="img/others/land.gif" alt="" className='w-full h-full object-cover m-0 rounded-md' />
                                </div>
                                <div className="w-full col-span-2">
                                    <h3 className='font-bold text-[25px] relative mb-6'>
                                        <div className="absolute bottom-[-15px] h-[7px] bg-blue-800 rounded-full w-[100px]"></div>
                                        Constructed Over 400 Houses

                                    </h3>
                                    <p className="text-slate-800">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora sapiente expedita eos, qui voluptas.
                                        Numquam adipisci blanditiis asperiores, mollitia odit
                                        reprehenderit vitae non laudantium ex assumenda doloribus fugiat quo?
                                        Animi corporis, culpa iure sunt doloribus consectetur, libero ex repellendus natus mollitia fuga qui assumenda ab
                                        praesentium, excepturi beatae. Delectus quasi unde quas velit rerum fugiat soluta recusandae architecto molestias!
                                    </p>
                                </div>

                                <div className="w-full col-span-2">
                                    <h3 className='font-bold text-[25px] relative mb-6'>
                                        <div className="absolute bottom-[-15px] h-[7px] bg-blue-800 rounded-full w-[100px]"></div>
                                        Developed 60 Education Systems
                                    </h3>
                                    <p className="text-slate-800">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora sapiente expedita eos, qui voluptas.
                                        Numquam adipisci blanditiis asperiores, mollitia odit
                                        reprehenderit vitae non laudantium ex assumenda doloribus fugiat quo?
                                        Animi corporis, culpa iure sunt doloribus consectetur, libero ex repellendus natus mollitia fuga qui assumenda ab
                                        praesentium, excepturi beatae. Delectus quasi unde quas velit rerum fugiat soluta recusandae architecto molestias!
                                    </p>
                                </div>
                                <div className="w-full h-[400px] col-span-2 relative rounded-md">
                                    <img src="img/others/ict.jpeg" alt="" className='w-full h-full object-cover m-0 rounded-md' />
                                </div>

                            </div>
                        )
                    }
                    <button className="w-[300px] h-[60px] my-10 rounded-md bg-tertiary text-white mt-10 flex items-center justify-center">
                        Become A Member Now
                        <MdArrowRight className='text-[30px]' />
                    </button>
                </div>
            </div>

        </div>
    )
}
