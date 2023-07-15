import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import More from './components/More'
import Sectors from './components/Sectors'
import Footer from 'views/common/Footer'

export default function Landing() {
    return (
        <div className='w-full p-0'>
            <Hero />
            <More />
            <Sectors />
            <Footer />
        </div>
    )
}
