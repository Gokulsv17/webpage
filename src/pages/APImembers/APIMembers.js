import React, { useEffect, useState } from "react";
import classes from "./APIMembers.module.css";
import Card from "../../Components/Card/Card";

const APIMembers = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")  //api data
      .then((data) => data.json())
      .then((e) => {
        setPosts(e.data);
        console.log(e.data)
      });
  }, [0]);
  return (
    <div className={classes.container}>
      {posts ? (
        posts.map((element) => {
          return (
            <Card className={classes.profileCard} key={element.id}>
              <div className={classes.image}>
                <img src={element.avatar} />
              </div>
              <div className={classes.bio}>
                <label>Name: </label>
                {element.first_name + element.last_name}<br/>
                <label>Email:</label>
                {element.email}
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
export default APIMembers;
