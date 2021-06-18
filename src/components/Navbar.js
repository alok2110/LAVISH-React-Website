import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import { Button } from "./Button";
import "./css/Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const closeMobileMenu = () => setClick(false);

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, []);

    return(
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <MdFingerprint className="navbar-icon" />
                        LAVISH
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                        { click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-links" onClick={closeMobileMenu}>Product</Link>
                        </li>
                        <li className="nav-btn" onClick={closeMobileMenu}>
                            {
                                button ? (
                                    <Link to="/sign-up" className="btn-link">
                                        <Button buttonStyle="btn--outline">SIGN UP</Button>
                                    </Link>
                                ) : (
                                    <Link to="/sign-up" className="btn-link">
                                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SIGN UP</Button>
                                    </Link>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;