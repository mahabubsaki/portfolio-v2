import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { MdOutlineDoneOutline } from 'react-icons/md'

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
            <div className={`w-1/4 bg-[#dbad8d] h-full duration-[0.5s] -translate-y-[100%] ${openLoader && 'translate-y-[0%]'}`}></div>
            <div className={`w-2/4 bg-[#dbad8d] h-full duration-[0.5s] translate-y-[100%] ${openLoader && 'translate-y-[0%]'}`}></div>
            <div className={`w-1/4 bg-[#dbad8d] h-full duration-[0.5s] -translate-y-[100%] ${openLoader && 'translate-y-[0%]'}`}></div>
            {openLoader && <div className="absolute h-full w-full flex justify-center items-center">
                <div>
                    <p className="text-3xl text-center my-3">Hold! Going to <span className='text-[#FF8D29] font-bold'>{route.toUpperCase()}</span> Page</p>
                    <div className="flex justify-center">
                        <PropagateLoader loading={true} size={35} color={'#143d59'} />
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default PageChange;