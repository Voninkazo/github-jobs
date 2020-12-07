import React from 'react'
import { Route, Switch } from 'react-router';

import Header from './components/Header';
import Main from './components/Main';
import JobDetails from './components/JobDetails';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1><b>Github</b> Jobs</h1>
          <Header />
          <Main />
        </Route>
        <Route path="/:id">
          <JobDetails />
        </Route>
      </Switch>
    </>
  )
}
