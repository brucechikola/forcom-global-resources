import React from 'react'
import '../css/index.css'
export default function Spinner({ className, size = 40, borderColor = '#161741', borderWidth = 5 }) {
    return <div className={`${className} loader-wrapper my-3`}
        style={
            {
                width: size,
                height: size,
            }}
    >
        <div className={`${className} loader-inner w-full h-full rounded-full`}
            style={{
                borderColor: borderColor,
                borderWidth: borderWidth,
                borderRightColor: 'transparent'
            }}
        ></div>
    </div>
}
