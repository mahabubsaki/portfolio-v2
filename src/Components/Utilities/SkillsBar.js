import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../Pages/Skill.css'

const SkillsBar = () => {
    const animation1 = useAnimation()
    const { ref: ref1, inView: inView1 } = useInView()
    useEffect(() => {
        if (inView1) {
            animation1.start({
                x: 0,
                transition: {
                    type: 'just', duration: 1
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
        <div className="container" ref={ref1}>
            <div className="overflow-hidden">
                <motion.h1 className='mx-auto text-center
                 text-5xl pb-3 font-bold my-4' animate={animation1}>Relatable<span className="text-[#FF8D29]"> Role</span></motion.h1>
            </div>

            <div className="skill-box">

                <div className="skill-box">
                    <span className="title">React Development</span>
                    <div className="skill-bar">
                        <span className="skill-per reactjs">
                            <span className="tooltip">100%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Figma to HTML / Adobe XD to HTML</span>
                    <div className="skill-bar">
                        <span className="skill-per figma">
                            <span className="tooltip">95%</span>
                        </span>
                    </div>
                </div>
                <span className="title">Frontend Development</span>
                <div className="skill-bar">
                    <span className="skill-per frontned">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">UI & UX Design</span>
                <div className="skill-bar">
                    <span className="skill-per ui">
                        <span className="tooltip">88%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Backend Development</span>
                <div className="skill-bar">
                    <span className="skill-per backend">
                        <span className="tooltip">85%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">MERN Stack Development</span>
                <div className="skill-bar">
                    <span className="skill-per mern">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default SkillsBar;