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

export default function Framework() {
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
              component="h4"
              variant="h5"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              THE FRAMEWORK
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
              Building a Great Product
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 3 }} maxWidth="md">
          <Grid container spacing={4}>
            {/* -----------------CARD 1 ---------------- */}
            <Card sx={{ maxWidth: 250, m: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image="/rightTeam.jpg"
                alt="picture"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: "#82C8E1 ",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  RIGHT TEAM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </Typography>
              </CardContent>
            </Card>
            {/* -----------------CARD 2----------------- */}
            <Card sx={{ maxWidth: 250, m: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image="/rightProccess.jpg"
                alt="picture"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: "#82C8E1 ",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  RIGHT PROCESS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </Typography>
              </CardContent>
            </Card>
            {/*------------------ Card 3 --------------------*/}
            <Card sx={{ maxWidth: 250, m: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image="/rightTech.jpg"
                alt="picture"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: "#82C8E1 ",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  RIGHT TECHNOLOGY
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
