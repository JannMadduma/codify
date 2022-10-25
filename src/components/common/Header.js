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
import {
  Alert,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addClients,
  editClients,
  getAllClients,
} from "../../service/ClientService";
import {
  addClientAction,
  editClientAction,
  setClients,
} from "../../actions/ClientActions";

const drawerWidth = 240;
const navItems = [
  { label: "Home", id: "#home" },
  { label: "Portfolio", id: "#portfolio" },
  { label: "Pricing", id: "#pricing" },
  { label: "About Us", id: "#aboutUs" },
];

function Header(props) {
  const { window, isPending } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients);
  const [clientDetails, setClientDetails] = React.useState({});
  const [editOpen, setEditOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleInputChange = (e) => {
    setClientDetails({ ...clientDetails, [e.target.name]: e.target.value });
  };

  const handleClickOpen = (i) => {
    console.log(i);
    setError(false);
    setClientDetails(i);
    setEditOpen(true);
  };

  const handleImgChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setClientDetails({ ...clientDetails, validId: reader.result });
    };
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleEdit = () => {
    setError(false);

    if (
      !clientDetails.name ||
      !clientDetails.concerns ||
      !clientDetails.contactNo ||
      !clientDetails.email ||
      !clientDetails.availableTime ||
      !clientDetails.validId ||
      !clientDetails.status
    ) {
      setError(true);
    } else {
      if (clientDetails.idNo) {
        const editedClientDetails = {
          ...clientDetails,
          validId: clientDetails.validId,
        };

        delete editedClientDetails.id;
        delete editedClientDetails.created_at;
        delete editedClientDetails.updated_at;

        editClients(clientDetails.idNo, editedClientDetails).then((res) => {
          dispatch(
            editClientAction({ ...res.data.client, idNo: clientDetails.idNo })
          );
        });
        handleClose();
      } else {
        const clientToAdd = {
          ...clientDetails,
          isPending: 1,
          validId: clientDetails?.validId?.length ? clientDetails?.validId : [],
        };

        addClients(clientToAdd).then((res) => {
          dispatch(addClientAction(res.data.client));
        });
        handleClose();
      }
    }
  };

  React.useEffect(() => {
    getAllClients().then((res) => {
      const toFilter = isPending ? 1 : 0;
      dispatch(
        setClients(res.data.clients.filter((c) => c.isPending === toFilter))
      );
    });
  }, []);

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
    <div>
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
                  // paddingLeft: "50px",
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
                onClick={() => handleClickOpen({})}
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
      <Dialog
        maxWidth="sm"
        fullWidth
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Contact Us
        </DialogTitle>
        <DialogContent>
          {error && <Alert severity="error">Please fill-up all fields</Alert>}
          <TextField
            autoFocus
            margin="dense"
            value={clientDetails?.name}
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            label="Name"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.concerns}
            type="text"
            fullWidth
            variant="outlined"
            name="concerns"
            label="Concerns"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.contactNo}
            type="text"
            fullWidth
            variant="outlined"
            name="contactNo"
            label="Contact No"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.email}
            type="text"
            fullWidth
            variant="outlined"
            name="email"
            label="Email"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.availableTime}
            type="datetime-local"
            fullWidth
            variant="outlined"
            name="availableTime"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={clientDetails?.status}
            type="text"
            fullWidth
            variant="outlined"
            name="status"
            label="Status"
            onChange={handleInputChange}
          />
          <Button component="label" variant="outlined" sx={{ mt: 1 }}>
            Upload ID
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImgChange}
            />
          </Button>

          {!!clientDetails?.validId && (
            <img
              src={clientDetails.validId}
              style={{ width: "100%", marginTop: 8 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Header;
