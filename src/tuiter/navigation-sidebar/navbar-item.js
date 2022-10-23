import React from "react";
import {Link} from "react-router-dom";

const NavbarItem = (
    {navbar = {
        "name": "Home",
        "icon": "bi bi-house",
        "link": "home"
    },
    isActive = false}
) => {
    return (
        <Link to={navbar.link}
           className={`list-group-item list-group-item-action fw-bold ${isActive ? 'active' : ''}`}>
            <i className={navbar.icon}></i>
            <span className="d-xl-inline-block d-none ms-2">{navbar.name}</span>
        </Link>
    )
}
export default NavbarItem;