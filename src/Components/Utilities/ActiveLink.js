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
            className={`relative lol text-lg hover:text-[white] ${match ? 'text-[white]' : 'text-[#ee534f]'}`}
        >
            {children}
            {match ? <div className="hidden md:block absolute left-0 rounded right-0 h-[2px] bg-[white] hi">
            </div> : <div className="low hidden md:block"></div>}
        </Link>
    );
};

export default ActiveLink;