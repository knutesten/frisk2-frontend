import React from 'react'
import classes from './HomeView.scss'

const LeaderboardTable = ({ leaderboard }) => {
  return (
    <div className={classes.leaderboardTableContainer}>
      <h4>Leaderboard</h4>
      <table className='u-full-width'>
        <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Total</th>
          <th>Percentage of all</th>
        </tr>
        </thead>
        <tbody>
        {leaderboard.map((e, i) =>
          <tr key={e.user.id}>
            <td>{i + 1}</td>
            <td>{e.user.username}</td>
            <td>{e.totalConsumption}</td>
            <td className={classes.percentageColumn}>{(Math.round(e.percentageOfAllConsumption * 100) / 100).toFixed(2)} %</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default LeaderboardTable
