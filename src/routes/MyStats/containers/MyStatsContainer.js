import { connect } from 'react-redux'
import { fetchTodaysConsumptionAsync } from '../modules/myStats'

import MyStats from '../components/MyStats'

const mapActionCreators = {
  fetchTodaysConsumptionAsync
}

const mapStateToProps = (state) => ({
  myStats: state.myStats
})

export default connect(mapStateToProps, mapActionCreators)(MyStats)
