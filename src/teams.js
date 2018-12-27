import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Teams extends Component {
  render() {
    return (
      <div>
        This is teams component
        <br /><Link to="/team">Team</Link>
        <br /><Link to="/foobar">Not found</Link>
      </div>
    )
  }
}

export default Teams
