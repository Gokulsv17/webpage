import React, { useState } from "react";
import classes from "./login.module.css";
import Card from "../../Components/Card/Card";
import Button from "../../Components/button/Button";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate= useNavigate()
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
   

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 3
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 3 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
    navigate('/home')
    props.onLogin(enteredEmail, enteredPassword);
  };
 
  return (
    <div>
      <Card className={classes.login}>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control}  ${
              emailValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control}  ${
              passwordValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button 
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
      
    </div>
  );
};
export default Login;
