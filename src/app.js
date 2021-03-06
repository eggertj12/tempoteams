import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from "styled-components";

import Header from './common/header'
import NotFound from './common/notfound'
import TeamContainer from './team/team-container'
import TeamsContainer from './teams/teams-container'

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
`

const routes = [
  <Route exact key="teams" path="/" component={TeamsContainer} />,
  <Route key="team" path="/team/:team" component={({ match }) => <TeamContainer team={match.params.team} />} />,
  <Route key="404" component={NotFound} />
]

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalStyles />
          <Header />
          <Switch>
            {routes}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
