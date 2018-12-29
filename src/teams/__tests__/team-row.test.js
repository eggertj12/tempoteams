import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TeamRow from '../teams-container'

Enzyme.configure({ adapter: new Adapter() })

describe('TeamRow', () => {
  it('renders without crashing', () => {
    shallow(<TeamRow />)
  })
})
