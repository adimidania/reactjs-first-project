import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

/*
    Notes : 
    1. handleClick is receiving an arrow function, so It's a function also!
    2. At the very beginning, we started building things with the mobile first approach.
    3. Still don't know the utility of  closeMobileMenu, when we click on a link, we close the menu ?
    aren't we supposed to move to another page ? so why would we care about the menu
*/

function Navbar() {

    const [click, setClick] = useState(false);

    {/*const [button, setButton] = useState(true);*/}

    const handleClick = () => {
        setClick(!click)
    }
    // closeMobileMenu : each time we click on a link or the logo, the menu will close.
    const closeMobileMenu = () => {
        setClick(false)
    }
    /* showButton : the button will disappear in small screens, and show up in larger screens.
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true) 
        }
    } */
    // We need to "associate" my showButton with an event! resizing the screen.  
    // window.addEventListener('resize', showButton);
    /* Now that's brilliant! we linked the showButton function to the resizing event, in order for it to work on
    small screens (without any resize) we should use useEffect, each time we refresh the page, we check if the
    size is suitable for the button to show up or nah 
    useEffect(
        () => {showButton()}, []
    ) */

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  <p>Dannie</p>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={
                        click ? "fas fa-times " : "fas fa-bars " 
                    }>
                    </i>
                </div>
                <ul className= {click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links"  onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-links"  onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/More" className="nav-links"  onClick={closeMobileMenu}>
                            More
                        </Link>
                    </li>
                </ul>

                {/*button && <Button buttonStyle="btn--outline">Contact me</Button>*/}
            </div>
        </nav>
    )
}

export default Navbar
