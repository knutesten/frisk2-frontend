import React from 'react'
import ConsumptionTable from './ConsumptionTable'
import LeaderboardTable from './LeaderboardTable'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchLogAsync()
    this.props.fetchLeaderboardAsync()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <ConsumptionTable log={this.props.home.log}/>
          </div>
          <div className="one-half column">
            <LeaderboardTable leaderboard={this.props.home.leaderboard}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
