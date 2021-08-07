import React, { useState, useEffect } from 'react'
import Tours from './Tours'
import "./AppTours.css"
import NavbarProjects from '../NavbarProjects'
/** This is a link to the api from which we will be fetching data */
const url = 'https://course-api.com/react-tours-project'


function AppTours() {
  /* We will be needing two states, one for the loading, and another for the tours objects */
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  /* A function to remove a tour */
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  /* Fetching tours from the API */
  /* We need to wrap the fetching between try-catch, cuz it may sometimes cause errors */
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  /* When loading is "true" */
  if (loading) {
    return (
        <div className="container-tours">
            <NavbarProjects />
            <main className="Loading">
                Loading..
            </main>
        </div>
    )
  }
  /* When the tours array is empty, we will provide to the user the ability
    to refresh the page (and we will fetch the data again) */
  if (tours.length === 0) {
    return (
        <div className="container-tours">
            <NavbarProjects />
            <main className="no-tours">
                <div className='title'>
                <p className="no-tours-text">NO TOURS LEFT</p>
                <button className='btn-refresh' onClick={() => fetchTours()}>
                  <i class="fas fa-redo"></i>
                </button>
                </div>
            </main>
        </div>
    )
  }
  /* Else, we will return the available tours */
  return (
    <main className="tours">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default AppTours