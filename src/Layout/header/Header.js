import React from 'react'
import Navbar from './Navbar'
import classes from "./Header.module.css"
const Header=(props)=> {
  return (
    <header className={classes.mainHeader}>
      <h3>Header section</h3>
        <Navbar isLoggedIn={props.isLoggedIn} onLogout={props.onLogout}/>
    </header>
  )
}

export default Header