import React, { Component } from 'react'

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
      <input type="text" onChange={this.inputChanged} />
    )
  }
}

export default Filter
