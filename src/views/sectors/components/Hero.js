import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { MdArrowRight } from 'react-icons/md'

export default function Hero() {
    return (
        <div
            style={{
                // clipPath: 'polygon(0 0, 100% 0, 100% 84%, 88% 98%, 0 80%, 0% 50%)',
                backgroundImage: 'linear-gradient(rgb(0,0,0,50%), rgba(0,0,0,60%)), url(img/others/land3.gif)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='w-full h-[500px] bg-tertiary'
        >
            <div className="w-[80%] mx-auto h-full flex items-start justify-center flex-col text-white relative">
                <h1 className='font-bold w-full text-[50px]'>The Mining Sector</h1>
                <button className="w-[300px] h-[60px] rounded-md bg-white text-black mt-3 flex items-center justify-center">
                    Become A Member Now
                    <MdArrowRight className='text-[30px]' />
                </button>
                <button className="absolute right-0 bg-transparent border border-white border-4 rounded-full w-[70px] h-[70px] flex items-center justify-center text-[50px] text-white">
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}
