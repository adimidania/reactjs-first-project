import React from 'react'
import "../../App.css"
import HeroSection from "../HeroSection.js"
import Cards from "../Cards.js"
import "./Home.css"
import Footer from '../Footer'
import Navbar from '../Navbar'

function Home() {
    return (
        <div>
            <Navbar />
            <div className="Home">
                <HeroSection/> 
                <Cards />
            </div>
            <Footer />
        </div>
    )
}

export default Home

