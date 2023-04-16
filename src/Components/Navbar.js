import React from "react";
import navStyle from './navbar.module.css';
import { NavLink } from "react-router-dom";

function Navbar() {

    const navLinkStyles=({isActive})=> {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration:isActive? 'none':'none',
          color:'blue'
         
        }
    
      }
    return (
        <>
            <nav>
                <div className={navStyle.navbar}>
                    <div className={navStyle.logo}>
                        <h2>Routing</h2>
                    </div>
                    <div className={navStyle.navigate}>
                        <p><NavLink to='/home' style={navLinkStyles} >Home</NavLink></p>
                        <p><NavLink to='/contacts' style={navLinkStyles}>Contacts</NavLink></p>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;