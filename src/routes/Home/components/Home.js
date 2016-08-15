import React from 'react'
import ConsumptionTable from './ConsumptionTable'
import LeaderboardTable from './LeaderboardTable'
import classes from './HomeView.scss'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchLogAsync()
    this.props.fetchLeaderboardAsync()
    this.props.fetchTypesAsync()

    const ding = new Audio('/ding.wav')

    this.socket = new WebSocket("${websocketTarget}")
    this.socket.onmessage = (message) => {
      if (message.data === 'update') {
        this.props.fetchLeaderboardAsync()
        this.props.fetchLogAsync()
        ding.play()
      }
    }
  }

  componentWillUnmount() {
    this.socket.close()
  }

  render() {
    const undoButtonClasses = `${classes.undoButton} button-primary`

    return (
      <div>
        <div className={classes.logConsumptionContainer}>
          <h4>Log consumption</h4>
          {this.props.home.types.map(t =>
            <button key={t.id} onClick={this.props.createLogConsumptionOnClick(t)}>{t.name}</button>
          )}
          <button className={undoButtonClasses} onClick={this.props.createUndoLogConsumptionOnClick()}>Undo</button>
        </div>
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
