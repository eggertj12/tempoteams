import React, { Component } from 'react'

import User from './user'

export class Team extends Component {
  render() {
    const team = this.props.data
    return (
      <div>
        <p>Team name: {team.name}</p>
        <p>Team lead:</p>
        <User id={team.lead} />
        <p>Members:</p>
        {team.members.map(userId => <User key={userId} id={userId} />)}
      </div>
    )
  }
}

export default Team

