import React from 'react'
import classes from './HomeView.scss'
import moment from 'moment'

class ConsumptionTable extends React.Component {
  render() {
    return (
      <div className={classes.consumptionTableContainer}>
        <h4>Recent consumption</h4>
        <table className="u-full-width">
          <thead>
          <tr>
            <th>User</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
          </thead>
          <tbody>
          {this.props.log.map(e =>
            <tr key={e.id}>
              <td>{e.user.username}</td>
              <td>{e.type.name}</td>
              <td>{moment(e.date).format('YYYY-MM-DD HH:mm:ss')}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ConsumptionTable
