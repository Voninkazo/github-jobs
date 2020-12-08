import React, { useContext} from 'react';

import {GlobalContext} from './GlobalContext';
import FullTimeJobs from './FullTimeJobs';
import FilterByLocation from './FilterByLocation';
import JobsList from './JobsList';

function Main() {
  const {state,dispatch} = useContext(GlobalContext);
  const {jobsList} = state;
  console.log(jobsList)

  return (
    <>
      <FullTimeJobs />
      <FilterByLocation />
      {
        jobsList.map(job => {
          return (
            <JobsList job={job} key={job.id} />
          )
        })
      }
    </>
  )
}

export default Main
