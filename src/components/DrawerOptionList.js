import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import styled from 'styled-components'
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const options = [
  { icon: <InboxIcon />, label: "Heroes" },
  { icon: <MailIcon />, label: "Teams" },
];

const ImageBanner = styled.img`
        width: 6rem;        
        height:6rem;
        margin: 1rem auto;
        display:block;
        border-radius:100%;
`;


const DrawerOptionList = () => {
  return (
    <>
        <ImageBanner src='/peru-flag.jpg'/>
      <List>
        {options.map((option) => (
          <ListItem button key={option.label}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText>{option.label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerOptionList;
