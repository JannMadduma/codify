import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Container } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { label: "Home", id: "#home" },
  { label: "Portfolio", id: "#portfolio" },
  { label: "Pricing", id: "#pricing" },
  { label: "About Us", id: "#aboutUs" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, textDecorationColor: "#82C8E1" }}>
        codifyph
      </Typography>
      <Divider />
      <List sx={{ textDecorationColor: "#82C8E1", fontWeight: "bold" }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={item.id}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          height: "80px",
          display: "grid",
          alignContent: "center",
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                paddingLeft: "50px",
              }}
            >
              <img
                src="/img/herologo.png"
                style={{ height: "80px", width: "200px" }}
              />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="h3"
                  sx={{ color: "#353C42", fontWeight: "bold" }}
                  href={item.id}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <Button
              className="Button"
              variant="contained"
              style={{ backgroundColor: "#82C8E1", boxShadow: "none" }}
            >
              CONTACT US
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
