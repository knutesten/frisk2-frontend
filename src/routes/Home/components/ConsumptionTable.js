import React from 'react'
import classes from './HomeView.scss'

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
              <td>{new Date(e.date).toISOString().slice(0,19).replace('T', ' ')}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ConsumptionTable
