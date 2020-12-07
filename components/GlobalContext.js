import React, {useReducer, useEffect,useState } from 'react';
import axios from 'axios';

const GlobalContext = React.createContext();

const base_url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node';

function GlobalContextProvider({children}) {
    const [jobWithDetail,setJobWithDetail] = useState('');
    function showJobDetail(job) {
        setJobWithDetail(job)
    }

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

            case "FILTER_BY_TITLE":{
                return {
                    ...state,
                    jobsList: [...state.jobsList, action.newJobArray]
                }
            }
            default :
            return state
        }
    }, {
        loading:true,
        jobsList: [],
        error: '',
    })

    let {jobsList} = state
    console.log(jobsList)

    // fetch data from the API
    useEffect(async () => {
        try {
       const response = await axios(base_url)
           dispatch({type: "FETCH_SUCCESS", payload: response.data})
       }
       catch (err) {
        dispatch({type:"FETCH_ERROR"})
    }
},[])

    return(
        <GlobalContext.Provider value={{state,dispatch,jobWithDetail,showJobDetail}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider,GlobalContext};