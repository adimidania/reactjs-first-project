import React from 'react';
/*
so basically, we will get that array of objects from data.js, we will loop over it, and for each person we create 
an article.
*/
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        // It's an array destructuring
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;