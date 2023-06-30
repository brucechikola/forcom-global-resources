import React from 'react'

export default function Row(props) {
    const {
        className,
        style,
        justify = 'start',
        align = 'center',
        children,
        minHeight = '20px',
        onClick
    } = props
    return (
        <div onClick={onClick} className={`w-full flex items-${align} justify-${justify} min-h-[${minHeight}] ${className} my-1`} style={style}>
            {children}
        </div>
    )
}
