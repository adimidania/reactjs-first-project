import React, { useState } from 'react';
import people from './Data';

const Review = () => {
  /* For displaying a certain item on the screen (depending on the index ofc) */
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  /* This function is responsible of checking the index (in order to prevent errors, outOfBound etc) */
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  /* To get to the next item */
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  /* To get to the previous item */
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  /* To get a random person */
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <i class="fas fa-quote-right"></i>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <i class="fas fa-chevron-right"></i>  
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        CHOOSE FOR ME
      </button>
    </article>
  );
};

export default Review;