import { useAnimation, motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ImMail4 } from 'react-icons/im'
import { IoIosSend } from 'react-icons/io'
import Typewriter from 'typewriter-effect';
import { MdPermPhoneMsg, MdLocationPin } from 'react-icons/md'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';
import { AppContext } from '../../App';

const Contact = () => {
    const { setNavOpen } = useContext(AppContext)
    useEffect(() => {
        setNavOpen(false)
    }, [])
    const animation1 = useAnimation()
    const animation3 = useAnimation()
    const { ref: ref1, inView: inView1 } = useInView()
    const { ref: ref2, inView: inView2 } = useInView()
    useEffect(() => {
        if (inView2) {
            animation3.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    type: 'just', duration: 0.5
                }
            })
        }
        else {
            animation3.start({
                x: "100vw",
                y: "-100vh",
                opacity: 0
            })
        }
    }, [inView2, animation3])
    const handleSentMessage = (e) => {
        e.preventDefault()
        // emailjs.send("service_f1p8n6m", "template_wovmo1y", {
        //     from_email: e.target.email,
        //     from_name: e.target.name,
        //     message: e.target.message,
        //     from_subject: e.target.subject
        // }, '0e-iUUW39bMi5NalV').then(res => console.log(res)).catch(err => console.log(err))
        emailjs.sendForm('service_f1p8n6m', 'template_wovmo1y', e.target, '0e-iUUW39bMi5NalV')
            .then((result) => {
                toast.success('Your message was successfully sent')
            }, (error) => {
                console.log('Something went wrong, Please try again');
            });
        e.target.reset()
    }
    useEffect(() => {
        if (inView1) {
            animation1.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    type: 'just', duration: 0.5
                }
            })
        }
        else {
            animation1.start({
                x: "-100vw",
                y: "-100vh",
                opacity: 0
            })
        }
    }, [inView1, animation1])
    const animation2 = useAnimation()
    useEffect(() => {
        if (inView1) {
            animation2.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    type: 'just', duration: 0.5
                }
            })
        }
        else {
            animation2.start({
                x: "100vw",
                y: "100vh",
                opacity: 0
            })
        }
    }, [inView1, animation2])
    return (
        <div className="w-[95%] mx-auto min-h-screen overflow-hidden">
            <div ref={ref1}>
                <motion.h1 className='mx-auto text-center
                 text-5xl pb-3 font-bold my-7 text-white' animate={animation1}>Contact <span className="text-[#E84A5F]">Me</span>
                </motion.h1>
                <motion.p animate={animation2} className="text-center my-4 text-[#a9a9a9]">You can contact me through below contact info or directly message me with the form. Contact number also includes in Telegram and Whatsapp</motion.p>
                <motion.h1 className='mx-auto text-center
                 text-4xl pb-3 font-bold my-4 text-white' animate={animation2}><span className="text-[#E84A5F]">Contact</span> Info
                </motion.h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <tbody>
                            <tr>
                                <td className="flex items-center gap-8 justify-center p-5"><ImMail4 className='text-3xl' /> Mail</td>
                                <td className='text-center p-5'><Typewriter
                                    options={{ cursorClassName: 'description', delay: 1 }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('mcr21191999@gmail.com ').callFunction(() => {
                                        })
                                            .pauseFor(25000000)
                                            .callFunction(() => {

                                            })
                                            .start();
                                    }}
                                /></td>

                            </tr>
                            <tr>
                                <td className="flex items-center gap-8 justify-center p-5"><MdPermPhoneMsg className='text-3xl' /> Phone</td>
                                <td className='text-center p-5'><Typewriter
                                    options={{ cursorClassName: 'description', delay: 1 }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('+8801714269744 ').callFunction(() => {
                                        })
                                            .pauseFor(25000000)
                                            .callFunction(() => {

                                            })
                                            .start();
                                    }}
                                /></td>

                            </tr>
                            <tr>
                                <td className="flex items-center gap-8 justify-center p-5"><MdLocationPin className='text-3xl' /> Location</td>
                                <td className='text-center p-5'><Typewriter
                                    options={{ cursorClassName: 'description', delay: 1 }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Tongi,Gazipur,Bangladesh ').callFunction(() => {
                                        })
                                            .pauseFor(25000000)
                                            .callFunction(() => {

                                            })
                                            .start();
                                    }}
                                /></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-8 mb-6 w-[80%] sm:w-[60%] mx-auto">
                <motion.h1 className='mx-auto text-center
                 text-4xl pb-3 font-bold my-4 text-white' animate={animation3}><span className="text-[#E84A5F]">Contact</span> Form
                </motion.h1>
                <form onSubmit={handleSentMessage} className="flex flex-col gap-5" ref={ref2}>
                    <input type="text" name="name" className='p-5 bg-[#222222] nofocus text-white rounded-lg shadow-md' placeholder='Name' required />
                    <input type="email" name="email" className='p-5 bg-[#222222] nofocus text-white outline-0 focus: rounded-lg shadow-md' placeholder='E-mail' required />
                    <input type="text" name="subject" className='p-5 bg-[#222222] nofocus text-white outline-0 focus: rounded-lg shadow-md' placeholder='Subject' required />
                    <textarea name="message" style={{ resize: 'none' }} rows="10" className='p-5 bg-[#222222] nofocus text-white outline-0 focus: rounded-lg shadow-md' placeholder='Your Message'></textarea>
                    <button type='submit' className="w-[200px] flex gap-2 my-3 rounded-[30px] items-center btn bg-[#ee534f] hover:bg-[white] hover:text-black text-white
                            border-0 text-lg"><IoIosSend /> <span>Send</span></button>
                </form>
            </div>
        </div>
    );
};

export default Contact;