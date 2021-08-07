import React from 'react'
import {Link} from "react-router-dom"
import "./Resources.css"
import Footer from '../Footer'
import Navbar from '../Navbar'

function Resources() {
    return (
        <div>
            <Navbar />
            <div className="Resources">
                <p className="Resources-description">There are a lot of good resources on youtube, freecodecamp, and other learning platforms, and here
                    are my favorite. Please make sure to practice along with them, don't just passively watch them.
                    For those who have LinkedIn Learning free account, you can check out <Link to={{ pathname: "https://www.linkedin.com/learning/paths/become-a-react-developer?u=60693444" }} target="_blank" className="learning-path">this learning path</Link>, It's 
                    pretty interesting, for beginners as well as for those who already grasped React js funds. 
                </p>
                <p className="title-resources">Best Resources to get you started</p>
                <ul>
                    <li>
                    <Link to={{ pathname: "https://www.youtube.com/watch?v=DLX62G4lc44" }} target="_blank" className="Link-resources">
                        React js for beginners (5 HOURS TUTO)
                    </Link>
                    </li>
                    <li>
                    <Link to={{ pathname: "https://www.youtube.com/watch?v=hQAHSlTtcmY" }} target="_blank" className="Link-resources">
                        React js basics In 30 mins
                    </Link>
                    </li>
                    <li>
                    <Link to={{ pathname: "https://www.youtube.com/watch?v=0riHps91AzE" }} target="_blank" className="Link-resources">
                        Learn React with a project
                    </Link>
                    </li>
                    <li>
                    <Link to={{ pathname: "https://fr.reactjs.org/" }} target="_blank" className="Link-resources">
                        React documentation
                    </Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Resources
