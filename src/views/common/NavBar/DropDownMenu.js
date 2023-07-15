import Link from 'components/shared/Link'
import React from 'react'

export default function DropDownMenu({ title, icon }) {
    return (
        <Link to="" className="border-b pb-5">
            {icon} <span className="text-[14px]">{title}</span>
        </Link>
    )
}
