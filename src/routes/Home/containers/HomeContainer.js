import { connect } from 'react-redux'
import { fetchLogAsync, fetchLeaderboardAsync } from '../modules/home'

import Home from '../components/Home'

const mapActionCreators = {
  fetchLogAsync,
  fetchLeaderboardAsync
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapActionCreators)(Home)
