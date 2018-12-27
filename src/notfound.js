import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
  render() {
    return (
      <div>
        Oh no! You seem to be lost, try <Link to="/">clicking here</Link>
      </div>
    )
  }
}

export default NotFound
