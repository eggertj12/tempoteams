import React, { Component } from 'react'

import Teams from './teams'
import LoadingContainer from '../common/loading-container'

export class TeamsContainer extends Component {
  render() {
    return (
      <LoadingContainer items="teams">
        <Teams />
      </LoadingContainer>
    )
  }
}

export default TeamsContainer
