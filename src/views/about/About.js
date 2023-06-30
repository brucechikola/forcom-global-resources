import React from 'react'
import { motion } from 'framer-motion'
import InputField from 'components/shared/InputField'
import { EarthCanvas } from 'utils/canvas'
import { styles } from 'styles'
import { slideIn } from 'utils/motion/motion'
import SectionWrapper from 'hoc'
const About = () => {

    return (
        <div className='flex items-center justify-center gap-10 overflow-hidden h-[80vh] mb-[50px] bg-tertiary rounded-md'>
            <div className='w-full h-[max-content] py-7 rounded-lg bg-tertiary-transparent flex items-center justify-center'>
                <div className='w-[70%]  grid grid-cols-2 gap-2'>
                    <div className='overflow-hidden w-full col-span-2'>
                        <motion.div variants={slideIn('up', 'tween', 0.2, 1)} className='overflow-hidden w-full'>
                            <h2 className={`${styles.heroHeadText}`}>Get In Touch</h2>
                        </motion.div>
                    </div>
                    <div className='overflow-hidden w-full'>
                        <motion.div variants={slideIn('up', 'tween', 0.6, 1)} className='overflow-hidden w-full'>
                            <InputField
                                wrapperClass="mb-5"
                                labelClassName="text-white"
                                className="border-0 bg-white h-[50px] rounded-sm"
                                placeholder="Enter your First Name"
                                label="First Name"
                            />

                        </motion.div>
                    </div>
                    <div className='overflow-hidden w-full'>
                        <motion.div variants={slideIn('up', 'tween', 1, 1)} className='overflow-hidden w-full'>
                            <InputField
                                wrapperClass="mb-5"
                                labelClassName="text-white"
                                className="border-0 bg-white h-[50px] rounded-sm"
                                placeholder="Enter your Last Name"
                                label="Last Name"
                            />
                        </motion.div>
                    </div>
                    <div className='overflow-hidden w-full'>
                        <motion.div variants={slideIn('up', 'tween', 1.4, 1)} className='overflow-hidden w-full'>
                            <InputField
                                wrapperClass="mb-5"
                                labelClassName="text-white"
                                className="border-0 bg-white h-[50px] rounded-sm"
                                placeholder="Enter your Email Address"
                                label="Email Name"
                            />
                        </motion.div>
                    </div>
                    <div className='overflow-hidden w-full'>
                        <motion.div variants={slideIn('up', 'tween', 1.8, 1)} className='overflow-hidden w-full'>
                            <InputField
                                wrapperClass="mb-5"
                                labelClassName="text-white"
                                className="border-0 bg-white h-[50px] rounded-sm"
                                placeholder="Enter your Contact Number"
                                label="Contact Number"
                            />
                        </motion.div>
                    </div>
                    <div className='overflow-hidden w-full col-span-2'>
                        <motion.div variants={slideIn('up', 'tween', 2.2, 1)} className='overflow-hidden w-full'>
                            <div className="w-full">
                                <InputField
                                    wrapperClass="mb-5"
                                    labelClassName="text-white"
                                    placeholder="Message"
                                    type="textArea" label='Your Message'
                                    className="col-span-2"
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div></div>
                    <div className='overflow-hidden w-full'>
                        <motion.div variants={slideIn('up', 'tween', 2.8, 1)} className='overflow-hidden w-full'>
                            <button type="submit" className={`${styles.btn} bg-purple-default w-full`}>Submit</button>
                        </motion.div>
                    </div>
                </div>
            </div >
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[300px]"
            >
                <div className="w-full h-full flex items-center justify-center flex-col relative">
                    {/* <EarthCanvas /> */}

                </div>
            </motion.div>
        </div >
    )
}

export default SectionWrapper(About, 'contact', undefined, false)