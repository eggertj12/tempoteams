import React, { Component } from 'react'

import Team from './team'
import LoadingContainer from '../common/loading-container'

export class TeamContainer extends Component {
  render() {
    return (
      <LoadingContainer items="team" id={this.props.team}>
        <Team />
      </LoadingContainer>
    )
  }
}

export default TeamContainer
