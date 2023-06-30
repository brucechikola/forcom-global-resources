import { Unique } from 'functions/common'
import React, { useEffect, useRef, useState } from 'react'
import Slide from './components/Slide'
import './css/index.css'
import Animate_Slider from './functions'
export default function Slider(props) {
    const slider_ref = useRef()
    const {
        slides,
        className,
        style,
        interval = 3000,
        transitionDuration = 2,
        overlay = false,
        ...rest
    } = props
    const [slideContent, setSlideContent] = useState({
        slides: [],
        duration: 0
    })
    useEffect(() => {
        setSlideContent({
            slides: slides,
            duration: transitionDuration,
            interval: interval
        })
    }, [])
    useEffect(() => {
        if (slideContent.slides.length > 0) {
            new Animate_Slider(slideContent.interval, slider_ref)
        }
    }, [slideContent])
    return (
        <div className='w-full h-full relative'>
            <div ref={slider_ref} className={`slider-wrapper w-full h-full flex min-h-[200px] ${className} relative`} style={style}>
                {
                    slideContent.slides.length >= 0 &&
                    slideContent.slides.map(slide => (
                        <Slide
                            style={{
                                transitionDuration: transitionDuration,
                                ...slide.style
                            }}
                            className={`${slide.className}`}
                            key={Unique()}>
                            {slide.content && slide.content}
                        </Slide>
                    )
                    )
                }
            </div>
            {overlay && <div className="w-full h-full overlay">{overlay}</div>}
        </div>
    )
}
