import React from 'react'
import "./Button.css"
import {Link} from "react-router-dom"

/*
    Notes : 
    1. First thing first, we want to create a button component that we can re-use all over the page
    2. So the button component will receive the necessary infos as props
*/

const STYLES = ["btn--primary","btn--outline"];
const SIZES = ["btn--medium","btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return(
        <Link to={link} className="btn-mobile">
            <button
                type={type}
                onClick={onClick}
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            >
                {children}
            </button>
        </Link>
    )
}
