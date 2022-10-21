import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";

const mdTheme = createTheme();

export default function PendingClients() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients);
  const [open, setOpen] = React.useState(true);
  const [client, setClient] = React.useState({});
  const [openView, setOpenView] = React.useState(false);
  // for delete confirm dialog
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleClickOpen = (i) => {
    setError(false);
    setClient(i);
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleOpenView = (i) => {
    setClient(i);
    setOpenView(true);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleEdit = () => {
    setError(false);

    if (
      !client.idNo ||
      !client.name ||
      !client.concerns ||
      !client.contactNo ||
      !client.email ||
      !client.availableTime ||
      !client.validId ||
      !client.payment
    ) {
      setError(true);
    } else {
      if (client.idNo) {
        // "deleteUser" is from service,UserService
        editClients(client.idNo, { ...client, img: [...client.img] }).then(
          (res) => {
            // "deleteUserAction" is from actions, UsersAction
            console.log(res.data.img);
            dispatch(editClientsAction(res.data));
          }
        );
        handleClose();
      } else {
        const clientToAdd = {
          ...client,
          img: client?.img?.length ? client?.img : [],
        };

        addClient(clientToAdd).then((res) => {
          dispatch(addClientAction(res.data));
        });
        handleClose();
      }
    }
  };

  React.useEffect(() => {
    getAllClients().then((res) => {
      dispatch(setClients(res.data));
    });
  }, []);

  // to delete Client
  const handleClientDelete = () => {
    // "deleteClients" is from service, ClientsService
    deleteClient(client.id).then((res) => {
      // "deleteClientsAction" is from actions, ClientsAction
      dispatch(deleteClientAction({ id: client.id }));
    });
    handleCloseConfirmDelete();
  };

  // to avoid deleting right away, added dialog for confirm
  const handleOpenConfirmDelete = (i) => {
    console.log("Confirm detete?");
    setClient(i);
    setOpenConfirm(true);
  };

  const handleCloseConfirmDelete = () => {
    setOpenConfirm(false);
  };

  const handleImgChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setClient({ ...client, img: [reader.result] });
    };
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* main contents design */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "calc(100vh - 70px)",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {/* contents */}
          <Container maxWidth="lg" sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID No.</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Concerns</TableCell>
                        <TableCell>Contact No.</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Available Time</TableCell>
                        <TableCell>Valid ID</TableCell>
                        <TableCell>Payment</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {clients.map((row) => (
                        <TableRow key={row?.idNo}>
                          <TableCell>{row?.idNo}</TableCell>
                          <TableCell>{row?.name}</TableCell>
                          <TableCell>{row?.concerns}</TableCell>
                          <TableCell>{row?.contactNo}</TableCell>
                          <TableCell>{row?.email}</TableCell>
                          <TableCell>{row?.availableTime}</TableCell>
                          <TableCell>{row?.validId}</TableCell>
                          <TableCell>{row?.payment}</TableCell>
                          <TableCell align="right">
                            <div
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                "& > *": {
                                  m: 1,
                                },
                              }}
                            >
                              <ButtonGroup
                                variant="text"
                                aria-label="text button group"
                                color="info"
                              >
                                <Button
                                  onClick={() => {
                                    handleOpenView(row);
                                  }}
                                >
                                  View
                                </Button>
                                <Button
                                  onClick={() => {
                                    handleClickOpen(row);
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  onClick={() => {
                                    handleOpenConfirmDelete(row);
                                  }}
                                >
                                  Delete
                                </Button>
                              </ButtonGroup>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <ViewModal open={openView} setOpen={setOpenView} client={client} />
      <Dialog
        maxWidth="sm"
        fullWidth
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {client.id ? "Edit" : "Add"} Client
        </DialogTitle>
        <DialogContent>
          {error && <Alert severity="error">Please fill-up all fields</Alert>}
          <TextField
            autoFocus
            margin="dense"
            value={client?.name}
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            label="Name"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={client?.concerns}
            type="text"
            fullWidth
            variant="outlined"
            name="concerns"
            label="Concerns"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={client?.contactNo}
            type="text"
            fullWidth
            variant="outlined"
            name="conctactNo"
            label="ContactNO"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={client?.email}
            type="text"
            fullWidth
            variant="outlined"
            name="email"
            label="Email"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={client?.availableTime}
            type="text"
            fullWidth
            variant="outlined"
            name="availableTime"
            label="Available Time"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={client?.validId}
            type="text"
            fullWidth
            variant="outlined"
            name="validId"
            label="Valid Id"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            value={client?.payment}
            type="text"
            fullWidth
            variant="outlined"
            name="payment"
            label="Payment"
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

          {!!client?.img?.length && (
            <img src={client.img[0]} style={{ width: "100%", marginTop: 8 }} />
          )}
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>
      {/* dialog for confirm delete*/}
      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirmDelete}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete <strong>{client?.name}</strong>?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleCloseConfirmDelete}>
            No
          </Button>
          <Button onClick={handleClientDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}