import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import TypeWriters from '../Utilities/TypeWriting';
import banner from '../../Assets/output-onlinegiftools.gif'
import { motion, useAnimation } from 'framer-motion'
import { BsDownload } from 'react-icons/bs'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'


const Home = () => {
    const typeWriter = ["Frontend Developer", "React Developer", "Backend Developer", "MERN Stack Developer", "UI & UX Designer"];
    const { setNavOpen } = useContext(AppContext)
    useEffect(() => {
        setNavOpen(false)
    }, [])
    const animation1 = useAnimation()
    const animation2 = useAnimation()
    const { ref, inView } = useInView()
    const { ref: ref2, inView: inView2 } = useInView()
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
        <div className="flex flex-col-reverse md:flex-row items-center min-h-[calc(100vh-100px)]">
            <motion.div className="text-center w-full md:w-1/2 overflow-x-hidden">
                <motion.div ref={ref}>
                    <motion.h1 className="text-2xl font-semibold" animate={animation1} >Hi There!</motion.h1></motion.div>
                <motion.div ref={ref2}>
                    <motion.h1 className="text-5xl my-4 font-semibold" animate={animation2}>I'm <span className="text-[#FF8D29]">Mahabub Saki</span></motion.h1>
                </motion.div>
                <p className="text-2xl my-4 font-semibold">
                    I'M a <span className="text-[#FF8D29]"><TypeWriters data={typeWriter} /></span>
                </p>
                <div className="w-[90%] mx-auto opacity-70">
                    I'm a React developer with a passion for learning. I help your business and individuals by developing websites. I build websites to make you successful in the long term.
                </div>
            </motion.div>
            <motion.div className="w-full md:w-1/2">
                <div className="flex justify-center items-center">
                    {/* <iframe src="https://embed.lottiefiles.com/animation/71619" width='100%' height='400px' title='animate'></iframe> */}
                    <img src={banner} alt="" className='w-[85%]' />
                </div>
                <div className="flex flex-col items-center my-6">
                    <div>
                        <a href="https://drive.google.com/uc?export=download&id=17UbFe8oUKq43scgSbSmPtmmYHR8Oo-bQ">
                            <button className="flex gap-2 my-3 items-center btn bg-[#FF8D29] text-black hover:bg-[#143d59] 
                            hover:text-white
                            border-0"><span>Download Resume</span> <BsDownload /></button></a>
                    </div>
                    <div className="flex justify-center gap-6 text-4xl my-4">
                        <a href="https://www.facebook.com/mahabubsaki/" target="_blank" rel="noreferrer"><FaFacebook className='text-[#171515] hover:scale-150 duration-500 cursor-pointer' /></a>
                        <a href="https://github.com/mahabubsaki" target="_blank" rel="noreferrer"><FaGithub className="text-[#171515] hover:scale-150 duration-500 cursor-pointer" /></a>
                        <a href="https://www.linkedin.com/in/mahabubsaki/" target="_blank" rel="noreferrer"><FaLinkedin className='text-[#171515] hover:scale-150 duration-500 cursor-pointer' /></a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;