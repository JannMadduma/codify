import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Link } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Diversity3Icon from "@mui/icons-material/Diversity3";

export const SidebarContents = (
  <React.Fragment>
    <ListItemButton>
      {/* component={Link} to={"/freelancers"} */}
      <ListItemIcon>
        <Diversity3Icon />
      </ListItemIcon>
      <ListItemText primary="Freelancers" />
    </ListItemButton>

    <ListItemButton>
      {/* component={Link} to={"/pendingclients"} */}
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Pending Clients" />
    </ListItemButton>

    <ListItemButton component={Link} to={"/clients"}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItemButton>

    <ListItemButton>
      {/* component={Link} to={"/pendingprojects"} */}
      <ListItemIcon>
        <WorkOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Pending Projects" />
    </ListItemButton>

    <ListItemButton>
      {/* component={Link} to={"/projects"} */}
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItemButton>

    <ListItemButton>
      {/* component={Link} to={"/subscribed"} */}
      <ListItemIcon>
        <MailOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Subscribed" />
    </ListItemButton>
  </React.Fragment>
);
