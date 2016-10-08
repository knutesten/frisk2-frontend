import React from 'react'
import ConsumptionTable from './ConsumptionTable'
import LeaderboardTable from './LeaderboardTable'
import classes from './HomeView.scss'
import consumptionUpdates from './consumptionUpdates'

class Home extends React.Component {
  componentDidMount () {
    this.props.fetchTypesAsync()

    const update = () => {
      this.props.fetchLogAsync()
      this.props.fetchLeaderboardAsync()
      this.props.fetchTotalConsumptionAsync()
    }
    update()

    this.consumptionUpdateSubscription = consumptionUpdates.subscribe(update)
  }

  componentWillUnmount () {
    this.consumptionUpdateSubscription.unsubscribe()
  }

  render () {
    const {
      createLogConsumptionOnClick,
      undoLogConsumptionOnClick,
      home: {
        types,
        log,
        leaderboard,
        totalConsumption
      }
    } = this.props

    const undoButtonClasses = `${classes.undoButton} button-primary`

    return (
      <div>
        <div className={classes.logConsumptionContainer}>
          <h4>Log consumption</h4>
          {types.map(t =>
            <button key={t.id} onClick={createLogConsumptionOnClick(t)}>{t.name}</button>
          )}
          <button className={undoButtonClasses} onClick={undoLogConsumptionOnClick}>Undo</button>
        </div>
        <div>
          <h4>Total consumption</h4>
          <div className={classes.totalConsumption}>{totalConsumption}</div>
        </div>
        <div className='row'>
          <div className='one-half column'>
            <ConsumptionTable log={log} />
          </div>
          <div className='one-half column'>
            <LeaderboardTable leaderboard={leaderboard} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
