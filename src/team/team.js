import React, { Component } from 'react'

export class Team extends Component {
  render() {
    return (
      <div>
        <p>Team name: {this.props.data.name}</p>
      </div>
    )
  }
}

export default Team

