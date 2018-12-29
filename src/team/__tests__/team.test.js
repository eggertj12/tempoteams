import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Team from '../team'

Enzyme.configure({ adapter: new Adapter() })


describe('Team', () => {
  const data = {
    'name': 'Some team',
    'members': [],
    'lead': 1,
  }
  it('renders without crashing', () => {
    shallow(<Team data={data} />)
  })
})
