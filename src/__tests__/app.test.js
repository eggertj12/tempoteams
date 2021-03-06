import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Adapter from 'enzyme-adapter-react-16'

import App from '../app'
import NotFound from '../common/notfound'
import TeamContainer from '../team/team-container'
import TeamsContainer from '../teams/teams-container'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('../utils/repository')


test('empty path should render Teams', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find(TeamsContainer)).toHaveLength(1)
  expect(wrapper.find(TeamContainer)).toHaveLength(0)
})

test('invalid path should render NotFound', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/foobar']} initialIndex={0}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find(NotFound)).toHaveLength(1)
  expect(wrapper.find(TeamsContainer)).toHaveLength(0)
})
