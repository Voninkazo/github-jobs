import React, {useReducer, useEffect } from 'react';
import axios from 'axios';
import JobsList from './JobsList';

const GlobalContext = React.createContext();

// const CORS_URL = "https://cors-anywhere.herokuapp.com"
// const API_URL = "https://jobs.github.com";

function GlobalContextProvider({children}) {
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case "FETCH_SUCCESS":
                return {
                    loading: false,
                    jobsList: action.payload,
                    error: '',
                }
            case "FETCH_ERROR":{
                return {
                    loading: false,
                    jobsList: [],
                    error : "No data is fetched", 
                }
            }

            case "SEARCH_BY_KEY_WORDS": {
                return {
                    ...state,
                    search: action.foundValues,
                    description: '',
                }
            }

            case "FILTER_BY_LOCATION":{
                return {
                    ...state,
                    description: "",
                    location: action.filteredValue,
                }
            }

            case "FILTER_BY_GIVEN_LOCATION":{
                return {
                    ...state,
                    description: "",
                    location: action.filteredValue,
                }
            }

            case "FILTER_BY_FULL_TIME_JOB": {
                return {
                    ...state,
                    description: '',
                    location: '',
                    full_time: action.filteredValues,
                }
            }

            default : {
                return state
            }
        }
    }, {
        loading:true,
        jobsList: [],
        error: '',
        search: '',
        description:"",
        location: "",
        full_time:false,
        search: "",
    })

    let {jobsList,location,description,full_time,search} = state
    // console.log(jobsList)

  async function fetchData() {
        try {
            const response = await axios(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`);
                dispatch({type: "FETCH_SUCCESS", payload: response.data})
            }
            catch (error) {
             dispatch({type:"FETCH_ERROR"})
         }
    }

    async function fetchFullTimeJobs() {
        try {
            const response = await axios(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?full_time=${full_time}`);
                dispatch({type: "FETCH_SUCCESS", payload: response.data})
            }
            catch (error) {
             dispatch({type:"FETCH_ERROR"})
         }
    }

    async function fetchToGetDataFilteredByKeyWords() {
        try {
            const response = await axios(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${search}`);
                dispatch({type: "FETCH_SUCCESS", payload: response.data})
            }
            catch (error) {
             dispatch({type:"FETCH_ERROR"})
         }
    }

   // fetch data from the API
    useEffect(() => {
        fetchData();
    },[])

    useEffect(() =>{
        fetchToGetDataFilteredByKeyWords();
    },[search])

    useEffect(() => {
        fetchData();
    },[location,description])

    useEffect(() => {
        fetchFullTimeJobs();
    },[full_time])

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider,GlobalContext};