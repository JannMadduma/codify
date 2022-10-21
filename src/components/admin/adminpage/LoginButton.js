import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import {
  Avatar,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  Dialog,
  DialogContent,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";

import { setLoggedIn } from "../../../actions/LoggedinActions";
import { loginUser } from "../../../service/UserService";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const userDefaultValue = {
  name: "",
  email: "",
  password: "",
};

export default function SignInButton() {
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [user, setUser] = React.useState(userDefaultValue);
  const [open, setOpen] = React.useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("called handleSubmit");
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  const [error, setError] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!user.email || !user.password) {
      setError("Please fill up necessary fields");
    } else {
      loginUser(user.email, user.password)
        .then((res) => {
          console.log(res);
          if (!res?.data?.length) {
            setError("Incorrect email or password");
          } else {
            dispatch(setLoggedIn(res.data[0]));
            handleDialogClose();
          }
        })
        .catch((err) => {
          setError("Something went wrong. Please try later");
        });
      navigate("/clients");
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box>
          <Typography variant="h1" component="h2">
            CODIFY
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{ width: 200, padding: 1, margin: 2 }}
            onClick={() => {
              handleDialogOpen();
            }}
          >
            Login
          </Button>
          <Typography>Client and Project Management page</Typography>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleDialogClose}>
        <DialogContent>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                </Box>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  {error && <span>{error}</span>}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => onValueChange(e)}
                    autoFocus
                  />
                  <TextField
                    autoFocus
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => onValueChange(e)}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  {/* <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid> */}
                </Box>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          </ThemeProvider>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
