import React from 'react'
import { Route, Switch } from 'react-router';

import Header from './components/Header';
import Main from './components/Main';
import JobDetails from './components/JobDetails';
import Masthead from './components/Masthead';

export default function App() {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/">
          <Masthead />
          <Main />
        </Route>
        <Route path="/:id">
          <JobDetails />
        </Route>
      </Switch>
    </>
  )
}
