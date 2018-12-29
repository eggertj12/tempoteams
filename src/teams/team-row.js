import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import UserName from './username'

export class TeamRow extends Component {
  render() {
    const team = this.props.data
    return (
      <div>
        <hr />
        <p><Link to={`/team/${team.id}/`}>{team.name}</Link></p>
        <p><span>Team lead: <UserName id={team.lead} /></span> <span>Members: {team.members.length}</span></p>
      </div>
    )
  }
}

export default TeamRow
