import React from 'react'
import { MdCall, MdOutlineMenuOpen } from 'react-icons/md'
import DropDownMenu from './DropDownMenu'
import { AiOutlineCopy, AiOutlineFall } from 'react-icons/ai'
export default function DropDwon() {
    return (
        <div
            className="absolute w-full min-h-[80vh] bg-white rounded-md top-[80px] text-black p-5"
        >
            <div className="w-full flex items-center jusitfy-start border-b h-[30px] pb-4">
                <h4 className='text-slate-400 flex items-center jusitfy-start'>  <MdOutlineMenuOpen className='text-[20px] mr-2' /> Navigation Menus</h4>
            </div>
            <div className="w-full grid grid-cols-4 gap-4 mt-5">
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineCopy />} />
                <DropDownMenu title="Register as a partner" icon={<AiOutlineFall />} />
                <DropDownMenu title="Contact Us" icon={<MdCall />} />
                <DropDownMenu title="Contact Them" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
                <DropDownMenu title="Apply For A Job" icon={<AiOutlineFall />} />
            </div>
        </div>
    )
}
