import React from 'react';
import Tour from './Tour';
import NavbarProjects from '../NavbarProjects';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <NavbarProjects />
      <div className="title">
        <h1>Our Tours</h1>
      </div>
      <div className="tours-container">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;