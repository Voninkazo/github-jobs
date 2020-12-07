import React, { useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import { GlobalContext } from './GlobalContext';


const DetailContainer = styled.div`
 display: flex;
 flex-direction: row;
 gap:77px;
`

function JobDetails() {
    const {id} = useParams;
    const {jobWithDetail} = useContext(GlobalContext);
  return (
      <DetailContainer>
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
      </DetailContainer>
  )
}

export default JobDetails
