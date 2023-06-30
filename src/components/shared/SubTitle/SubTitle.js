import React from 'react'

export default function SubTitle(props) {
    const { title, className, style, wrapperClass } = props
    return (
        <div className={`w-full my-2 ${wrapperClass}`}>
            <span className={`text-gray-500 ${className}`} style={style}>{title}</span>
        </div>
    )
}
