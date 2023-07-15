import React from 'react'
import Hero from './components/Hero'
import SectorDescription from './components/SectorDescription'
import Footer from 'views/common/Footer'
import SectorMenus from './components/SectorMenus'

export default function Sectors() {
    return (
        <div className='w-full'>
            <Hero />
            <SectorMenus />
            <SectorDescription />
            <Footer />
        </div>
    )
}
