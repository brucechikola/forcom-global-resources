import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from 'components/template/Logo'
import unauthenticatedRoutes from 'config/routing/unauthenticatedRoutes'
import { fadeIn } from 'utils/motion/motion'
import { styles } from 'styles'
import SectionWrapper from 'hoc'
import { Unique } from 'functions/common'
const Navbar = () => {
  const [active, setActive] = useState('Homepage')
  const ref = useRef()
  useEffect(() => {
    const scrollHeight = document.body.scrollHeight
    document.addEventListener('scroll', (e) => {
      let top = document.documentElement.scrollTop
      let opacity = 0
      if (top > 0) {
        opacity = (top / (scrollHeight / 20)).toFixed(0)
        console.log(opacity)
        if (opacity <= 1) {
          ref.current.style.opacity = opacity
        }
      }
      else ref.current.style.opacity = 0
    })
  }, [active])
  return (
    <nav className={`w-full flex items-center fixed left-0 z-[30] bg-tertiarys h-[80px]`}>
      <div ref={ref} className='bg-tertiary absolute top-0 left-0 h-[80px] w-full opacity-0' style={{ transition: '1.2s' }}></div>
      <div className='w-full flex items-center justify-between max-w-[85%] mx-auto z-[10]'>
        <motion.div
          variants={fadeIn('left', 'spring', 0.25 * unauthenticatedRoutes.length, .2)}
        >
          <Link className='flex flex items-center gap-2'
            to='/'
            onClick={() => {
              setActive("")
              window.scrollTo(0, 0)
            }}
          >
            <div className='flex items-center justify-center'>
              <Logo />
              <h2 className='text-white font-bold ml-2 m-0'>Forcom Global Resources</h2>
            </div>
          </Link>
        </motion.div>
        <ul className='flex list-none hidden sm:flex flex-row gap-10 h-[30px] items-center justify-center'>
          {
            unauthenticatedRoutes.map((navLink, index) => (
              navLink.includeInNav &&
              <motion.li
                variants={fadeIn('left', 'tween', 0.17 * index, 0.25)}
                key={Unique()}
                className="curspor-pointer transition duration-500"
                onClick={() => setActive(navLink.title)}
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                  }}
                  className='relative flex items-center justify-center'
                >
                  {
                    active === navLink.title && <div className='absolute transition duration-500 left-[-12px] top-[-5px] w-[33px] h-[33px] rounded-full border border-[2px] border-white opacity-[0.4] '></div>
                  }
                  <a className={`bg-tertiarys transition duration-500 hover:text-purple-default z-[2] ${styles.linkText} ${active === navLink.title ? 'text-white' : ''}`} href={`#${navLink.id}`}>{navLink.title}</a>
                </div>

              </motion.li>
            ))
          }

        </ul>
      </div>

    </nav >
  )
}

export default Navbar
//  SectionWrapper(Navbar, 'navbar', 'w-full', true)