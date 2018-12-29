import React, { Component } from 'react'
import styled from 'styled-components'

import User from './user'

export class Team extends Component {
  render() {
    const team = this.props.data
    return (
      <div>
        <TeamName>{team.name}</TeamName>
        <Role>Team lead</Role>
        <User id={team.lead} />
        <Role>Members</Role>
        {team.members.map(userId => <User key={userId} id={userId} />)}
      </div>
    )
  }
}

export default Team

const TeamName = styled.h1`
  font-size: 1.5rem;
`

const Role = styled.h2`
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
`
