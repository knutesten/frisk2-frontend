import React from 'react'
import ConsumptionTable from './ConsumptionTable'
import LeaderboardTable from './LeaderboardTable'
import classes from './HomeView.scss'


const connectToWs = (onmessage, onreconnect) => {
  let socket
  let reconnect = false

  const connect = () => {
    socket = new WebSocket("${websocketTarget}")
    socket.onmessage = onmessage
    socket.onopen = () => { if (reconnect) onreconnect() }
    socket.onclose = e => {
      if (e.code !== 1005) {
        reconnect = true
        setTimeout(connect, 3000)
      }
    }
  }
  connect()
  return { close: () =>  { if (socket) socket.close() } }
}

class Home extends React.Component {
  componentDidMount() {
    const update = () => {
      this.props.fetchLogAsync()
      this.props.fetchLeaderboardAsync()
    }
    update()
    this.props.fetchTypesAsync()

    const ding = new Audio('/ding.wav')

    this.wsConn = connectToWs(
      message => {
        if (message.data === 'update') {
          update()
          ding.play()
        }
      },
      update
    )
  }

  componentWillUnmount() {
    this.wsConn.close()
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
