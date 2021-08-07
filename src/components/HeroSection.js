import React from 'react'
import { Button } from './Button';
import "../App.css"
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1 className="title-hero" >My journey as a beginner with React.js</h1>
            <div className="container-logo">
                <span className="react-logo">
                    <span className="nucleo"></span>
                </span>
            </div>
            <div className="hero-btns">
                <Button buttonStyle="btn--outline" buttonLarge="btn--large" link="/story"><i className='fas fa-pen-nib' />  Story</Button>
                <Button buttonStyle="btn--primary" buttonLarge="btn--large" link="/resources"><i className='far fa-copy' />  Resources</Button>
            </div>
        </div>
    )
}

export default HeroSection
