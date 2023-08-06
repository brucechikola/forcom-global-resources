import React from 'react'
import Hero from './components/Hero'
import Footer from 'views/common/Footer'
import { useSelector } from 'react-redux'
import Agriculture from './components/agriculture/Agriculture'
import Construction from './components/construction/Construction'
import Finance from './components/finance/Finance'
import Education from './components/education/Education'

export default function Impact() {
    const { sectors, selected_sector } = useSelector(state => state.sector)
    return (
        <div className='w-full bg-gray-100'>
            <Hero />
            {selected_sector.title === 'Agriculture' && <Agriculture />}
            {selected_sector.title === 'Construction' && <Construction />}
            {selected_sector.title === 'Financing' && <Finance />}
            {selected_sector.title === 'Ict & Education' && <Education />}
            <Footer />
        </div>
    )
}
