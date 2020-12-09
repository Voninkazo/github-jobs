import React, { useContext, useState } from 'react';

import {GlobalContext} from './GlobalContext';


function FullTimeJobs() {
  const {state,dispatch} = useContext(GlobalContext);
  const {full_time} = state;
  const [isFullTimeJobChosen,setIsFullTimeJobChecked] = useState(full_time);

  function findAllFullTimeJobs(e) {
    setIsFullTimeJobChecked(!isFullTimeJobChosen)
    dispatch({type:"FILTER_BY_FULL_TIME_JOB", filteredValues: isFullTimeJobChosen})
  }

  return (
    <div className="single_checkbox_container">
        <label htmlFor="checkbox">Full Time</label>
        <input
        type="checkbox" 
        onChange={findAllFullTimeJobs}
        checked={isFullTimeJobChosen}
        />
      </div>
  )
}

export default FullTimeJobs
