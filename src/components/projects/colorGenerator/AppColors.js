import React, { useState } from 'react'
import SingleColor from './SingleColor'
/* this needs to be installed in order to generate the shades and the tints */
import Values from 'values.js'
import "./AppColors.css"
import "../NavbarProjects"
import NavbarProjects from '../NavbarProjects'

function AppColors() {
    /* The picked color */
    const [color, setColor] = useState('')
    /* In case the user enters an invalid text - not a color */
    const [error, setError] = useState(false)
    /* The list of colors that will be displayed, .all(30) means that we will be 
    generating 100/30 shades and 100/30 tint */
    const [list, setList] = useState(new Values('#e76f51').all(30))

    /* For the submit button, to see if we have an error */
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(30)
            setList(colors)
        } catch (error) {
            /* We will do something about the error later on */
            setError(true)
            console.log(error)
        }
    }

    return (
        <div className="AppColors">
        <NavbarProjects />
        <section className='container-colors'>
            <h3>Your Favorite Color Generator</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder='#e76f51'
                    className={`${error ? 'error-color' : null}`}
                />
                <button className='btn-submit-color' type='submit'>
                    GENERATE
                </button>
            </form>
        </section>
        <div className='colors-container'>
            <section className='colors'>
                {/** Keep in mind that list is an array of objects "Values" */}
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            {...color /** We are simply taking all the color's properties */}
                            index={index /** We need the index for the styling */}
                            hexColor={color.hex}
                        />
                    )
                })}
            </section>
        </div>
        </div>
    )
}

export default AppColors