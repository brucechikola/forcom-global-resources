import React, { forwardRef } from 'react'

const InputField = forwardRef((props, ref) => {
    const {
        type = 'input',
        placeholder,
        className,
        id,
        label,
        labelClassName,
        onChange,
        value,
        width = '150px',
        wrapperClass,
        ...rest
    } = props
    return (
        <div className={` ${wrapperClass} flex justify-center w-full`}>
            <div className="w-full">
                {
                    label && <label className={`form-label inline-block mb-1 text-gray-700 ${labelClassName}`} >{label}</label>
                }
                {
                    type === 'input' && <input
                        ref={ref}
                        onChange={onChange}
                        value={value}
                        type={type || 'text'}
                        className={`form-control text-[13px] w-full min-w-[${width}] min-h-[35px] px-3 border border-1 border-gray-200 rounded-md transition ease-in-out focus:outline-indigo-800 ${className}`}
                        id={id}
                        placeholder={placeholder}
                        {...rest}
                    />
                }
                {
                    type === 'textArea' && <textarea placeholder={placeholder} className={`${className} resize-none text-black p-3 h-[150px] bg-[#F5EFFC] px-3 rounded-md focus:outline-indigo-800 min-h-[80px] border border-1 border-gray-200 w-full`}></textarea>
                }
            </div>
        </div >
    )
})
export default InputField

