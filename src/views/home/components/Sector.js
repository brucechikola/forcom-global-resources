import React from 'react'

export default function Sector({ title, icon }) {
    return (
        <div className="w-full flex items-center justify-center border border-gray-800 min-h-[200px] flex-col bg-gray-900 hover:bg-gray-800 cursor-pointer">
            <div className='text-[60px] mb-5 flex items-center justify-center bg-white text-indigo-900 rounded-full p-3'>
                {icon}
            </div>
            <div className="text-[13px] text-center">{title}</div>
        </div>
    )
}
