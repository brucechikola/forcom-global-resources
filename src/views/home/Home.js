import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import More from './components/More'
import Sectors from './components/Sectors'
import Footer from 'views/common/Footer'

export default function Home() {
    return (
        <div className='w-full p-0 h-screen overflow-hidden'>
            <Hero />
        </div>
    )
}
