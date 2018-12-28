import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TeamContainer from '../team-container'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('../../utils/repository')

describe('TeamContainer', () => {
  it('renders without crashing', () => {
    const welcome = mount(<TeamContainer />)
  })
})
