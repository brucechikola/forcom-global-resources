import React from 'react'

export default function Hero() {
    return (
        <div
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 84%, 88% 98%, 0 80%, 0% 50%)',
                background: 'linear-gradient(rgb(0,0,0,50%)), rgba(0,0,0,60%)), url(img/others/mining.jpeg)',
            }}
            className='w-full h-[600px] bg-tertiary'
        >Hero</div>
    )
}
