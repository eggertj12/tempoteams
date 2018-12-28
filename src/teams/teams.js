import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Filter from '../common/filter'

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
        <Filter onFilter={this.filterTeams} />
        {this.state.teams.map(team => { return <div className='team' key={team.id}><Link to={`/team/${team.id}/`}>{team.name}</Link></div> })}
      </div>
    )
  }
}

export default Teams
