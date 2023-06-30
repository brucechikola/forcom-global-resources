import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from 'utils/motion/motion'
import SectionWrapper from 'hoc'
import { styles } from 'styles'
const Header = () => {
    const fist = useRef()
    useEffect(() => {
        let position = 0
        document.addEventListener('scroll', (e) => {
            position = document.documentElement.scrollTop
            fist.current.style.transform = `rotate(${-position / 1.01}deg)`
        })
    }, [])
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`absolute mb-[180px] h-full inset-0 top-[120px] max-w-7xl mx-auto grid grid-cols-2 gap-3`}>
                <div className='w-full h-full flex flex-col mt-[80px]'>
                    <div ref={fist} className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 opacity-[0.2] h-5 rounded-full bg-[#915eff]' />
                        <div className='w-1 opacity-[0.2] sm:h-10 h-20 violet-gradients bg-[#915eff]' />
                        <div className='w-5 opacity-[0.2] h-5 rounded-full bg-[#915eff]' />
                    </div>
                    <motion.div variants={textVariant()}>
                        <span className='text-white font-bold'>WELCOME TO CV BUILD</span>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            <span className='text-[#fff]'>LETS BUILD YOUR CV!</span>
                        </h1>
                        <motion.p className='w-[100%] my-5' variants={fadeIn('', '', 0.7, 1)}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis minima consequatur quisquam eos excepturi iste,
                            expedita aspernatur eveniet ipsam,
                            necessitatibus quaerat odio amet impedit.
                        </motion.p>
                        <motion.div variants={textVariant(2)} className='mt-[100px] flex relative w-[40%]'>
                            <div className='absolute left-[-60px] w-[120px] h-[120px] top-[-30px] rounded-3xl border-[3px] border-[#F3882F] opacity-[0.3] rotate-[45deg]'></div>
                            <div className='absolute left-[-40px] w-[120px] h-[120px] top-[-30px] rounded-3xl border-[3px] border-[#4763ff] opacity-[0.3] rotate-[45deg]'></div>
                            <div className='absolute left-[-20px] w-[120px] h-[120px] top-[-30px] rounded-3xl border-[3px] border-[#F32FE1] opacity-[0.3] rotate-[45deg]'></div>
                            <button type="button" className={`z-[5] w-full bg-[#915eff] text-white font-semibold ${styles.btn}`}>Get Started</button>
                            <button type="button" className={`z-[5] w-full bg-white text-primary ml-10 ${styles.btn}`}>Login Now</button>
                        </motion.div>
                    </motion.div>
                </div>
                <div className='w-full h-full'>
                    <img src="blob.svg" alt="" />
                </div>
            </div>

            <div className='absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center'>
                <a href="#about">
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 5.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-5 rounded-full mb-1 bg-white"
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default SectionWrapper(Header, 'head', '', true)