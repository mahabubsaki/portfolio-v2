import { useAnimation, motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css'
import { BsFillEyeFill, BsCodeSlash } from 'react-icons/bs'
import { BiCodeCurly } from 'react-icons/bi'
import project1 from '../../Assets/project1.png'
import project2 from '../../Assets/project2.png'
import project3 from '../../Assets/project3.png'
import project4 from '../../Assets/project4.png'
import project5 from '../../Assets/Capture.PNG'
import { AppContext } from '../../App';

const Portfolio = () => {
    const { setNavOpen } = useContext(AppContext)
    useEffect(() => {
        setNavOpen(false)
    }, [])
    const projects = [
        {
            name: 'Air CNC', type: 'Hotel Rental', feature: ['Users can filter the hotels by their search preference also add new hotel', 'Searched hotels can be also showed by map which  can easily help user to know the exact location of the hotels', '•While booking user have to pay the cost immediately which will save on their own profile'], client: 'https://github.com/mahabubsaki/Air-cnc-clone', live: 'https://air-cnc-mahabubsaki.web.app/', server: 'https://github.com/mahabubsaki/Air-cnc-backend',
            technologies: ['ReactJS', 'Bootstrap', 'JavaScript', 'MongoDB', 'Redux-Toolkit', 'TypeScript', 'ExpressJS', 'SCSS', 'Firebase', 'React-Leaflet'], img: project5
        },
        {
            name: 'Chicony Electronics', type: 'Manufecture', feature: ['Users can order any product with their desired quantity, User input quantity will be under control', 'Admin can change any user role to admin, cancel any unpaid order, ship any paid order, sort order by category, search order by user, add the product to the site, remove the product from the site', 'Users can also cancel any unpaid order and pay through stripe and if payment is successful they will get a payment id.'], client: "https://github.com/mahabubsaki/chicony-electronics-project", live: "https://chicony-electronics.web.app", server: 'https://github.com/mahabubsaki/chicony-electronics-backend', technologies: ['ReactJS', 'TailwindCSS', 'JavaScript', 'MongoDB', 'Redux-Toolkit', 'TypeScript', 'ExpressJS', 'SCSS', 'Firebase'], img: project2
        },
        {
            name: 'Sportofista', type: 'Warehouse', feature: ['Users can add, update or remove anyone’s item and if he/she is logged in', 'Site secured with JWT, without token user will be automatically logged out', 'Users can increase quantity with the desired number and decrease by 1.'], client: "https://github.com/mahabubsaki/sportofista-project", live: "https://sportofista-47ddf.web.app/", server: 'https://github.com/mahabubsaki/sportofista-backend', technologies: ['ReactJS', 'Bootstrap', 'JavaScript', 'MongoDB', 'ExpressJS', 'Firebase'], img: project3
        },
        { name: 'Red Onion', type: 'Restaurant', feature: ['Users can add preferred food to the cart which will be saved unless the user clear', 'Only email verified users can order by giving some information', 'User can see their order history and cancel orders'], technologies: ['ReactJS', 'Bootstrap', 'JavaScript', 'ExpressJS', 'MongoDB'], live: 'https://red-onion-c3cf9.web.app/', server: 'https://github.com/mahabubsaki/red-onion-backend', client: 'https://github.com/mahabubsaki/red-onion-project', img: project1 },
        {
            name: 'Medispace', type: 'Healthcare', feature: ['User can order a service and there are 6 different healthcare', 'Users Have login or sign up with their email or they can continue with github or google', 'If a user want to order a service than it will open a dynamic route with form where user email already be visible'], client: "https://github.com/mahabubsaki/asgmt-10", live: "https://medispace-416d4.web.app/", technologies: ['ReactJS', 'Bootstrap', 'JavaScript', 'Netlify'], img: project4
        }
    ]
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
    return (
        <div className="w-[95%] mx-auto min-h-screen">
            <div ref={ref1}>
                <motion.h1 className='mx-auto text-center
                 text-5xl pb-3 font-bold my-4 text-white' animate={animation1}>My<span className="text-[#E84A5F]"> Portfolio</span>
                </motion.h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-8 overflow-hidden">
                    {
                        projects.map(project => <div data-aos="fade-left" className="wrapper">
                            <div className="inner-wrapper">
                                <div className="wrapper-front shadow">
                                    <img src={project.img} alt="" className='w-full rounded-[25px] h-full' />
                                </div>
                                <div className="wrapper-back shadow bg-[white] flex flex-col p-5">
                                    <h1 className="text-center font-bold text-2xl">{project.name}</h1>
                                    <p className="text-center font-semibold text-xl">Type : {project.type}</p>
                                    <p className="font-semibold text-xl my-2">Features:</p>
                                    <ul>
                                        {project.feature.map(f => <li className="list-feature my-2">
                                            {f}
                                        </li>)}
                                    </ul>
                                    <div className="flex flex-wrap justify-center gap-3  my-2">
                                        <button className='live-site flex items-center'><BsFillEyeFill className='mr-2' /><a rel="noreferrer" target="_blank" href={project.live}>Live Site</a></button>
                                        <button className='client-site flex items-center'><BsCodeSlash className='mr-2' /><a rel="noreferrer" target="_blank" href={project.client}>Client Side Code</a></button>
                                        {project.server && <button className='server-side flex items-center'><BiCodeCurly className='mr-2' /><a rel="noreferrer" target="_blank" href={project.server}>Server Side Code</a></button>}
                                    </div>
                                    <p className="font-semibold text-xl my-2">Technologies Used:</p>
                                    <ul>
                                        {project.technologies.map(f => <li className="list-feature my-2">
                                            {f}
                                        </li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Portfolio;