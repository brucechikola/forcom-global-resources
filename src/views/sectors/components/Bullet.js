import React from 'react'

export default function Bullet({ data }) {
    console.log("hello")
    return (
        <div className='text-slate-800 w-full min-h-[max-content]  border border-gray-400 p-3 rounded-md'>
            <h3 className='text-slate-800 text-[20px] font-bold m-0 flex items-start justify-start'>
                <div className='bg-indigo-700 rounded-full w-[16px] h-[16px] mr-3 mt-2'></div>
                {data.title}
            </h3>
            <p className='text-[13px] ml-7'>
                {data.content}
            </p>
        </div>
    )
}
