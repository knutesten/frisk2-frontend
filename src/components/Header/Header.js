import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <section className={classes.header}>
    <h1>Frisk 2</h1>
    <p className={classes.frisk2Slogan}>- A modern webapp for tracking frisk consumption</p>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/myStats' activeClassName={classes.activeRoute}>
      My stats
    </Link>
  </section>
)

export default Header
