import React from 'react'
import { forwardRef } from 'react'
const CheckField = forwardRef((props, ref) => {
    const {
        onChange,
        className,
        style,
        title,
        value,
        checked,
        disabled = false,
        size = 20,
        ...rest
    } = props
    return (
        <div className='flex items-center justify-start'>
            <input
                ref={ref}
                type="checkbox"
                value={value}
                onChange={onChange}
                className={` mr-3 ${className}`}
                style={{ width: size, height: size, ...style }}
                checked={checked}
                disabled={disabled}
                {...rest}
            />
            {
                title && <span className="">{title}</span>
            }
        </div>
    )
})

export default CheckField