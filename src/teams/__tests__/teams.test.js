import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import LoadingContainer from '../../common/loading-container'
import Teams from '../teams'

Enzyme.configure({ adapter: new Adapter() })
jest.mock('../../utils/repository')

describe('Teams', () => {
  const teams = [
    { 'id': 1, 'name': 'Some team', 'members': [] },
    { 'id': 2, 'name': 'Other team', 'members': [] },
  ]

  it('renders without crashing', () => {
    shallow(<Teams data={teams} />)
  })

  it('adds all teams to state', () => {
    const wrapper = shallow(<Teams data={teams} />)

    expect(wrapper.instance().state.teams).toEqual(teams)
  })

  it('renders all teams', () => {
    const wrapper = shallow(<Teams data={teams} />)

    expect(wrapper.find(LoadingContainer)).toHaveLength(teams.length)
  })

  describe('filterTeams', () => {
    it('filters teams in state', () => {
      const wrapper = shallow(<Teams data={teams} />)

      wrapper.instance().filterTeams('Some')

      expect(wrapper.instance().state.teams).toHaveLength(1)
      expect(wrapper.instance().state.teams[0].name).toEqual('Some team')
    })

    it('filters teams irrelevant of case', () => {
      const wrapper = shallow(<Teams data={teams} />)

      wrapper.instance().filterTeams('oTHER')

      expect(wrapper.instance().state.teams).toHaveLength(1)
      expect(wrapper.instance().state.teams[0].name).toEqual('Other team')
    })
  })
})
