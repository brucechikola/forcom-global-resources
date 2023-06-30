import React from 'react'
import { NumberFormatBase, NumericFormat } from 'react-number-format'
export default function Amount(props) {
    const { value, prefix, suffix, className, style, align = "right" } = props
    return (
        <span className={`font-semibold ${className} flex items-center justify-center`} style={{ width: 'max-content', style }}>
            <NumericFormat
                value={value}
                thousandSeparator
                prefix={prefix}
                suffix={suffix}
                renderText
                // decimalSeparator
                disabled
                className={`flex text-right items-end`}
                style={{ maxWidth: 'max-content' }}
            />
        </span>
    )
}
