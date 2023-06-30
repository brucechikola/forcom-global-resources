import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from 'utils/motion/motion'

const SectionWrapper = (Component, idName, width = 'max-w-7xl', viewPortOnce = false) => function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: viewPortOnce, amount: 0.4 }}
            className={`mx-auto ${width} relative z-1 h-[100vh]`}
        >
            {/* <span className='hash' id={idName}>
                &nbsp;
            </span> */}
            <Component />
        </motion.section>
    )
}
export default SectionWrapper