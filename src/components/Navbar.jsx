
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Navbar from './Navbar';
import { isLoggedIn, logout } from "../utils/auth";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const handleGoToLogin = () => {
      history.push("/login");
    };
  

    return (
      <div className={classes.root}>
        <AppBar position="static" className="AppbarContainer">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
              {isLoggedIn() && (
              <NavLink  color="inherit" variant="h6" className="nav-link" to="/adminPanel">پنل مدیریت</NavLink>)}
              <NavLink  color="inherit" variant="h6" className="nav-link" to="/home"> صفحه اصلی</NavLink>
              {!isLoggedIn()?
               <NavLink color="inherit" variant="h5" className="nav-link btn2" to="/login">مدیریت</NavLink> : <NavLink color="inherit" variant="h5" className="nav-link btn2" to="/login" onClick={logout}> خروج از پنل مدیریت </NavLink>}
              {/* {!isLoggedIn()?
               <button className="btn btn-danger btn2 m-3"onClick={handleGoToLogin}>مدیریت</button> : <button className="btn btn2 btn-danger m-3" onClick={logout}> خروج از پنل مدیریت </button>} */}
               <NavLink color="inherit" variant="h5" className="nav-link" to="/shop">سبد خرید</NavLink>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }


