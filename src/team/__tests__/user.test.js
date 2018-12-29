import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import repository from '../../utils/repository'

import User from '../user'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('../../utils/repository')

describe('User', () => {
  function givenData(data) {
    repository.__setResult(data)
  }

  it('renders without crashing', () => {
    shallow(<User />)
  })

  it('renders user\'s name and username', () => {
    givenData({
      'name': 'Jane Doe',
      'username': 'jdoe',
      'lead_teams': [],
      'member_teams': [1],
    })

    const wrapper = mount(<User />)

    return Promise.resolve().then(() => {
      expect(wrapper.text()).toContain('Jane Doe - jdoe')
    })
  })
})
