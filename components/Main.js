import React, { useContext} from 'react';

import {GlobalContext} from './GlobalContext';
import FullTimeJobs from './FullTimeJobs';
import FilterByLocation from './FilterByLocation';
import JobsList from './JobsList';

function Main() {
  const {state} = useContext(GlobalContext);
  const {jobsList,loading} = state;
  // console.log(jobsList)

  return (
    <main>
      <section>
        <FullTimeJobs />
        <FilterByLocation />
      </section>
      <section>
      {loading ? <p>Loading...</p>
      :
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
