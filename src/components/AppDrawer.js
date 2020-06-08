import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Drawer, Hidden } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {closeDrawerOptAction} from '../actions/ToolbarAction'
const ListContent = styled.div`
  width: 240px;
  a{
    text-decoration:none;
    color:inherit;
  }
`;

const AppDrawer = (props) => {
  const {open} = useSelector((state) => state.toolbar);
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    dispatch(closeDrawerOptAction());
  };

  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary" 
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={
            {keepMounted:true}
          }
        >
          <ListContent>{props.children}</ListContent>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer variant="permanent" open>
          <ListContent>{props.children}</ListContent>
        </Drawer>
      </Hidden>
    </>
  );
};

AppDrawer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppDrawer;
