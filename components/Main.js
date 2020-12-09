import React, { useContext} from 'react';

import {GlobalContext} from './GlobalContext';
import FullTimeJobs from './FullTimeJobs';
import FilterByLocation from './FilterByLocation';
import JobsList from './JobsList';

function Main() {
  const {state} = useContext(GlobalContext);
  const {jobsList} = state;
  // console.log(jobsList)

  return (
    <main>
      <section>
        <FullTimeJobs />
        <FilterByLocation />
      </section>
      <section>
      {
        jobsList.map(job => {
          return (
            <JobsList job={job} key={job.id} />
          )
        })
      }
      </section>
    </main>
  )
}

export default Main
