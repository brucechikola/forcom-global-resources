import React from 'react'

export default function AuthLayout(props) {
    return (
        <div className='w-full min-h-[100vh]'>
            {props.children}
        </div>
    )
}
