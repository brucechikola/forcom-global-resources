import React, { useEffect, useState } from 'react'
import './style.css'
export default function Toggle(props) {
    const {
        className,
        style,
        offText,
        onText,
        width = 80,
        height = 50,
        activeColor = "black",
        inactiveColor = "white",
        toggleClassName,
        onToggle,
        value = false
    } = props
    const [toggleStatus, setToggleStatus] = useState(value)

    return (
        <div
            className={`toggle-anime relative w-[${width}px] bg-white rounded-full h-[${height}px] ${className} cursor-pointer flex items-center justify-content`}
            style={{ width: width, height: height, ...style }}
        >
            <div
                style={style}
                className={`toggle-anime w-[50%] h-[90%] font-semibold flex items-center justify-center rounded-full transition linear duration-500 linear absolute ${toggleClassName} ${toggleStatus ? 'right-[4px]' : 'left-[4px]'}`}
            ></div>
            <div
                style={style}
                onClick={() => { onToggle(false); setToggleStatus(false) }}
                className={`toggle-anime w-[50%] h-[90%] z-10 text-${!toggleStatus ? activeColor : inactiveColor} font-semibold flex items-center justify-center rounded-full transition linear absolute left-0`}
            >
                {offText}
            </div>
            <div
                style={style}
                onClick={() => { onToggle(true); setToggleStatus(true) }}
                className={`toggle-anime w-[50%] h-[90%] text-${toggleStatus ? activeColor : inactiveColor} font-semibold flex items-center justify-center rounded-full transition linear absolute right-0`}
            >
                {onText}
            </div>
        </div>
    )
}


