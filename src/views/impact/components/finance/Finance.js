import React from 'react'
import Role from './Role'
import Content from './Content'
import Investments from './Investments'

export default function Finance() {
    return (
        <div className='w-full'>
            <Role />
            <Content />
            <Investments />
        </div>
    )
}
