import React from 'react'
import ConsumptionTable from './ConsumptionTable'
import LeaderboardTable from './LeaderboardTable'
import classes from './HomeView.scss'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchLogAsync()
    this.props.fetchLeaderboardAsync()
    this.props.fetchTypesAsync()
  }

  render() {
    const logConsumptionContainerClasses = `${classes.logConsumptionContainer} row`;

    return (
      <div>
        <div className={logConsumptionContainerClasses}>
          <h4>Log consumption</h4>
          {this.props.home.types.map(t =>
            <button key={t.id} onClick={this.props.createLogConsumptionOnClick(t)}>{t.name}</button>
          )}
        </div>
        <div className={classes.row}>
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
