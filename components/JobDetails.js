import React, {useEffect, useState,createContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import BackArrow from '../icons/back_arrow.svg';

function JobDetails() {
  const [jobWithDetail,setJobWithDetail] = useState({});
    const {id} = useParams();

   async function fetchData() {
    const response = await axios(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
        setJobWithDetail(response.data)
   }

    useEffect(() => {
    fetchData()
    },[id])

    const JobDetailsContext = createContext()

    const getUTCDate = new Date(`${jobWithDetail.created_at}`)
    const getTime = getUTCDate.getTime();
    const actualTime = Date.now();
    const differenceBetweenTimes = actualTime - getTime;
    let differenceBetweenDate = Math.round(differenceBetweenTimes / (1000 * 60 * 60 * 24))

    if (differenceBetweenDate < 1) {
        differenceBetweenDate = Math.round(differenceBetweenTimes / (1000 * 60 * 60 * 24) + `hours ago`)
    } else {
        differenceBetweenDate = differenceBetweenDate === 1 ? differenceBetweenDate + "day ago" : differenceBetweenDate + "days ago"
    }

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
            <p className="how_to_apply" dangerouslySetInnerHTML={{ __html:jobWithDetail.how_to_apply}} />
        </div>
          <div>
            <ul>
              <li className="sub_container">
                  <p  className="job_detail_title">{jobWithDetail.title}</p>
                  <span className="job_type">{jobWithDetail.type}</span>
                </li>
                <li className="created_date">
                  🕐{differenceBetweenDate}
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
              <p className="description_article" dangerouslySetInnerHTML={{__html: jobWithDetail.description}} />
          </div>
          </div>
      </div>
      </JobWithDetailContextProvider>
  )
}

export default JobDetails
