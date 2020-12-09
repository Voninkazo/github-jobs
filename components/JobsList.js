import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const JobListContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 23px;
    img {
        width: 90px;
        height: 90px;
    }
`
function JobsList({job}) {
  return (
      <Link to={`/${job.id}`}>
      <JobListContainerStyles>
        <div className="content">
            <div>
                <img src={job.company_logo} alt=""/>
                <ul>
                    <li className="company_name">{job.company}</li>
                    <li className="job_title">{job.title}</li>
                    <li className="job_type">{job.type}</li>
                </ul>
            </div>
            <div className="time_content">
                <p>🌎{job.location}</p>
                <p>🕐{job.created_at}</p>
            </div>
         </div>
      </JobListContainerStyles>
    </Link>
  )
}

export default JobsList
