import React from 'react'
import Header from './header/Header'
import classes from "./layout.module.css"
const Layout=(props)=> {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.topLayout}>
      <Header isLoggedIn={props.isAuthenticated} onLogout={props.onLogout}/>
      </div>
      <div className={classes.renderWrapper}>
      {props.children}
      </div>
      
    </div>
  )
}
export default Layout;