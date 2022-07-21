import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
const ActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            to={to}
            {...props}
            className={`relative lol text-lg hover:text-[#143d59] ${match ? 'text-[#143d59]' : 'text-[#FF8D29]'}`}
        >
            {children}
            {match ? <div className="hidden md:block absolute left-0 rounded right-0 h-[2px] bg-[black] hi">

            </div> : <div className="low hidden md:block"></div>}
        </Link>
    );
};

export default ActiveLink;