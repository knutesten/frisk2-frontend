import { connect } from 'react-redux'
import { fetchLogAsync, fetchLeaderboardAsync, fetchTypesAsync, fetchTotalConsumptionAsync, createLogConsumptionOnClick,
  undoLogConsumptionOnClick} from '../modules/home'

import Home from '../../../components/Home/Home'

const mapActionCreators = {
  fetchLogAsync,
  fetchLeaderboardAsync,
  fetchTypesAsync,
  createLogConsumptionOnClick,
  fetchTotalConsumptionAsync,
  undoLogConsumptionOnClick
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapActionCreators)(Home)
