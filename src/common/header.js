import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <h1>
        <Link to="/">Tempo Teams</Link>
      </h1>
    )
  }
}

export default Header
