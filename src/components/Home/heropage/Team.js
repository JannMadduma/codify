import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardContent } from "@mui/material";

const theme = createTheme();

export default function Team() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "white",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h4"
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif;",
            }}
          >
            THE TEAM
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#82C8E1 ",
              fontFamily: "Poppins, sans-serif;",
            }}
          >
            Meet Our Core Team
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Fulfill your business goals under the expert vision of the Codify
            leadership team.
          </Typography>

          <Grid container spacing={4} pt={4}>
            {/* -----------------CARD 1 ---------------- */}
            <Grid item xs={4}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/277664830_2514326755367940_1875065307151593323_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Kbp0xG5g3fIAX8smr6v&tn=9hTqE7u-xKtJqpnP&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT_OIgPwlXh796yDyIRk27vHOF3w7SIrc_lWk5xJzfiZPw&oe=635B61BE"
                  alt="picture"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    Jann Fraulien
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    CEO
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* -----------------CARD 2----------------- */}
            <Grid item xs={4}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://media-exp1.licdn.com/dms/image/C5603AQElRzHRl-sGEA/profile-displayphoto-shrink_800_800/0/1645611239218?e=2147483647&v=beta&t=kn5p-eXP3efh13mHExEvu1vufOj9l7pVSUoPMkdn_3c"
                  alt="picture"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    Russel Moon
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    Full Stack Web Developer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/*------------------ Card 3 --------------------*/}
            <Grid item xs={4}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/118512564_3263182900384918_3264820870651103806_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=VVO2sno6wBEAX9M8Ckk&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT8cl4ZtnMF31z-BxvAG0vhndQuLsMo8t6PUP0cYfprZww&oe=637BA2A3"
                  alt="picture"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    Ton Salingua
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif;",
                    }}
                  >
                    Full Stack Web Developer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
