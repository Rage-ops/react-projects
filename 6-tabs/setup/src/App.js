import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchExpereinceData = async () => {
        setIsLoading(true);
        try {
            const resp = await fetch(url);
            const fetchedData = await resp.json();
            setJobs(fetchedData);
            setIsLoading(false);
        }
        catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    }

    useEffect(() => {
        fetchExpereinceData()
    }, [])


    if (isLoading) {
        return <section className="section loading">
            <h1>Loading...</h1>
        </section>
    }
    const { company, dates, duties, title } = jobs[value]
    return <section className="section">
        <div className="title">
            <h2>Experience</h2>
            <div className="underline"></div>
        </div>
        <div className="jobs-center">
            <div className="btn-container">
                {
                    jobs.map((job, index) => {
                        return <button key={job.id}
                            className={`job-btn ${index === value && "active-btn"}`}
                            onClick={() => setValue(index)}>
                            {job.company}
                        </button>
                    })
                }
            </div>
            <article className="job-info">
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className="job-date">{dates}</p>
                {
                    duties.map((duty, index) => {
                        return (
                            <div key={index} className='job-desc'>
                              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                              <p>{duty}</p>
                            </div>
                        )
                    })
                }
            </article>
        </div>
        <button type='button' className='btn'>
            more info
        </button>
    </section>
}

export default App
