import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Teams from '../teams'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('')

describe('Teams', () => {
  const teams = [
    { 'id': 1, 'name': 'Some team' },
    { 'id': 2, 'name': 'Other team' },
  ]

  it('renders without crashing', () => {
    mount(<Teams data={teams} />)
  })

  it('adds all teams to state', () => {
    const wrapper = mount(<Teams data={teams} />)

    expect(wrapper.instance().state.teams).toEqual(teams)
  })

  it('renders all teams', () => {
    const wrapper = mount(<Teams data={teams} />)

    expect(wrapper.find('.team')).toHaveLength(teams.length)
  })

  describe('filterTeams', () => {
    it('filters teams in state', () => {
      const wrapper = mount(<Teams data={teams} />)

      wrapper.instance().filterTeams('Some')

      expect(wrapper.instance().state.teams).toHaveLength(1)
      expect(wrapper.instance().state.teams[0].name).toEqual('Some team')
    })

    it('filters teams irrelevant of case', () => {
      const wrapper = mount(<Teams data={teams} />)

      wrapper.instance().filterTeams('oTHER')

      expect(wrapper.instance().state.teams).toHaveLength(1)
      expect(wrapper.instance().state.teams[0].name).toEqual('Other team')
    })
  })
})
