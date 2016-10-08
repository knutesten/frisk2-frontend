import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const MyStats = require('./containers/CoreLayoutContainer').default
      const reducer = require('./modules/coreLayout').default

      injectReducer(store, { key: 'chat', reducer })

      cb(null, MyStats)

    }, 'chat')
  }
})
