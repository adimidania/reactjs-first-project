import React from 'react'
import "../../App.css"
import "./Home.css"
import Footer from '../Footer'
import Navbar from '../Navbar'
import {Link} from "react-router-dom"

function More() {
    return (
        <div>
            <Navbar />
            <div className="More">
                <p>
                    Well the navbar looked ugly with only two links (Home, About), So I just added this to make 
                    It less ugly! <br></br>
                    Wait! Listen to this song PLEASE :
                </p>
                    <Link to={{ pathname: "https://www.youtube.com/watch?v=A_y_6a5DG4I" }} target="_blank" className="Random-song">
                        JUST LIKE YOU - NF
                    </Link>
            </div>
            <Footer />
        </div>
    )
}

export default More

