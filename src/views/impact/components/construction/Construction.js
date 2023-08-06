import React from 'react'
import Narrations from './Narrations'
import Projects from './Projects'
import Role from './Role'

export default function Construction() {
    return (
        <div className='w-full min-h-[400px] my-10'>
            <Role />
            <Narrations />
            <Projects />
        </div>
    )
}
