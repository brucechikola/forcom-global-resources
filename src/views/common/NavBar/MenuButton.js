import React, { useState } from 'react'

export default function MenuButton() {
    const [navClick, setNavClick] = useState(false)
    const onClick = () => {
        setNavClick(!navClick)
    }
    return (
        <div onClick={onClick} className='menu-btn flex flex-col items-end justify-center'>
            <span className={`spn ${navClick ? 'sp1-exp' : ''} spn1`}></span>
            <span className={`spn ${navClick ? 'sp2-exp' : ''} spn2`}></span>
            <span className={`spn ${navClick ? 'sp3-exp' : ''} spn3`}></span>
        </div>
    )
}
