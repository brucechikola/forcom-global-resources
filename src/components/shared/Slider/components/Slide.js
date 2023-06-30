import React, { forwardRef } from 'react'

const Slide = forwardRef((props, ref) => {
    const { children, className, style, transition = 1.3, ...rest } = props
    return (
        <div
            ref={ref}
            className={`slide-inner w-full h-full absolute top-0 ${className}`}
            style={{
                ...style,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                transitionDuration: transition
            }}
            {...rest}
        >
            {children}
        </div>
    )
})

export default Slide