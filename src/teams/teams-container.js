import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class TeamsContainer extends Component {
  render() {
    return (
      <div>
        This is teams component
        <br /><Link to="/team">Team</Link>
      </div>
    )
  }
}

export default TeamsContainer
