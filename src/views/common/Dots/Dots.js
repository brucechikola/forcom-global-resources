import React from 'react'

export default function Dots(props) {
    const Dot = () => {
        return <div className="dot w-[4px] h-[4px]"></div>
    }
    let dots = []
    for (let index = 0; index < 323; index++) {
        dots.push(<Dot key={index} />)

    }
    return (
        <div className='dots-wrapper grid gap-4'>
            {
                dots.map((dot, index) => <Dot key={index} />)
            }
        </div>
    )
}
