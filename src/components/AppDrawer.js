import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DrawerContext } from "../context/DrawerContext";
import styled from "styled-components";
import { Drawer, Hidden } from "@material-ui/core";

const ListContent = styled.div`
  width: 240px;
`;

const AppDrawer = (props) => {
  const { openMobile, setopenMobile } = useContext(DrawerContext);
  const handleDrawerToggle = () => {
    setopenMobile(!openMobile);
  };

  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary" 
          anchor="left"
          open={openMobile}
          onClose={handleDrawerToggle}
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
