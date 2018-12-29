import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import UserName from './username'

export class TeamRow extends Component {
  render() {
    const team = this.props.data
    return (
      <Row>
        <TeamName to={`/team/${team.id}/`}>{team.name}</TeamName>
        <TeamDetails>Team lead: <UserName id={team.lead} /> Members: <Members>{team.members.length}</Members></TeamDetails>
      </Row>
    )
  }
}

export default TeamRow

const Row = styled.div`
  margin: 0;
  padding: 0.5rem 0;

  &:first-of-type {
    margin-top: 1rem;
  }

  &:nth-of-type(odd) {
    background: #f8f8f8;
  }
`

const TeamName = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  &:visited {
    color: black;
  }
`

const TeamDetails = styled.p`
  margin: 0.5rem 0;
  font-size: 0.85rem;
`

const Members = styled.span`
  margin: 0 1.5rem 0 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  color: black;
`
