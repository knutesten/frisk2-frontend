import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'myStats',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const MyStats = require('./containers/MyStatsContainer').default
      const reducer = require('./modules/myStats').default

      injectReducer(store, { key: 'myStats', reducer })

      cb(null, MyStats)

    }, 'myStats')
  }
})
