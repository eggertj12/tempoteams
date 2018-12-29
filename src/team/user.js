import React, { Component } from 'react'

import LoadingContainer from '../common/loading-container'

class Details extends Component {
  render() {
    const user = this.props.data
    return (
      <div>
        <p>
          {user.name} - {user.username}
        </p>
        <p>
          Leads {user.lead_teams.length} team(s). Member of {user.member_teams.length} team(s).
        </p>
      </div>
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
