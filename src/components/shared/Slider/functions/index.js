import $ from 'jquery'
export default class Animate_Slider {
    constructor(interval = 3000, reference) {
        this.interval = interval
        this.intervalContainer = null
        this.sliderReference = reference
        this.totalSlides = $(this.sliderReference.current).children().length - 1
        this.slides = $(this.sliderReference.current).children()
        this.currentIndex = 0
        this.slideCounter = 0
        this.slideList = []
        this.init()
    }
    init() {
        const cls = this
        this.start().then(() => {
            clearInterval(cls.intervalContainer)
            this.intervalContainer = setInterval(() => {
                if (this.slideCounter === 0) {
                    this.slideList[0] = this.slides[0]
                    this.slideList[1] = this.slides[1]
                    this.slideCounter += 1
                }
                else if (this.slideCounter === this.totalSlides) {
                    this.slideList[0] = this.slides[this.slideCounter]
                    this.slideList[1] = this.slides[0]
                    this.slideCounter = 0
                }
                else {
                    this.slideList[0] = this.slides[this.slideCounter]
                    this.slideList[1] = this.slides[this.slideCounter + 1]
                    this.slideCounter += 1
                }
                this.animate()
            }, this.interval);
        })
    }
    async start() {
        this.slideList.push(this.slides[0])
        this.slideList.push(this.slides[1])
        $(this.slideList[0]).addClass('active').removeClass('move-to-right slide-left')
        $.each(this.slides, (index, slide) => { $(slide).attr('id', index) })
    }
    animate() {
        $(this.slideList[0]).addClass('slide-left').removeClass('active')
        $(this.slideList[1]).addClass('active').removeClass('move-to-right slide-left')
        this.resetSlide(this.slideList[0])
    }
    resetSlide(slide) {
        setTimeout(() => {
            $(slide).addClass('slide-left move-to-right')
        }, this.interval / 2);
    }
}