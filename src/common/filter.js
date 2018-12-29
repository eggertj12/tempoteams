import React, { Component } from 'react'
import styled from 'styled-components'


export class Filter extends Component {

  constructor(props) {
    super(props)
    this.inputChanged = this.inputChanged.bind(this)
  }

  inputChanged(evt) {
    if (typeof (this.props.onFilter) === 'function') {
      this.props.onFilter(evt.target.value)
    }
  }

  render() {
    return (
      <StyledInput type="text" onChange={this.inputChanged} />
    )
  }
}

export default Filter

const StyledInput = styled.input`
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`
