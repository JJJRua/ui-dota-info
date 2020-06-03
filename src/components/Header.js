import React, { useContext } from "react";
import { string } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { DrawerContext } from "../context/DrawerContext";

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
}));

const Header = ({ title }) => {
  const classes = useStyles();
  const { setopenMobile } = useContext(DrawerContext);
  

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.menuToogleButton}
          edge="start"
          color="inherit"
          onClick={()=>{
            setopenMobile(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        {title}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
