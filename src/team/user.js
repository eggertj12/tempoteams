import React, { Component } from 'react'
import styled from 'styled-components'

import LoadingContainer from '../common/loading-container'

class Details extends Component {
  render() {
    const user = this.props.data
    return (
      <Row>
        <Name>
          {user.name} - {user.username}
        </Name>
        <Info>
          Leads {user.lead_teams.length} team(s). Member of {user.member_teams.length} team(s).
        </Info>
      </Row>
    )
  }
}


export class User extends Component {
  render() {
    return (
      <LoadingContainer items="user" id={this.props.id} >
        <Details />
      </LoadingContainer>
    )
  }
}

export default User

const Row = styled.div`
  margin: 0;
  padding: 0.5rem 0;

  &:nth-of-type(even) {
    background: #f8f8f8;
  }
`

const Name = styled.p`
  margin: 0.5rem 0 0 0;
  font-weight: bold;
`

const Info = styled.p`
  margin: 0.5rem 0;
  font-size: 0.85rem;
`
