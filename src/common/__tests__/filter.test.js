import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Filter from '../filter'

Enzyme.configure({ adapter: new Adapter() })

describe('Filter', () => {
  function change(element, value) {
    element.simulate('change', { 'target': { 'value': value } })
  }

  it('renders without crashing', () => {
    mount(<Filter />)
  })

  it('calls given callback with value on change', () => {
    const handler = jest.fn()
    const wrapper = mount(<Filter onFilter={handler} />)

    change(wrapper.find('input'), 'foo')

    expect(handler).toHaveBeenCalledWith('foo')
  })

  it('does not crash on non function handler', () => {
    const wrapper = mount(<Filter onFilter={'smuuuuu'} />)

    expect(() => {
      change(wrapper.find('input'), 'foo')
    }).not.toThrow()
  })
})
