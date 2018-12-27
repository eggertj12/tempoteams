import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './common/header'
import NotFound from './common/notfound'
import TeamContainer from './team/team-container'
import TeamsContainer from './teams/teams-container'

const routes = [
  <Route exact key="teams" path="/" component={TeamsContainer} />,
  <Route key="team" path="/team" component={TeamContainer} />,
  <Route key="404" component={NotFound} />
]

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
