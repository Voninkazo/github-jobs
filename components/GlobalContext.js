import React, {useReducer, useEffect } from 'react';
import axios from 'axios';

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

            case "FILTER_BY_LOCATION":{
                return {
                    ...state,
                    description: "",
                    location: action.filteredValue
                }
            }

            case "FILTER_BY_GIVEN_LOCATION":{
                return {
                    ...state,
                    description: "",
                    location: action.filteredValue
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
        description:"python",
        location: ""
    })

    let {jobsList,location,description} = state
    console.log(jobsList)

  async function fetchData() {
        try {
            const response = await axios(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`);
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

useEffect(() => {
    fetchData();
},[location])

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider,GlobalContext};