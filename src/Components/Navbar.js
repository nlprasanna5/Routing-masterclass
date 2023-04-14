import React from "react";
import navStyle from './navbar.module.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <div className={navStyle.navbar}>
                    <div className={navStyle.logo}>
                        <h2>Routing</h2>
                    </div>
                    <div className={navStyle.navigate}>
                        <NavLink to='/home'><p>Home</p></NavLink>
                        <NavLink to='/contacts'><p>Contacts</p></NavLink>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;