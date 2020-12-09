import React, {useEffect, useState,createContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function JobDetails() {
  const [jobWithDetail,setJobWithDetail] = useState({});
    const {id} = useParams();
    // console.log(id)
    // console.log(jobWithDetail)

   async function fetchData() {
    const response = await axios(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`)
        setJobWithDetail(response.data)
        // console.log(response.data)
   }

    useEffect(() => {
    fetchData()
    },[id])

    const JobDetailsContext = createContext()

function JobWithDetailContextProvider({ children, jobWithDetail }) {
  return (
    <JobDetailsContext.Provider
      value={{ jobWithDetail }}
    > 
      {children}  
    </JobDetailsContext.Provider>
  )
}

  return (
    <JobWithDetailContextProvider>
      <div className="detail_container">
        <div>
            <Link to="/">
              <p>Go back to search</p>
            </Link>
            <p>How to apply</p>
            <p>{jobWithDetail.how_to_apply}</p>
        </div>
          <div>
            <ul>
              <li>
                  <p>{jobWithDetail.title}</p>
                  <span>{jobWithDetail.type}</span>
                </li>
                <li>
                  {jobWithDetail.created_at}
                </li>
            </ul>
            <ul>
              <li><img style={{width:"90px"}} src={jobWithDetail.company_logo} alt="logo"/></li>
              <li>
                  <p>{jobWithDetail.location}</p>
              </li>
            </ul>
            <div>
              <p>{jobWithDetail.description}</p>
          </div>
          </div>
      </div>
      </JobWithDetailContextProvider>
  )
}

export default JobDetails
