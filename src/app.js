import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from './notfound'
import Team from './team'
import Teams from './teams'

const routes = [
  <Route exact key="teams" path="/" component={Teams} />,
  <Route key="team" path="/team" component={Team} />,
  <Route key="404" component={NotFound} />
]

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {routes}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
