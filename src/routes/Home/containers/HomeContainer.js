import { connect } from 'react-redux'
import { fetchLogAsync, fetchLeaderboardAsync, fetchTypesAsync, createLogConsumptionOnClick} from '../modules/home'

import Home from '../components/Home'

const mapActionCreators = {
  fetchLogAsync,
  fetchLeaderboardAsync,
  fetchTypesAsync,
  createLogConsumptionOnClick
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapActionCreators)(Home)
