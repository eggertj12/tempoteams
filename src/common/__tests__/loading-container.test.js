import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import repository from '../../utils/repository'

import LoadingContainer from '../loading-container'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('../../utils/repository')

describe('LoadingContainer', () => {
  function givenData(data) {
    repository.__setResult(data)
  }

  function givenFailure() {
    repository.__shouldFail()
  }

  beforeEach(function () {
    repository.__shouldSucceed()
  })

  it('renders without crashing when given a single child', () => {
    shallow(<LoadingContainer><p /></LoadingContainer>)
  })

  it('requires a child', () => {
    expect(
      () => shallow(<LoadingContainer />)
    ).toThrow()
  })

  it('only allows a single child', () => {
    expect(
      () => shallow(<LoadingContainer><p /><p /></LoadingContainer>)
    ).toThrow()
  })

  it('renders Loading before promise is resolved', () => {
    const rendered = shallow(<LoadingContainer><p /></LoadingContainer>)

    expect(rendered).toMatchSnapshot()
  })

  it('renders Error on failure', done => {
    givenFailure()

    const rendered = shallow(<LoadingContainer><p /></LoadingContainer>)

    setTimeout(() => {
      expect(rendered).toMatchSnapshot()
      done()
    }, 0)
  })

  it('renders Child on success', done => {
    const rendered = shallow(<LoadingContainer><p /></LoadingContainer>)

    setTimeout(() => {
      expect(rendered).toMatchSnapshot()
      done()
    }, 0)
  })

  it('passes data to Child on success', done => {
    givenData({ 'name': 'Awesome team' })

    const wrapper = shallow(<LoadingContainer><p /></LoadingContainer>)

    setTimeout(() => {
      expect(wrapper.prop('data').name).toEqual('Awesome team')
      done()
    }, 0)
  })
})
