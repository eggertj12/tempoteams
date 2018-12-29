import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import repository from '../../utils/repository'

import UserName from '../username'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('../../utils/repository')

describe('UserName', () => {
  function givenData(data) {
    repository.__setResult(data)
  }

  it('renders without crashing', () => {
    shallow(<UserName />)
  })

  it('renders user\'s name', () => {
    givenData({
      'name': 'Jane Doe',
    })

    const wrapper = mount(<UserName />)

    return Promise.resolve().then(() => {
      expect(wrapper.text()).toContain('Jane Doe')
    })
  })
})
