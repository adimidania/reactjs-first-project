import React, { useState } from 'react'
import data from './data'
import List from './List'
import "./BdReminder.css"
import NavbarProjects from "../NavbarProjects"

/*
  So people is an array of objects.
*/
function AppBday() {
    const [people, setPeople] = useState(data)
    return (
      <div className="BdayApp">
        <NavbarProjects />
        <main className="Bday-main">
          <section className='Bday-container'>
            <h3>{people.length} birthdays today</h3>
            <List people={people} />
            <button onClick={() => setPeople([])}>Clear all</button>
          </section>
        </main>
      </div>
    )
  }
export default AppBday



