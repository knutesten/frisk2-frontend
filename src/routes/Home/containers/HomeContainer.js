import { connect } from 'react-redux'
import { fetchLogAsync } from '../modules/home'

import Home from '../components/Home'

const mapActionCreators = {
  fetchLogAsync
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapActionCreators)(Home)
