import React from 'react'
import classes from './HomeView.scss'
import moment from 'moment'

const ConsumptionTable = ({ log }) => {
  const add1337Animation = date => {
    const formattedDate = moment(date).format('HHmmss')
    return formattedDate === '133700' || formattedDate === '133337' ? classes.leetAnimation : undefined
  }

  return (
    <div className={classes.consumptionTableContainer}>
      <h4>Recent consumption</h4>
      <table className='u-full-width'>
        <thead>
        <tr>
          <th>User</th>
          <th>Type</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {log.map(e =>
          <tr key={e.id} className={add1337Animation(e.date)}>
            <td>{e.user.username}</td>
            <td>{e.type.name}</td>
            <td><div className={classes.dateCont}>{moment(e.date).format('YYYY-MM-DD HH:mm:ss')}</div></td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default ConsumptionTable
