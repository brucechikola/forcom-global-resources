import React, { useEffect, useRef, useState } from 'react'
import 'css/home.css'
import Head from './components/Head'
import { StarsCanvas } from 'utils/canvas'
import Templates from './components/Templates'
import About from 'views/about'
export default function Home() {
  const [trans, setTrans] = useState(1)
  const bg = useRef()
  useEffect(() => {
    let top = 0
    const scrollHeight = document.body.scrollHeight
    document.addEventListener('scroll', (e) => {
      top = document.documentElement.scrollTop
      if (top > 0) {
        const np = 1 + (top / scrollHeight)
        bg.current.style.transform = `scale(${np})`
      }
      else bg.current.style.transform = `scale(${1})`
    })
  }, [])
  return (
    <div className='w-full'>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div ref={bg} className="inset-0 w-full h-full bg-hero-pattern bg-cover bg-no-repeat bg-center left-0 fixed"></div>
        <div className="">
          <Head />
        </div>
        <div className="w-full bg-tertiary relative">
          <div className="absolute text-[13px] left-[-200px] top-[50%] translate-y-[-50%] w-[500px]  p-3 rounded-md h-[70px] grid grid-cols-2 rotate-[-90deg]">
            <div className="w-full pb-2 cursor-pointer text-purple-default h-full flex items-center justify-center relative font-bold">
              CURRICULAM VITTAES
              <div className="active absolute bottom-0 left-0 w-full h-[5px] transition duration-500 bg-purple-default rounded-[20px]"></div>
            </div>
            <div className="w-full h-full  cursor-pointer pb-2 flex items-center justify-center relative font-bold">
              COVER LETTERS
            </div>
          </div>
          <Templates />
        </div>
        <div className="relative z-0">
          <About />
          {/* <StarsCanvas /> */}
          {/* <Footer /> */}
        </div>
      </div>
      {/* <Login /> */}
      {/* <Admin /> */}
    </div>
  )
}
