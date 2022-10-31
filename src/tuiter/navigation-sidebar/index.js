import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import navbarsArray from "./navbars.json";
import NavbarItem from "./navbar-item";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
            <ul className="list-group">
                {
                    navbarsArray.map(navbar =>
                        <NavbarItem key={navbar._id} navbar={navbar} isActive= {navbar.name.toLowerCase() === active || (navbar.name === "Home" && !active)}/>)
                }
            </ul>
            <div className="d-grid mt-2">
                <Link to="#"
                   className="btn btn-primary btn-block rounded-pill fw-bold">
                    Tweet</Link>
            </div>
        </>
    );
};
export default NavigationSidebar;