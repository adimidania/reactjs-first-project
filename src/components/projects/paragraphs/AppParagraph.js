import React, { useState } from 'react';
import data from './Data';
import "./AppParagraph.css"
import NavBarProjects from "../NavbarProjects"


function AppParagraph() {
    /* The number of paragraphs to generate */
    const [count, setCount] = useState(0);
     /* The text to display on the screen */
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if (count <= 0) {
        amount = 1;
        }
        if (count > 9) {
        amount = 9;
        }
        setText(data.slice(0, amount));
    };

    return (
        <section className='AppParagraph'>
        <NavBarProjects />
        <h3>Want to generate paragraphs using music lyrics ?</h3>
        {/* The form */}
        <form className='paragraph-form' onSubmit={handleSubmit}>
            <label htmlFor='amount'>paragraphs:</label>
            <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
            />
            <button className='btn-generate-text'>generate</button>
        </form>
        {/* Where we will be displaying the text */}
        <article className='paragraph-text'>
            {/* We just map over the text array */}
            {text.map((item, index) => {
                return <p key={index}>{item}</p>;
            })}
        </article>
        </section>
    );
}

export default AppParagraph;