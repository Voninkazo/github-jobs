import React, {useReducer, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = React.createContext();

const base_url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node';

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
            default :
            return state
        }
    }, {
        loading:true,
        jobsList: [],
        error: '',
    })

    let {jobsList} = state;

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

console.log(jobsList)

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider,GlobalContext};