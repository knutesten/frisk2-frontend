import { connect } from 'react-redux'
import { fetchLogAsync, fetchLeaderboardAsync, fetchTypesAsync, fetchTotalConsumptionAsync, createLogConsumptionOnClick,
  createUndoLogConsumptionOnClick} from '../modules/home'

import Home from '../components/Home'

const mapActionCreators = {
  fetchLogAsync,
  fetchLeaderboardAsync,
  fetchTypesAsync,
  createLogConsumptionOnClick,
  fetchTotalConsumptionAsync,
  createUndoLogConsumptionOnClick
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapActionCreators)(Home)
