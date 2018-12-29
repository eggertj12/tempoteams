import React, { Component } from 'react'

import { get } from '../utils/repository'

export class LoadingContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loadingStatus: 'loading',
    }
    this.unmounted = false
  }

  componentWillMount() {
    const children = this.props.children
    if (children === null || React.Children.count(children) !== 1) {
      throw (new Error('LoadingContainer must have one and only one child'))
    }

    this.promise = get(this.props.items, this.props.id)
      .then(data => {
        if (!this.unmounted) {
          this.setState({ loadingStatus: 'success', data })
        }
      })
      .catch(error => {
        if (!this.unmounted) {
          this.setState({ loadingStatus: 'error' })
        }
      })
  }

  componentWillUnmount() {
    this.unmounted = true
    // TODO: Cancel promise
  }

  render() {
    const Child = React.Children.toArray(this.props.children)[0]
    let result
    switch (this.state.loadingStatus) {
      case 'loading':
        result = <span>Loading ...</span>
        break

      case 'error':
        result = <span>ERROR!</span>
        break

      default:
        result = <Child.type data={this.state.data} />
        break
    }
    return (
      result
    )
  }
}

export default LoadingContainer
