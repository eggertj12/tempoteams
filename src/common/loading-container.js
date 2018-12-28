import React, { Component } from 'react'

import { get } from '../utils/repository'

export class LoadingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loadingStatus: 'loading',
    };
  }

  componentWillMount() {
    const children = this.props.children
    if (children === null || React.Children.count(children) !== 1) {
      throw (new Error('LoadingContainer must have one and only one child'))
    }

    get(this.props.items, this.props.id)
      .then(data => {
        this.setState({ loadingStatus: 'success', data })
      })
      .catch(error => {
        this.setState({ loadingStatus: 'error' })
      })
  }

  render() {
    const Child = React.Children.toArray(this.props.children)[0];
    let result
    switch (this.state.loadingStatus) {
      case 'loading':
        result = <p>Loading ...</p>
        break;

      case 'error':
        result = <p>ERROR!</p>
        break;

      default:
        result = <Child.type data={this.state.data} />
        break;
    }
    return (
      result
    )
  }
}

export default LoadingContainer
