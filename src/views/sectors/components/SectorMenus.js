import React from 'react'

export default function SectorMenus() {
    const Menu = ({ title, to, active }) => {
        const bg = active ? 'bg-tertiary text-white' : 'bg-slate-200 text-slate-800'
        return <button className={`${bg}  p-3 min-h-[50px] rounded-md text-[13px]`}>{title}</button>
    }
    return (
        <div className='w-full flex items-center justify-center min-h-[50px] mt-5'>
            <div className="w-[80%] grid grid-cols-4 gap-7">
                <Menu title="Engineering" to="" />
                <Menu title="Finance & accounting" to="" />
                <Menu title="Construction" to="" />
                <Menu title="Agriculture & food production" to="" active={true} />
                <Menu title="Production & supply chain" to="" />
                <Menu title="Veterinary services" to="" />
                <Menu title="Mining and gemstone industry" to="" />
                <Menu title="Global Market Agency & trade Management" to="" />
                <Menu title="Education" to="" />
            </div>
        </div>
    )
}
