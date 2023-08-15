import React from "react";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const nav = () => {
    props.onLogout(true)
    navigate("/");
  };
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/home">Home</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/members">Members</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/apimembers">API Members</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={nav}>Logout</button>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <h2>Gokul</h2>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
