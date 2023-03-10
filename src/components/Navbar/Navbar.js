import React, {useState, useEffect} from "react";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";
import memories from "../../images/memories.png";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";



const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user,"userNavbar")

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  },[location])

  const logout = () => {
    dispatch({type : "LOGOUT"});
    history.push("/");
    setUser(null)
  } 

  return (
    <AppBar className = {classes.appBar} position="static" color="inherit">
      <div className = {classes.brandContainer}>
        <Typography component = { Link } to="/" className = {classes.heading} variant = "h2" align = "center" > Memories </Typography>
        <img className = {classes.img} src = {memories} alt="icon" height="60" />
      </div>
      <Toolbar className = {classes.toolBar}>
        {user ? (
            <div className={classes.profile}>
                {/* <Avatar className = {classes.avatar} alt ={user.result.displayName} src = {user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className = {classes.userName} variant='h6'>{user.result.name}</Typography> */}
                <Button variant = 'contained' className={classes.logout} color = 'secondary' onClick={logout}>Log Out</Button>
            </div>
        ):(
            <Button component = {Link} to = '/auth' variant = "contained" color = 'primary'>Sign up</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
