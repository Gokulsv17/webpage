import React from "react";
import classes from "./Home.module.css";
import Card from "../../Components/Card/Card";
import Button from "../../Components/button/Button";
import { useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate= useNavigate()
    const addUser=()=>{
        navigate('/add-user')
    }
    return(
        <div className={classes.home}>
            <div className={classes.row}>
            <Card className={classes.card}>
                <h3>Add new section</h3>
                <Button onClick={addUser}>add new </Button>
            </Card>
            <Card className={classes.card}>
                <h3>Card num 2</h3>
                {/* <Button>add new </Button> */}
            </Card>
            </div>
            <div className={classes.row}>
            <Card className={classes.card}>
                <h3>Card num 3</h3>
                {/* <Button>add new </Button> */}
            </Card>
            <Card className={classes.card}>
                <h3>Card num 4</h3>
                {/* <Button>add new </Button> */}
            </Card>
            </div>
            
        </div>
    )
}

export default Home;