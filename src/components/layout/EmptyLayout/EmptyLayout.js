import React from 'react'
import NavBar from 'views/common/NavBar'

export default function EmptyLayout(props) {
    return (
        <div className='w-full'>
            <NavBar />
            {props.children}
        </div>
    )
}
