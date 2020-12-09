import React, {useEffect, useState,createContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import BackArrow from '../icons/back_arrow.svg';

function JobDetails() {
  const [jobWithDetail,setJobWithDetail] = useState({});
    const {id} = useParams();

   async function fetchData() {
    const response = await axios(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`)
        setJobWithDetail(response.data)
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
              <div className="homepage_link_container">
                <img src={BackArrow} alt="go back"/>
                <p className="home_link">Go back to search</p>
              </div>
            </Link>
            <h3>How to aplly</h3>
            <a className="how_to_apply" href={`mailto${jobWithDetail.how_to_apply}`}>{jobWithDetail.how_to_apply}</a>
        </div>
          <div>
            <ul>
              <li className="sub_container">
                  <p  className="job_detail_title">{jobWithDetail.title}</p>
                  <span className="job_type">{jobWithDetail.type}</span>
                </li>
                <li className="created_date">
                  🕐{jobWithDetail.created_at}
                </li>
            </ul>
            <ul>
              <li><img style={{width:"42px", height: "42px"}} src={jobWithDetail.company_logo} alt="logo"/></li>
              <li>
                  <p className="company_name">{jobWithDetail.company}</p>
                  <p className="job_location">🌏{jobWithDetail.location}</p>
              </li>
            </ul>
            <div>
              <p className="description_article">{jobWithDetail.description}</p>
          </div>
          </div>
      </div>
      </JobWithDetailContextProvider>
  )
}

export default JobDetails
