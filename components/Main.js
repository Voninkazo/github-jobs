import React, { useContext,useState } from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  input {
    font-size: 12px;
    line-height: 14px;
    padding: 17px;
    background-color: #ffffff;
    outline: none;
    border:none;
  }
  label {
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #B9BDCF;
    margin-bottom:14px;
    font-weight: bold;
  }
`

const FormCheckboxes = styled.form`
    display: flex;
    flex-direction: column;
    padding-top:25px;
    padding-bottom: 25px;
    label {
      margin-bottom: 15px;
      span {
        padding-left: 12px;
      }
    }
`

import {GlobalContext} from './GlobalContext';
import JobsList from './JobsList';

function Main() {
  const {state} = useContext(GlobalContext);
  const {jobsList} = state;
  console.log(jobsList)

  return (
    <>
      <div className="single_checkbox_container">
        <label htmlFor="checkbox">Full Time</label>
        <input
        type="checkbox" name="checkbox"
        />
      </div>
      <div>
        <FormStyles>
          <label>Location</label>
          <input
          type="text"
          placeholder="City, state, zip code or country"
           />
        </FormStyles>
      </div>
      <FormCheckboxes>
          <label htmlFor="london">
          <input 
          type="checkbox"
          name="london"
           />
          <span>London</span>
          </label>

          <label htmlFor="amsterdam">
          <input 
          type="checkbox" 
          name="amsterdam"
          />
          <span>Amsterdam</span>
          </label>

          <label htmlFor="newyork">
          <input 
          type="checkbox" 
          name="newyork"
          />
          <span>New York</span>
          </label>

          <label htmlFor="berlin">
          <input 
          type="checkbox" 
          name="berlin"
          />
          <span>Berlin</span>
          </label>
      </FormCheckboxes>
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
