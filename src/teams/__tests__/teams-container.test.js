import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TeamsContainer from '../teams-container'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('../../utils/repository')

describe('TeamsContainer', () => {
  it('TeamsContainer renders without crashing', () => {
    shallow(<TeamsContainer />)
  })
})
