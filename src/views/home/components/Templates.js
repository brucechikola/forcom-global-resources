import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { FaArrowRight } from 'react-icons/fa'
import { fadeIn, textVariant } from 'utils/motion/motion'
import SectionWrapper from 'hoc'
import { styles } from 'styles'
import { services } from 'mock/data'
const Templates = () => {
  const Service = ({ title, icon, index }) => {
    return (
      <div>
        <Tilt tiltEnable={false} className="xs:w-[100%] w-full transition duration-[.7] cursor-pointer">
          <motion.div
            variants={fadeIn('right', 'spring', 0.2 * index, 0.35)}
            className="w-full p-[1px] rounded-[5px] shadow-card"
          >
            <div
              options={{
                max: 10,
                scale: 1,
                speed: 20
              }}
              className='bg-tertiary w-full h-full  rounded-[5px] min-h-[300px] flex justify-evenly flex-col items-center'
            >
              <img src={icon} alt={title} className='w-full h-full object-cover  border-[4px] border-white rounded-md' />
              <div className='w-full h-full absolute top-0 left-0 z-[2]'></div>
            </div>
          </motion.div>
        </Tilt>
      </div>
    )
  }
  const Scrollers = () => {
    const Dot = ({ isActive }) => {
      return (
        <div className={`w-4 h-4 rounded-md rotate-[45deg] border-[3px] border-${isActive ? 'purple-default' : 'white'} cursor-pointer mx-3`}></div>
      )
    }
    return (
      <div className='w-full h-[80px] mt-10 flex items-center justify-center'>
        <Dot isActive={true} />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
    )
  }
  return (
    <div className="bg-tertiary w-full z-[20]">
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Templates</p>
        <h2 className={`${styles.sectionHeadText} my-0`}>WHAT WE HAVE SO FAR!</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.7, 1)}
        className="mt-3 max-w-3xl leading text-[18px] leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Deleniti, provident! Praesentium quo voluptatem nostrum soluta,
      </motion.p>
      <motion.div variants={textVariant()} className='w-full flex items-center justify-end'>
        <a href="" className='text-purple-default text-sm flex items-center justify-center'>View All Templates <FaArrowRight className="ml-2 text-white" /> </a>
      </motion.div>
      <div className='mt-4 grid grid-cols-4 gap-3'>
        {
          services.map((service, index) => <Service index={index} key={index} title={service.title} icon={service.icon} />)
        }
      </div>
      <Scrollers />
    </div>
  )
}

export default SectionWrapper(Templates, 'emplates')