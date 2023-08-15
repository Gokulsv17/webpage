import React, { useEffect, useState } from "react";
import classes from "./Members.module.css";
import Card from "../../Components/Card/Card";
import Profile from "../../assets/imgs/256-2569650_men-profile-icon-png-image-free-download-searchpng.png";
import axios from "axios";




const Members = () => {
    const [posts, setPosts]= useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/getUsers")  // localhost datas
        .then(users=>{setPosts(users.data)})
        .catch(err => console.log(err))
        console.log(posts)
    },[])
  return (
    <div className={classes.container}>
      {posts ? (
        posts.map((element) => {
          return (
            <Card className={classes.profileCard} key={element.id}>
              <div className={classes.image}>
                <img src={Profile} />
              </div>
              <div className={classes.bio}>
                <label>Name: </label>
                {element.name}
                <br />
                <label>Email:</label>
                {element.email}
                <br />
                <label>Phone:</label>
                {element.phonenum}<br />
                <label>position</label>
                {element.position}<br />
                <label>Password:</label>
                {element.pass}<br />
              </div>
            </Card>
          );
        })
      ) : (
        <h3>Loading..........</h3>
      )}
   
    </div>
  );
};
export default Members;