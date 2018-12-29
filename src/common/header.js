import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export class Header extends Component {
  render() {
    return (
      <Title>
        <StyledLink to="/">Tempo Teams</StyledLink>
      </Title>
    )
  }
}

export default Header

const Title = styled.h1`
  border-bottom: 1px solid #b0b0b0;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 2rem;
`
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:visited {
    color: black;
  }
`
