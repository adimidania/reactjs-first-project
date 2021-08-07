import React from 'react';
import Review from './Review';
import "./AppReviews.css"
import NavbarProjects from "../NavbarProjects"

function AppReviews() {
  return (
    <div className="AppReviews">
      <NavbarProjects />
      <section className='container-reviews'>
        <div className='title'>
          <h2>MY FAVORITE SERIES ON NETFLIX</h2>
        </div>
        <Review />
      </section>
    </div>
  );
}

export default AppReviews;