import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/certificate.png'
import ActiveLink from '../Utilities/ActiveLink';
import { ImMenu } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'
import { AppContext } from '../../App';
const Navbar = () => {
    const navigate = useNavigate()
    const { navOpen, setNavOpen, handleChangeRoute } = useContext(AppContext)
    return (
        <div className="flex justify-between bg-[white] items-center sticky left-0 right-0 top-0 z-10">
            <div className="w-[250px] cursor-pointer h-[100px] flex justify-center items-center">
                <p className="nav-title">&#60;/MahabubSaki&#62;</p>
            </div>
            <div className="hidden w-full mx-4 bg-[#181818] py-6 px-3 rounded-xl md:flex justify-between">
                <ActiveLink to='/' onClick={() => handleChangeRoute('home')}>Home</ActiveLink>
                <ActiveLink to='/about' onClick={() => handleChangeRoute('about')}>About</ActiveLink>
                <ActiveLink to='/skills' onClick={() => handleChangeRoute('skills')}>Skills</ActiveLink>
                <ActiveLink to='/services' onClick={() => handleChangeRoute('services')}>Services</ActiveLink>
                <ActiveLink to='/portfolio' onClick={() => handleChangeRoute('portfolio')}>Portfolio</ActiveLink>
                <ActiveLink to='/blogs' onClick={() => handleChangeRoute('blogs')}>Blogs</ActiveLink>
                <ActiveLink to='/contact' onClick={() => handleChangeRoute('contact')}>Contact</ActiveLink>
            </div>
            <div className='md:hidden pr-10'>
                <ImMenu className='text-2xl cursor-pointer' onClick={() => setNavOpen(true)} />
            </div>
            <div className={`absolute flex md:hidden justify-between flex-col left-0 right-0  h-screen py-2 bg-[#181818] text-center duration-500 z-10 ${navOpen ? 'top-[0%]' : '-top-[915%]'}`}>
                <div className="flex justify-between mt-8 mx-6 text-2xl">
                    <p className="nav-title text-white md:text-black">&#60;/MahabubSaki&#62;</p>
                    <AiOutlineClose className="cursor-pointer text-white" onClick={() => setNavOpen(false)}></AiOutlineClose>
                </div>
                <ActiveLink to='/' onClick={() => handleChangeRoute('home')}>Home</ActiveLink>
                <ActiveLink to='/about' onClick={() => handleChangeRoute('about')}>About</ActiveLink>
                <ActiveLink to='/skills' onClick={() => handleChangeRoute('skills')}>Skills</ActiveLink>
                <ActiveLink to='/services' onClick={() => handleChangeRoute('services')}>Services</ActiveLink>
                <ActiveLink to='/portfolio' onClick={() => handleChangeRoute('portfolio')}>Portfolio</ActiveLink>
                <ActiveLink to='/blogs' onClick={() => handleChangeRoute('blogs')}>Blogs</ActiveLink>
                <ActiveLink to='/contact' onClick={() => handleChangeRoute('contact')}>Contact</ActiveLink>
            </div>
        </div>
    );
};

export default Navbar;