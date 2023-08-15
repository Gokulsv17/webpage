import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import classes from "./Addnewuser.module.css";
import Button from "../../Components/button/Button";
import { useNavigate } from "react-router-dom";

const AddNewUser = (props) => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [phone, setPhone] = useState();
  // const [position, setPosition] = useState();
  // const [pass, setPass] = useState();
  // const [confPass, setConfPass] = useState();
  // const [formValid, setFormValid] = useState(false);
  const navigate= useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    pass: "",
    confPass: "",
  });
  // const nameValidateHandler = () => {
  //   setName(form.name.length > 3);
  // };
  // const emailValidateHandler = () => {
  //   setEmail(form.email.includes("@"));
  // };
  // const phoneValidateHandler = () => {
  //   setPhone(form.phone.length === 10);
  // };
  // const positionValidateHandler = () => {
  //   setPosition(form.position.length >= 3);
  // };
  // const passValidateHandler = () => {
  //   setPass(form.pass.trim().length >= 5);
  // };
  // const confPassValidateHandler = () => {
  //   setConfPass(form.confPass.trim().length >= 5);
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });

  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    props.onSubmitData(form)
    navigate("/newuser")
  };
  return (
    <div>
      <Card className={classes.addUser}>
        <form id="formData" onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              
              onChange={handleChange}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
            
              onChange={handleChange}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="phone">PhoneNumber:</label>
            <input
              type="text"
              name="phone"
              id="phone"
             
              onChange={handleChange}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="position">Position:</label>
            <input
              type="type"
              name="position"
              id="position"
              onChange={handleChange}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              name="pass"
              id="pass"
              onChange={handleChange}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="confPass">Conform Password:</label>
            <input
              type="password"
              name="confPass"
              id="confPass"
              onChange={handleChange}
            />
          </div>
          <div className={classes.actions}>
            <Button type="submit" 
            className={classes.btn}>
              Register
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default AddNewUser;
