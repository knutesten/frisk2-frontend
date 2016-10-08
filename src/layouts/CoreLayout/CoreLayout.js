import React from 'react'
import Header from '../../components/Header'
import Chat from '../../components/Chat'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

const CoreLayout = ({ children }) => (
  <div className='container'>
    <Chat />
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default {
  component: CoreLayout
}
