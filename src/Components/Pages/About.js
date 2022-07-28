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
    const animation9 = useAnimation()
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
            animation9.start({
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
            animation9.start({
                x: 0,
                y: -100,
                opacity: 0,
            })
        }
    }, [inView3, animation3, animation4, animation5, animation6, animation7, animation8, animation9])
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
                 text-5xl pb-3 font-bold text-white' animate={animation1}><span className="text-[#E84A5F]">About</span> Me</motion.h1>
                <div className="mt-5 text-xl flex flex-col gap-3" ref={ref3}>
                    <motion.p animate={animation3} className="text-white"><span className="font-bold text-[#E84A5F]">Name</span> : Mahabub Saki</motion.p>
                    <motion.p animate={animation4} className="text-white"><span className="font-bold text-[#E84A5F]">Age</span> : 20</motion.p>


                    <motion.p animate={animation5} className="text-white"><span className="font-bold text-[#E84A5F]">Education</span> : HSC (Science)</motion.p>
                    <motion.p animate={animation6} className="text-white"><span className="font-bold text-[#E84A5F]">Role</span> : React Developer</motion.p>
                    <motion.p animate={animation7} className="text-white"><span className="font-bold text-[#E84A5F]">Language</span> : Bangla, Hindi, English</motion.p>
                    <motion.p animate={animation8} className="text-white"><span className="font-bold text-[#E84A5F]">Interest</span> : Football, Gaming, Music</motion.p>
                    <motion.p animate={animation9} className="text-white"><span className="font-bold text-[#E84A5F]">Freelence</span> : Available</motion.p>
                </div>
            </motion.div>
            <motion.div className="mx-6 my-8" ref={ref2}>
                <motion.h1 className='text-center text-4xl font-bold mb-4 pb-3 text-white' animate={animation2}>Introduction</motion.h1>
                <div className="text-[#a9a9a9]">
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
                </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6 justify-between w-4/5 md:w-[70%] text-4xl">
                <div data-aos="fade-down" data-aos-duration="1000">
                    <div className="py-10 px-6 flex flex-col items-center text-center rounded-xl about-box h-auto shadow-xl">
                        <img src={experience} alt="" className='h-[50px] w-[50px]' />
                        <p className="about-num my-3">1</p>
                        <p className="about-description">Year of Experiance</p>
                    </div>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="1000">
                    <div className="py-10 px-6 flex flex-col items-center text-center rounded-xl about-box shadow-xl">
                        <img src={projects} alt="" className='h-[50px] w-[50px]' />
                        <p className="about-num my-3">7</p>
                        <p className="about-description">Projects Completed</p></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6 justify-between w-[80%] md:w-[70%] text-4xl mb-6">
                <div data-aos="fade-up-right" data-aos-duration="1000">
                    <div className="py-10 px-[56px]  flex flex-col items-center text-center rounded-xl about-box shadow-xl">
                        <img src={client} alt="" className='h-[50px] w-[50px]' />
                        <p className="about-num my-3">12</p>
                        <p className="about-description">Happy Clients</p></div>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1000">
                    <div className="py-10 px-[50px]  flex flex-col items-center text-center rounded-xl about-box shadow-xl">
                        <img src={certificate} alt="" className='h-[50px] w-[50px]' />
                        <p className="about-num my-3">2</p>
                        <p className="about-description">Certificats Earned</p></div>
                </div>
            </div>
        </div>
    );
};

export default About;