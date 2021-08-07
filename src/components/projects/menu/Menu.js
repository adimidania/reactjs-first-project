import React from 'react';
import {Link} from "react-router-dom"

const Menu = ({ items }) => {
  return (
    <div className='section-center-songs'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price,youtubelink } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <Link to={{ pathname: youtubelink}} target="_blank" className="Link-song">
              <img src={img} alt={title} className='photo' />
            </Link>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;