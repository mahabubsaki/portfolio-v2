import { useAnimation, motion } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { AppContext } from '../../App';
import development from '../../Assets/web-development.e943b1aab634928dc45e.png'
import design from '../../Assets/web-design.f721d6300da36dde4a81.png'
import bug from '../../Assets/bug-fix.e943b1aab634928dc45e.png'
import problem from '../../Assets/problem.f721d6300da36dde4a81.png'
import capture from '../../Assets/code.2e0870f212ca633e2bf9.png'
import responsive from '../../Assets/resp.png'
import './Services.css'

const Services = () => {
    const myElement = useRef()
    const handleHover = (e) => {
        const x = e.pageX - myElement.current.offsetLeft
        const y = e.pageY - myElement.current.offsetTop

        myElement.current.style.setProperty('--x', x + 'px')
        myElement.current.style.setProperty('--y', y + 'px')
    }
    const myElement2 = useRef()
    const handleHover2 = (e) => {
        const x = e.pageX - myElement2.current.offsetLeft
        const y = e.pageY - myElement2.current.offsetTop

        myElement2.current.style.setProperty('--x', x + 'px')
        myElement2.current.style.setProperty('--y', y + 'px')
    }
    const myElement3 = useRef()
    const handleHover3 = (e) => {
        const x = e.pageX - myElement3.current.offsetLeft
        const y = e.pageY - myElement3.current.offsetTop

        myElement3.current.style.setProperty('--x', x + 'px')
        myElement3.current.style.setProperty('--y', y + 'px')
    }
    const myElement4 = useRef()
    const handleHover4 = (e) => {
        const x = e.pageX - myElement4.current.offsetLeft
        const y = e.pageY - myElement4.current.offsetTop

        myElement4.current.style.setProperty('--x', x + 'px')
        myElement4.current.style.setProperty('--y', y + 'px')
    }
    const myElement5 = useRef()
    const handleHover5 = (e) => {
        const x = e.pageX - myElement5.current.offsetLeft
        const y = e.pageY - myElement5.current.offsetTop

        myElement5.current.style.setProperty('--x', x + 'px')
        myElement5.current.style.setProperty('--y', y + 'px')
    }
    const myElement6 = useRef()
    const handleHover6 = (e) => {
        const x = e.pageX - myElement6.current.offsetLeft
        const y = e.pageY - myElement6.current.offsetTop

        myElement6.current.style.setProperty('--x', x + 'px')
        myElement6.current.style.setProperty('--y', y + 'px')
    }
    const { setNavOpen } = useContext(AppContext)
    useEffect(() => {
        setNavOpen(false)
    }, [])
    const animation1 = useAnimation()
    const { ref: ref1, inView: inView1 } = useInView()
    useEffect(() => {
        if (inView1) {
            animation1.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.5
                }
            })
        }
        else {
            animation1.start({
                x: '100vw'
            })
        }
    }, [inView1, animation1])
    return (
        <div className="w-[95%] mx-auto">
            <div ref={ref1}>
                <motion.h1 className='mx-auto text-center
                 text-5xl pb-3 font-bold my-4 text-white' animate={animation1}>My<span className="text-[#E84A5F]"> Services</span></motion.h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden mb-6">
                    <div className='flex flex-col relative rounded-2xl p-10 bg-[#f0ebe3] shadow-lg gap-4 post overflow-hidden' ref={myElement} data-aos="fade-left" onMouseMove={handleHover}>
                        <img src={design} alt="" className="mx-auto w-[64px] h-[64px] z-10" />
                        <h1 className='text-2xl text-center font-bold my-3 post-title'>Web Design</h1>
                        <p className="post-des">In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. I can build beatiful user interface which will be very helpful for your business.</p>
                    </div>
                    <div className='flex flex-col relative rounded-2xl p-10 bg-[#f0ebe3] shadow-lg gap-4 post-2 overflow-hidden' ref={myElement2} data-aos="fade-left" onMouseMove={handleHover2}>
                        <img src={development} alt="" className="mx-auto w-[64px] h-[64px] z-10" />
                        <h1 className='text-2xl text-center font-bold my-3 post-title2'>Web Development</h1>
                        <p className="post-des2">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. User experience helps the user to spend more time on web applications to explore more feature.</p>
                    </div>
                    <div className='flex flex-col relative rounded-2xl p-10 bg-[#f0ebe3] shadow-lg gap-4 post-3 overflow-hidden' ref={myElement3} data-aos="fade-left" onMouseMove={handleHover3}>
                        <img src={capture} alt="" className="mx-auto w-[64px] h-[64px] z-10" />
                        <h1 className='text-2xl text-center font-bold my-3 post-title3'>Capture Code</h1>
                        <p className="post-des3">Understanding other developer's code is also needed. Sometimes we need to add new feature on a existing project. But if we are unable to understand previous code, we can't add a feature properly. I can easily capture other's code and add some cool features according to the demand. And this process will be super fast</p>
                    </div>
                    <div className='flex flex-col relative rounded-2xl p-10 bg-[#f0ebe3] shadow-lg gap-4 post-4 overflow-hidden' ref={myElement4} data-aos="fade-left" onMouseMove={handleHover4}>
                        <img src={responsive} alt="" className="mx-auto w-[64px] h-[64px] z-10" />
                        <h1 className='text-2xl text-center font-bold my-3 post-title4'>Responsive Design</h1>
                        <p className="post-des4">Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexbox, flexible grids and layouts, media queries.</p>
                    </div>
                    <div className='flex flex-col relative rounded-2xl p-10 bg-[#f0ebe3] shadow-lg gap-4 post-5 overflow-hidden' ref={myElement5} data-aos="fade-left" onMouseMove={handleHover5}>
                        <img src={problem} alt="" className="mx-auto w-[64px] h-[64px] z-10" />
                        <h1 className='text-2xl text-center font-bold my-3 post-title5'>Problem Solving</h1>
                        <p className="post-des5">I have solved around 100+ problems with JavaScript in leetcode. This problem solvings has increased my knowledge about web development complexity. If I face a problem while development I can fix them with my problem skills. Which will make things easier on projects.</p>
                    </div>
                    <div className='flex flex-col relative rounded-2xl p-10 bg-[#f0ebe3] shadow-lg gap-4 post-6 overflow-hidden' ref={myElement6} data-aos="fade-left" onMouseMove={handleHover6}>
                        <img src={bug} alt="" className="mx-auto w-[64px] h-[64px] z-10" />
                        <h1 className='text-2xl text-center font-bold my-3 post-title6'>Bug Fixing</h1>
                        <p className="post-des6">Bugs has always been a problem for web developers. Nowadays any web aplication can have minor or major bugs , and this kind of bugs decrease the applications performance. But bugs can also be fixable. I can easily detect bugs and fix them. For detecting bugs I mainly use chrome dev tool.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;