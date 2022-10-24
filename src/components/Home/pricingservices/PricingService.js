import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function PricingService() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
                textAlign: "center",
              }}
            >
              Provision is the key.
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "rgba(50, 180, 235, 0.8)",
                fontFamily: "Poppins, sans-serif;",
                textAlign: "center",
                marginBottom: 5,
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "medium",
                marginBottom: 5,
                fontFamily: "Poppins, sans-serif;",
                textAlign: "center",
              }}
            >
              Below are the services we provide for our clients.
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Text Here</Button>
              <Button variant="outlined">Text Here</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 7 }} maxWidth="md">
          <Grid container spacing={12}>
            <Grid container spacing={5} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 0,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: "100%",
                  }}
                  image="https://cdn-icons-png.flaticon.com/512/1071/1071928.png"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                    color: "rgba(50, 180, 235, 0.8)",
                  }}
                >
                  Website Making
                </Typography>
                <Typography
                  variant="h7"
                  sx={{
                    fontWeight: "medium",
                    marginBottom: 2,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                  }}
                >
                  We offer various website projects for you! We're just one
                  contact away!
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={5} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 0,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: "100%",
                  }}
                  image="https://cdn-icons-png.flaticon.com/512/2674/2674027.png"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                    color: "rgba(50, 180, 235, 0.8)",
                  }}
                >
                  Website Maintenance
                </Typography>
                <Typography
                  variant="h7"
                  sx={{
                    fontWeight: "medium",
                    marginBottom: 2,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                  }}
                >
                  Want us to continue with the service for your website? Sure!
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={5} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 0,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: "100%",
                  }}
                  image="https://cdn-icons-png.flaticon.com/512/6407/6407476.png"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                    color: "rgba(50, 180, 235, 0.8)",
                  }}
                >
                  Custom Web Service
                </Typography>
                <Typography
                  variant="h7"
                  sx={{
                    fontWeight: "medium",
                    marginBottom: 2,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                  }}
                >
                  You want a custom Web Service but don't know where to seek
                  help? We got you here at Codify!
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={5} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 0,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: "100%",
                  }}
                  image="https://cdn-icons-png.flaticon.com/512/8285/8285958.png"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                    color: "rgba(50, 180, 235, 0.8)",
                  }}
                >
                  Website For Sale
                </Typography>
                <Typography
                  variant="h7"
                  sx={{
                    fontWeight: "medium",
                    marginBottom: 2,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                  }}
                >
                  Want to sell your website? We're more than happy to be of
                  service here at Codify!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
