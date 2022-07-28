import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';

const Blogs = () => {
    const { setNavOpen } = useContext(AppContext)
    useEffect(() => {
        setNavOpen(false)
    }, [])
    return (
        <div className="h-[calc(100vh-100px)] flex justify-center items-center">
            <h1 className="text-4xl font-bold text-center text-white">Blogs Coming Soon on HashNode!!</h1>
        </div>
    );
};

export default Blogs;
