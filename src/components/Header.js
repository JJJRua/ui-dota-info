import React from "react";
import { string } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import {  useDispatch, useSelector } from "react-redux";
import { openDrawerOptAction } from "../actions/ToolbarAction";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuToogleButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - 240px)`,
      marginLeft: 240,
    },
  },
  toolbar: theme.mixins.toolbar,
  homeClass: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const  {title} = useSelector((state)=>state.toolbar)

  const openDrawer = () => {
    dispatch(openDrawerOptAction());
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <NavLink to='/'>
          <IconButton>
            <HomeIcon className={classes.homeClass} />
          </IconButton>
        </NavLink>
        <IconButton
          className={classes.menuToogleButton}
          edge="start"
          color="inherit"
          onClick={openDrawer}
        >
          <MenuIcon />
        </IconButton>
        <h3>{title}</h3>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
