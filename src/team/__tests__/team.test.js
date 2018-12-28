import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Team from '../team'

Enzyme.configure({ adapter: new Adapter() })

describe('Team', () => {
  const data = {
    'name': 'Some team',
  }
  it('renders without crashing', () => {
    mount(<Team data={data} />)
  })
})
