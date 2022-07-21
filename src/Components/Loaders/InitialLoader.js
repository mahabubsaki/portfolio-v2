import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import './InitialLoad.css'

const InitialLoader = () => {
    const { closeLoader, setCloseLoader } = useContext(AppContext)
    useEffect(() => {
        setTimeout(() => {
            setCloseLoader(true)
        }, 5200)
    }, [])
    return (
        <div className="h-screen flex overflow-y-hidden relative">
            <div className={`w-1/4 bg-[#dbad8d] h-full duration-[2s] translate-y-0 ${closeLoader && 'translate-y-[100%]'}`}></div>
            <div className={`w-2/4 bg-[#dbad8d] h-full duration-[2s] translate-y-0 ${closeLoader && '-translate-y-[100%]'}`}></div>
            <div className={`w-1/4 bg-[#dbad8d] h-full duration-[2s] translate-y-0 ${closeLoader && 'translate-y-[100%]'}`}></div>
            {!closeLoader && <div className="absolute h-full w-full flex justify-center flex-col items-center">
                <p className='md:text-[text-225px] sm:text-[150px] text-[75px]'><span className="letter-s">S</span><span className="letter-a">A</span><span className="letter-k">K</span><span className="letter-i">I</span></p>
                <div className="mt-2 w-1/2 mx-auto border-2 border-black bg-transparent relative h-[60px]">
                    <div className="loading-bar bg-[crimson] h-full">
                    </div>
                    <p className="font-bold text-2xl absolute top-0 border h-full w-full flex items-center justify-center loading-text">Loading</p>
                </div>
            </div>}
        </div>
    );
};

export default InitialLoader;