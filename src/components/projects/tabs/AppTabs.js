import React, { useState, useEffect } from 'react'
import NavbarProjects from '../NavbarProjects'
import "./AppTabs.css"
const url = 'https://course-api.com/react-tabs-project'


function AppTabs() {
    /* We will be using Loading, jobs (to display the buttons), and Value (the current job displayed) */
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [value, setValue] = useState(0)
    /* just fetching Data from that API */
    const fetchJobs = async () => {
        const reponse = await fetch(url)
        const newJobs = await reponse.json()
        setJobs(newJobs)
        setLoading(false)
    }
    /* Each time the jobs changes, we will fetch data again */
    useEffect(() => {
        fetchJobs()
    }, [])
    if (loading) {
        return (
        <section className="container-tabsApp">
            <NavbarProjects />
            <h1 className="Loading">Loading...</h1>
        </section>
        )
    }
    const { company, dates, duties, title } = jobs[value]
    return (
        <section className="container-tabsApp">
            <NavbarProjects />
            <div className="title-tabs">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                {/* button container */}
                <div className="btn-container-tabs">
                    {jobs.map((item, index) => {
                        return (
                        <button
                            key={item.id}
                            onClick={() => setValue(index)}
                            className={`job-btn ${index === value && 'active-btn'}`}
                        >
                            {item.company}
                        </button>
                        )
                    })}
                </div>

                {/* job info */}
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                        <div key={index} className="job-desc">
                            <i className="fas fa-angle-double-right job-icon"></i>
                            <p>{duty}</p>
                        </div>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default AppTabs