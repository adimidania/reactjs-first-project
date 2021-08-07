import React from 'react'
import { Link } from 'react-router-dom'

function NavbarProjects() {
    return (
        <div style={{backgroundColor: "transparent", height: "80px", display:"flex", alignItems: "center", paddingLeft: "20px"}}>
            <Link to="/" style={{color: "white", fontSize:"20px", textDecoration:"none"}}>
                <i className="fas fa-angle-double-left"></i> Go back to the main page
            </Link>
        </div>
    )
}

export default NavbarProjects
