import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import styled from "styled-components";
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import {  NavLink } from "react-router-dom";

const options = [
  { icon: <InboxIcon />, label: "Heroes", navigation: "/heroes" },
  { icon: <MailIcon />, label: "Teams", navigation: "/teams" },
];

const ImageBanner = styled.img`
  width: 6rem;
  height: 6rem;
  margin: 1rem auto;
  display: block;
  border-radius: 100%;
`;

const DrawerOptionList = () => {
  return (
    <>
      <ImageBanner src="/peru-flag.jpg" />
      <Divider/>
      <List>
        {options.map((option) => (
          <NavLink key={option.label} to={option.navigation}  activeClassName='selected-link'
        strict>
            <ListItem button>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText>{option.label}</ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  );
};

export default DrawerOptionList;
