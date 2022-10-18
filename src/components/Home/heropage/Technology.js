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

export default function Technology() {
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
              color="text.primary"
              gutterBottom
            >
              text here
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Header text goes here
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
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: "100%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography gutterBottom variant="h5" component="h2">
                  JavaScript
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: "100%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography gutterBottom variant="h5" component="h2">
                  React
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: "100%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography gutterBottom variant="h5" component="h2">
                  NODEJS
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
