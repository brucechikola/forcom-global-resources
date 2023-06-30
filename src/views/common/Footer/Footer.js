import 'css/footer.css'
import Container from 'components/shared/Container'
import React from 'react'
import Link from 'components/shared/Link'
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa'
import { GiBirdTwitter } from 'react-icons/gi'
export default function Footer() {
    return (
        <div className="bg-tertiary pb-1 my-0 min-h-[200px] w-full border-t border-gray-300 flex items-center justify-start flex-col">
            <div className='w-[83%] grid grid-cols-3 pt-7 text-[14px]'>
                <div className="w-full flex flex-col">
                    <span className="font-bold text-[23px] text-gray-400">QUICK LINKS</span>
                    <Link title="Home Page" className="text-white mb-3 ml-0" />
                    <Link title="Sectors" className="text-white mb-3 ml-0" />
                    <Link title="Career" className="text-white mb-3 ml-0" />
                    <Link title="Our Experience" className="text-white mb-3 ml-0" />
                </div>
                <div className="w-full flex flex-col">
                    <span className="font-bold text-[23px] text-gray-400">Contact</span>
                    <Link title="fgr@example.com" className="text-white mb-3 ml-0" />
                    <Link title="+260778899444" className="text-white mb-3 ml-0" />
                    <Link title="+260998847847" className="text-white mb-3 ml-0" />
                    <Link title="Woodgate House, Along Cairo Road, Lusaka" className="text-white mb-3 ml-0" />
                </div>
                <div className="w-[80%] flex flex-col mx-right ml-[100px]">
                    <span className="font-bold text-[23px] text-gray-400">More</span>
                    <Link title="Cooperate" className="text-white mb-3 ml-0" />
                    <Link title="Register" className="text-white mb-3 ml-0" />
                    <Link title="Employeement" className="text-white mb-3 ml-0" />
                    <Link title="Partners" className="text-white mb-3 ml-0" />
                </div>
            </div>
            <div className="col-span-3 w-full border-t border-gray-500 flex items-center justify-center mt-5 h-[80px] text-white ">
                <div className="w-[83%] flex items-center justify-between">
                    <div className="flex items-center text-[12px]">
                        &copy; 2023 | All Rights Reserved | Forcom Global Resources
                    </div>
                    <div className="flex items-center">
                        <FaFacebook className='text-[25px] ml-10 cursor-pointer hover:text-blue-800' />
                        <GiBirdTwitter className='text-[25px] ml-10 cursor-pointer hover:text-blue-800' />
                        <FaInstagramSquare className='text-[25px] ml-10 cursor-pointer hover:text-blue-800' />
                        <FaWhatsappSquare className='text-[25px] ml-10 cursor-pointer hover:text-blue-800' />
                    </div>
                </div>
            </div>
        </div>
    )
}
