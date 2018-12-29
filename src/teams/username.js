import React, { Component } from 'react'
import styled from 'styled-components'

import LoadingContainer from '../common/loading-container'


class Name extends Component {
  render() {
    return (
      <StyledName>
        {this.props.data.name}
      </StyledName>
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

const StyledName = styled.span`
  margin: 0 1.5rem 0 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  color: black;
`
