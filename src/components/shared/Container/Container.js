import React from 'react'
import './css/index.css'
export default function Container(props) {
    const { className, style, children, minHeight = '100vh' } = props
    return (
        <div
            className={`w-full min-h-[${minHeight}] flex items-start justify-center ${className}`}
            style={style}
        >
            <div
                className={`inner-container w-4/5 h-full ${className}`}
                style={style}
            >
                {children}
            </div>
        </div>
    )
}
