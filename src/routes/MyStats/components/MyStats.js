import React from 'react'
import classes from './MyStats.scss'
import { BarChart } from 'rd3'

class MyStats extends React.Component {
  componentDidMount() {
    this.props.fetchTodaysConsumptionAsync()
  }

  render() {
    return (
      <div>
        <div>
          <h4>Todays consumption</h4>
          <BarChart data={this.props.myStats.todaysConsumption} width={800} height={300} />
        </div>
      </div>
    )
  }
}

export default MyStats
