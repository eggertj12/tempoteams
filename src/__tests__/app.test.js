import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Adapter from 'enzyme-adapter-react-16'

import App from '../app'
import NotFound from '../notfound'
import Team from '../team'
import Teams from '../teams'

Enzyme.configure({ adapter: new Adapter() })

test('empty path should render Teams', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find(Teams)).toHaveLength(1)
  expect(wrapper.find(Team)).toHaveLength(0)
})

test('invalid path should render NotFound', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/foobar']} initialIndex={0}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find(NotFound)).toHaveLength(1)
  expect(wrapper.find(Teams)).toHaveLength(0)
})