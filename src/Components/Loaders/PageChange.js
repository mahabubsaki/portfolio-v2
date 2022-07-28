import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';

const PageChange = ({ route }) => {
    const [openLoader, setOpenLoader] = useState(false)
    const [closeLoader, setCloseLoader] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setOpenLoader(true)
        }, 0)
        setTimeout(() => {
            setOpenLoader(false)
            setCloseLoader(true)
        }, 1500)
    }, [])

    return (
        <div className="h-screen flex overflow-y-hidden relative">
            <div className={`w-1/4 bg-[#242425] h-full duration-[0.5s] -translate-y-[100%] ${openLoader && 'translate-y-[0%]'}`}></div>
            <div className={`w-2/4 bg-[#242425] h-full duration-[0.5s] translate-y-[100%] ${openLoader && 'translate-y-[0%]'}`}></div>
            <div className={`w-1/4 bg-[#242425] h-full duration-[0.5s] -translate-y-[100%] ${openLoader && 'translate-y-[0%]'}`}></div>
            {openLoader && <div className="absolute h-full w-full flex justify-center items-center">
                <div>
                    <p className="text-3xl text-center my-3 text-white">Hold! Going to <span className='text-[#ee534f] font-bold'>{route.toUpperCase()}</span> Page</p>
                    <div className="flex justify-center">
                        <PuffLoader loading={true} size={60} color={'#ffffff'} />
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default PageChange;