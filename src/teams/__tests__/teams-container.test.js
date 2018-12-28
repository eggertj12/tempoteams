import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import repository from '../../utils/repository'

import TeamsContainer from '../teams-container'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('../../utils/repository')

describe('TeamsContainer', () => {
  it('TeamsContainer renders without crashing', () => {
    const welcome = mount(<TeamsContainer />)
  })
})
