import React, { Component } from 'react'

import LoadingContainer from '../common/loading-container'

class Name extends Component {
  render() {
    return (
      <span>
        {this.props.data.name}
      </span>
    )
  }
}


export class UserName extends Component {
  render() {
    return (
      <LoadingContainer items="user" id={this.props.id} >
        <Name />
      </LoadingContainer>
    )
  }
}

export default UserName
