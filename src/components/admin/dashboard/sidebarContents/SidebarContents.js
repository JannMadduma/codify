import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@mui/icons-material/Group";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Link } from "react-router-dom";

export const SidebarContents = (
  <React.Fragment>
    {/* <ListItemButton component={Link} to={"/freelancers"}>
      <ListItemIcon>
        <NightShelterIcon />
      </ListItemIcon>
      <ListItemText primary="Freelancers" />
    </ListItemButton>

    <ListItemButton component={Link} to={"/pendingclients"}>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Pending Clients" />
    </ListItemButton> */}

    <ListItemButton component={Link} to={"/clients"}>
      <ListItemIcon>
        <MarkEmailReadIcon />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItemButton>

    {/* <ListItemButton component={Link} to={"/pendingprojects"}>
      <ListItemIcon>
        <MarkEmailReadIcon />
      </ListItemIcon>
      <ListItemText primary="Pending Projects" />
    </ListItemButton>

    <ListItemButton component={Link} to={"/projects"}>
      <ListItemIcon>
        <MarkEmailReadIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItemButton>

    <ListItemButton component={Link} to={"/subscribed"}>
      <ListItemIcon>
        <MarkEmailReadIcon />
      </ListItemIcon>
      <ListItemText primary="Subscribed" />
    </ListItemButton> */}
  </React.Fragment>
);
