import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, index, hexColor }) => {
    /** Alert will be used for the clipboard option */
    const [alert, setAlert] = useState(false)
    /** We take the rgb array, and we join the items with ",", we need it for the background*/
    const bcg = rgb.join(',')
    const hexValue = `#${hexColor}`

    useEffect(() => {
        const timeout = setTimeout(() => {
        setAlert(false)
        }, 1000)
        return () => clearTimeout(timeout)
    }, [alert])

    return (
        <article
            className={`color ${index > 2 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                setAlert(true)
                /* To copy something to the clipboard */
                navigator.clipboard.writeText(hexValue)
            }}
        >
        {alert ? <p className= {`alert ${index > 2 && 'alert-light'}`}>Copied!</p> : <p className='color-value'>{hexValue}</p>}
        </article>
    )
}

export default SingleColor