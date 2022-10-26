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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const theme = createTheme();

export default function Pricing() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "white",
          pt: 8,
          pb: 6,
        }}
        id="pricing"
      >
        <Container maxWidth="md">
          {/* <Typography
            component="h4"
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif;",
            }}
          >
            THE $
          </Typography> */}
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
            Packages & Pricing
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            We make sure that clients are not intimidated by price.
          </Typography>

          <Grid container spacing={4} pt={4}>
            {/* -----------------CARD 1 ---------------- */}
            <Card sx={{ maxWidth: 200, bgcolor: "#82C8E1 ", m: 1 }}>
              <CardMedia
                component="img"
                alt="PICTURE"
                height="140"
                image="/pricing.jpg"
                sx={{ p: 2 }}
              />
              <CardContent>
                {/* <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  Jann Frauline
                </Typography> */}
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
              </CardContent>
              {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
            </Card>
            {/* -----------------CARD 2----------------- */}
            <Card sx={{ maxWidth: 200, bgcolor: "#82C8E1 ", m: 1 }}>
              <CardMedia
                component="img"
                alt="PICTURE"
                height="140"
                image="/pricing.jpg"
                sx={{ p: 2 }}
              />
              <CardContent>
                {/* <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  Jann Frauline
                </Typography> */}
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
              </CardContent>
              {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
            </Card>
            {/*------------------ Card 3 --------------------*/}
            <Card sx={{ maxWidth: 200, bgcolor: "#82C8E1 ", m: 1 }}>
              <CardMedia
                component="img"
                alt="PICTURE"
                height="140"
                image="/pricing.jpg"
                sx={{ p: 2 }}
              />
              <CardContent>
                {/* <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  Jann Frauline
                </Typography> */}
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
              </CardContent>
              {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
            </Card>
            {/* -------------CARD 4 ------------------- */}
            <Card sx={{ maxWidth: 200, bgcolor: "#82C8E1 ", m: 1 }}>
              <CardMedia
                component="img"
                alt="PICTURE"
                height="140"
                image="/pricing.jpg"
                sx={{ p: 2 }}
              />
              <CardContent>
                {/* <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Poppins, sans-serif;",
                  }}
                >
                  Jann Frauline
                </Typography> */}
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  <CheckCircleIcon /> $ Lorem
                </Typography>
              </CardContent>
              {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
            </Card>
            {/* -------------End------------------- */}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
