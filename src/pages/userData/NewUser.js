import React from "react";
import classes from "./NewUser.module.css";
import Card from "../../Components/Card/Card";
import Profile from "../../assets/imgs/256-2569650_men-profile-icon-png-image-free-download-searchpng.png";
const UserData = (props) => {
    console.log(Object.keys(props.data))
  return (
    <div>
      <Card className={classes.profileCard}>
        <div className={classes.image}>
          <img src={Profile} />
        </div>
        <div className={classes.bio}>
          <h4>
         {Object.keys(props.data)[0]} : {props.data.name}
            <br />
            {Object.keys(props.data)[1]}: {props.data.email}
            <br />
            {Object.keys(props.data)[2]}:  {props.data.phone}
            <br />
            {Object.keys(props.data)[4]}:   {props.data.pass}
          </h4>
        </div>
      </Card>
    </div>
  );
};

export default UserData;
