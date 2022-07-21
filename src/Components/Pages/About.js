import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import './About.css'
import projects from '../../Assets/project-management.png'
import experience from '../../Assets/experience.png'
import certificate from '../../Assets/certificate.png'
import client from '../../Assets/person.png'
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Aos from 'aos';
Aos.init()
const About = () => {
    const { setNavOpen } = useContext(AppContext)
    useEffect(() => {
        setNavOpen(false)
    }, [])
    const animation1 = useAnimation()
    const animation2 = useAnimation()
    const animation3 = useAnimation()
    const animation4 = useAnimation()
    const animation5 = useAnimation()
    const animation6 = useAnimation()
    const animation7 = useAnimation()
    const animation8 = useAnimation()
    const { ref, inView } = useInView()
    const { ref: ref2, inView: inView2 } = useInView()
    const { ref: ref3, inView: inView3 } = useInView()
    useEffect(() => {
        if (inView3) {
            animation3.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            })
            animation4.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            })
            animation5.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            })
            animation6.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            })
            animation7.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            })
            animation8.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            })
        }
        else {
            animation3.start({
                x: 100,
                y: -200,
                opacity: 0,
            })
            animation4.start({
                x: -200,
                y: 100,
                opacity: 0,
            })
            animation5.start({
                x: -100,
                y: -200,
                opacity: 0,
            })
            animation6.start({
                x: 100,
                y: 200,
                opacity: 0,
            })
            animation7.start({
                x: -100,
                y: 200,
                opacity: 0,
            })
            animation8.start({
                x: 200,
                y: -100,
                opacity: 0,
            })
        }
    }, [inView3, animation3, animation4, animation5, animation6, animation7, animation8])
    useEffect(() => {
        if (inView2) {
            animation2.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.5
                }
            })
        }
        else {
            animation2.start({
                x: '100vw'
            })
        }
    }, [inView2, animation2])
    useEffect(() => {
        if (inView) {
            animation1.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.5
                }
            })
        }
        else {
            animation1.start({
                x: '-100vw'
            })
        }
    }, [inView, animation1])
    return (
        <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center overflow-hidden p-4">
            <motion.div ref={ref}>
                <motion.h1 className='mx-auto text-center
                 text-5xl pb-3 font-bold' animate={animation1}><span className="text-[#FF8D29]">About</span> Me</motion.h1>
                <div className="mt-5 text-xl flex flex-col gap-3" ref={ref3}>
                    <motion.p animate={animation3}>Name : <span className="text-[#FF8D29]" >Mahabub Saki</span></motion.p>
                    <motion.p animate={animation4}>Age : <span className="text-[#FF8D29]" >20</span></motion.p>
                    <motion.p animate={animation5}>Education : <span className="text-[#FF8D29]" >HSC (Science)</span></motion.p>
                    <motion.p animate={animation6}>Role : <span className="text-[#FF8D29]" >React Developer</span></motion.p>
                    <motion.p animate={animation7}>Language : <span className="text-[#FF8D29]" >Bangla, Hindi, English</span></motion.p>
                    <motion.p animate={animation8}>Interest : <span className="text-[#FF8D29]" >Football, Gaming, Music</span></motion.p>
                </div>
            </motion.div>
            <motion.div className="mx-6 my-8" ref={ref2}>
                <motion.h1 className='text-center text-4xl font-bold mb-4 pb-3' animate={animation2}>Introduction</motion.h1>
                <Typewriter
                    options={{ delay: 1, cursorClassName: 'description', }}
                    onInit={(typewriter) => {
                        typewriter.typeString('An aspiring React Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript(ES6), Bootstrap5, TypeScript, Redux-Toolkit, TailwindCSS, React JS, Next JS, Node JS, Express JS, Mongo DB, Firebase. Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 1+ years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.').callFunction(() => {
                        })
                            .pauseFor(25000000)
                            .callFunction(() => {

                            })
                            .start();
                    }}
                />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6 justify-between w-4/5 md:w-[70%] text-4xl">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="py-10 px-6 flex flex-col items-center text-center rounded-xl about-box h-auto">
                        <img src={experience} alt="" className='h-[50px] w-[50px]' />
                        <p className="about-num my-3">1</p>
                        <p className="about-description">Year of Experiance</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div className="py-10 px-6 flex flex-col items-center text-center rounded-xl about-box">
                        <img src={projects} alt="" className='h-[50px] w-[50px]' />
                        <p className="about-num my-3">7</p>
                        <p className="about-description">Projects Completed</p></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6 justify-between w-[80%] md:w-[70%] text-4xl">
                <div data-aos="fade-down" data-aos-duration="1000">
                    <div className="py-10 px-[56px]  flex flex-col items-center text-center rounded-xl about-box">
                        <img src={client} alt="" className='h-[50px] w-[50px]' />
                        <p className="about-num my-3">12</p>
                        <p className="about-description">Happy Clients</p></div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div className="py-10 px-[50px]  flex flex-col items-center text-center rounded-xl about-box">
                        <img src={certificate} alt="" className='h-[50px] w-[50px]' />
                        <p className="about-num my-3">2</p>
                        <p className="about-description">Certificats Earned</p></div>
                </div>
            </div>
        </div>
    );
};

export default About;