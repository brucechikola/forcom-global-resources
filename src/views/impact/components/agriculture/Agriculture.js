import React from 'react'

import Role from './Role'
import Crops from './Crops'
import FoodProcess from './FoodProcess'

export default function Agriculture() {
    return (
        <div className='w-full mt-10 min-h-[500px] py-20'>
            <div className="w-[70%] mx-auto">
                <Role />
            </div>
            <Crops />
            <FoodProcess />
        </div>
    )
}
