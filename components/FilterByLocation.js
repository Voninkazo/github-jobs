import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { GlobalContext } from './GlobalContext';
import FormStyles from './Styles';
import IconGlobe from '../icons/globe.svg';

const FormCheckboxes = styled.form`
    display: flex;
    flex-direction: column;
    padding-top:25px;
    padding-bottom: 25px;
    input {
      background-image: url(${IconGlobe});
      background-repeat:no-repeat;
      background-size: cover;
      background-position: center;
    }
    label {
      margin-bottom: 15px;
    }
      span {
        padding-left: 12px;
      }
`

function FilterByLocation() {
  const [filteredJobsByLocation,setFilteredJobsByLocation] = useState('');
 const [filteredJobsByGivenLocation,setFilteredJobsByGivenLocation] = useState('');
 const cityArrayExample =["London", "New York", "Amsterdam", "Berlin"]


 const {dispatch} = useContext(GlobalContext);

  function filterByLocation(e) {
    e.preventDefault();
    dispatch({type: "FILTER_BY_LOCATION", filteredValue: filteredJobsByLocation})
    setFilteredJobsByLocation('')
  }

  function filterByGivenLocation(e) {
    setFilteredJobsByGivenLocation(e.target.value)
    e.preventDefault();
    dispatch({type: "FILTER_BY_GIVEN_LOCATION", filteredValue: filteredJobsByGivenLocation})
  }

  return (
    <>
    <p className="location_label">Location</p>
    <FormStyles onSubmit={filterByLocation}>
        <input
        type="text"
        value={filteredJobsByLocation}
        onChange={e => setFilteredJobsByLocation(e.target.value)}
        placeholder="City, state, zip code or country"
        />
        <button>Search</button>
      </FormStyles>
      {
        cityArrayExample.map(city => {
          return (
            <FormCheckboxes key={city}>
              <label htmlFor={city}>
              <input 
              type="checkbox" 
              id={city}
              name={city}
              value={city}
              checked={city === filteredJobsByGivenLocation}
              onChange={filterByGivenLocation}
              />
              <span>{city}</span>
              </label>
            </FormCheckboxes>
          )
        })
      }
    </>
  )
}

export default FilterByLocation
