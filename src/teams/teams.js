import React, { Component } from 'react'

import Filter from '../common/filter'
import LoadingContainer from '../common/loading-container'
import TeamRow from './team-row'

export class Teams extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'teams': props.data.filter(_ => true),
    }
    this.filterTeams = this.filterTeams.bind(this)
  }

  filterTeams(value) {
    this.setState({
      'teams': this.props.data.filter(
        team => team.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0
      )
    })
  }

  render() {
    return (
      <div>
        Filter teams: <Filter onFilter={this.filterTeams} />
        {this.state.teams.map(team => {
          return (
            <LoadingContainer key={team.id} items='team' id={team.id}>
              <TeamRow />
            </LoadingContainer>
          )
        })}
      </div>
    )
  }
}

export default Teams
