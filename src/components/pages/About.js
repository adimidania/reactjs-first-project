import React from 'react'
import "../../App.css"
import "./Home.css"
import Footer from '../Footer'
import Navbar from '../Navbar'

function About() {
    return (
        <div>
            <Navbar />
            <div className="About">
                <h1 className="line-1 anim-typewriter">Hello Everyone!</h1>
                <div className="About-info">
                    <p><span>FIRST NAME :</span> ADIMI</p>
                    <p><span>SECOND NAME :</span> DANIA ALAA</p>
                    <p><span>BIRTHDAY :</span> 06/07/2001</p>
                    <p><span>MAJOR :</span> COMPUTER SCIENCE</p>
                    <p><span>INTERSTS :</span> WEB DEVELOPMENT</p>
                    <p><span>STATE :</span>ALGIERS</p>
                    <p><span>PHONE NUMBER :</span>0697716446</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About

