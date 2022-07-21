import React, { useContext, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import html from '../../Assets/html-5.png'
import css from '../../Assets/css-3.png'
import js from '../../Assets/js.png'
import react from '../../Assets/react (2).png'
import mui from '../../Assets/mui.png'
import ant from '../../Assets/ant.svg'
import chakra from '../../Assets/chakra-ui.png'
import firebase from '../../Assets/firebase-removebg-preview.png'
import mongo from '../../Assets/mongodb.svg'
import node from '../../Assets/node-js.png'
import express from '../../Assets/express.png'
import tailwind from '../../Assets/tailwind.png'
import bootstrap from '../../Assets/bootstrap.png'
import next from '../../Assets/next.png'
import ts from '../../Assets/ts.png'
import redux from '../../Assets/redux_original_logo_icon_146365.png'
import github from '../../Assets/github.png'
import heroku from '../../Assets/heroku_icon.png'
import figmaps from '../../Assets/x.webp'
import xd from '../../Assets/Adobe_XD-Logo.wine.png'
import postman from '../../Assets/postman.svg'
import netlify from '../../Assets/netlify.png'
import vercel from '../../Assets/vercel.png'
import npm from '../../Assets/nodepack.png'
import sass from '../../Assets/sass.png'
import jwt from '../../Assets/jwt.png'
import { AppContext } from '../../App';
import SkillsBar from '../Utilities/SkillsBar';
import Aos from 'aos';
Aos.init()
const Skills = () => {
    const { setNavOpen } = useContext(AppContext)
    useEffect(() => {
        setNavOpen(false)
        setVisualizeSkills(x.sort((a, b) => 0.5 - Math.random()))
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
                x: '-100vw'
            })
        }
    }, [inView1, animation1])
    const [category, setCategory] = useState('all')
    const x = [{ name: 'HTML5', img: html, category: 'expert' }, { name: 'CSS3', img: css, category: 'expert' }, { name: 'Bootstrap5', img: bootstrap, category: 'expert' }, { name: 'TailwindCSS', img: tailwind, category: 'expert' }, { name: 'JavaScript', img: js, category: 'expert' }, { name: 'React JS', img: react, category: 'expert' }, { name: 'Node JS', img: node, category: 'comfort' }, { name: 'Express JS', img: express, category: 'expert' }, { name: 'MongoDB', img: mongo, category: 'comfort' }, { name: 'Material UI', img: mui, category: 'comfort' }, { name: 'TypeScript', img: ts, category: 'expert' }, { name: 'Redux Toolkit', img: redux, category: 'expert' }, { name: 'Next JS', img: next, category: 'comfort' }, { name: 'Firebase', img: firebase, category: 'comfort' }, { name: 'Ant Design', img: ant, category: 'comfort' }, { name: 'Chakra UI', img: chakra, category: 'comfort' }, { name: 'GitHub', img: github, category: 'tools' }, { name: 'Heroku', img: heroku, category: 'tools' }, { name: 'Netlify', img: netlify, category: 'tools' }, { name: 'Vercel', img: vercel, category: 'tools' }, { name: 'Postman', img: postman, category: 'tools' }, { name: 'Figma to HTML', img: figmaps, category: 'tools' }, { name: 'XD to HTML', img: xd, category: 'tools' }, { name: 'NPM', img: npm, category: 'tools' }, { name: 'SASS / SCSS', img: sass, category: 'expert' }, { name: 'JWT', img: jwt, category: 'expert' }]
    const [visualizeSkills, setVisualizeSkills] = useState([])
    return (
        <>
            <SkillsBar />
            <div className="min-h-[calc(100vh-100px)] w-[60%] sm:w-[85%] mx-auto mt-14" ref={ref1}>
                <div>
                    <motion.h1 className='mx-auto text-center
                 text-5xl pb-3 font-bold my-4' animate={animation1}>My<span className="text-[#FF8D29]"> Skills</span></motion.h1>
                </div>
                <div className="flex flex-wrap justify-items-center justify-center gap-3 my-6">
                    <button className={`btn ${category === 'all' ? 'bg-[#FF8D29] hover:bg-[#ebb789] border-0 text-white' : 'bg-[white] hover:bg-[#143d59] text-black '} 
                            hover:text-white `} onClick={() => {
                            if (category !== 'all') {
                                setCategory('all')
                                setVisualizeSkills(x.sort((a, b) => 0.5 - Math.random()))
                            }
                        }}>All</button>
                    <button className={`btn ${category === 'expert' ? 'bg-[#FF8D29] hover:bg-[#ebb789] border-0' : 'bg-[white] hover:bg-[#143d59]'} text-black  
                            hover:text-white `} onClick={() => {
                            if (category !== 'expert') {
                                setCategory('expert')
                                setVisualizeSkills(x.filter(x => x.category === 'expert').sort((a, b) => 0.5 - Math.random()))
                            }
                        }}>Expert</button>
                    <button className={`btn ${category === 'comfortable' ? 'bg-[#FF8D29] hover:bg-[#ebb789] border-0' : 'bg-[white] hover:bg-[#143d59]'} text-black 
                            hover:text-white`} onClick={() => {
                            if (category !== 'comfortable') {
                                setCategory('comfortable')
                                setVisualizeSkills(x.filter(x => x.category === 'comfort').sort((a, b) => 0.5 - Math.random()))
                            }
                        }}>Comfortable</button>
                    <button className={`btn ${category === 'tools' ? 'bg-[#FF8D29] hover:bg-[#ebb789] border-0' : 'bg-[white] hover:bg-[#143d59]'} text-black hover:bg-[#143d59] 
                            hover:text-white`} onClick={() => {
                            if (category !== 'tools') {
                                setCategory('tools')
                                setVisualizeSkills(x.filter(x => x.category === 'tools').sort((a, b) => 0.5 - Math.random()))
                            }
                        }}>Tools</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 duration-500">
                    {visualizeSkills.map(skill => <div data-aos="fade-right">
                        <div className="bg-[#f0ebe3] hover:scale-125 duration-300 hover:text-white cursor-pointer hover:bg-[#FF8D29] flex flex-col items-center py-7 rounded-xl">
                            <motion.img whileHover={{
                                rotateY: 360, transition: {
                                    duration: 0.2
                                }
                            }} src={skill.img} alt="" width="100px" height="100px" />
                            <p className="text-2xl font-bold my-4">{skill.name}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    );
};

export default Skills; 