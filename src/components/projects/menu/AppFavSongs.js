import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './Data';
import "./AppFavSongs.css"
import NavbarProjects from "../NavbarProjects"

/* This the array that contains all the singers I have in my data.js, we are using a set in order
to avoid having duplicated data, and ofc we will need to add a button All t*/
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function AppFavSongs() {
  /* My States, one for holding the MenuItems according the the chosen category, and another for holding
  All the categories we have in this App */
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  /* Changing the Menu Items according the chosen category */
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main class="AppFavSongs">
      <NavbarProjects />
      <section className="menu">
        <div className="title-songs">
          <h1>My Favorite Songs Of All Time</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default AppFavSongs;