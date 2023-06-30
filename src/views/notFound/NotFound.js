import Container from 'components/shared/Container'
import Flex from 'components/shared/Flex'
import Grid from 'components/shared/Grid'
import Link from 'components/shared/Link'
import Title from 'components/shared/Title'
import { IMG_PATH } from 'constants'
import React from 'react'
import { BsCashCoin, BsCollection, BsInfoCircle } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { MdArrowRight } from 'react-icons/md'
import Footer from 'views/common/Footer'

export default function NotFound() {
    return (
        <div className='w-full'>
            <Container
                className=" w-full h-[100vh] flex items-end justify-end"
            >
                <Flex className="bg-tertiary h-[80%] w-full" direction="column">
                    <div className="w-full h-full bg-white flex items-center justify-center flex-col">
                        <div className="text-red-600 text-[70px] font-bold">404</div>
                        <div className="text-tertiary text-[20px] mt-3">
                            Page Not Found!
                        </div>
                        <small className="text-slate-600">The page you are looking for is not found!</small>
                        <Link className="text-[13px] mt-3" to="/">Go Back Home <MdArrowRight size={24} className='ml-2' /></Link>
                    </div>
                </Flex>
                <Footer />
            </Container>

        </div>
    )
}
