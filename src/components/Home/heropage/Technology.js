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
import { CardContent } from "@mui/material";
import { logRoles } from "@testing-library/react";

const theme = createTheme();
const logos = [
  "https://img.icons8.com/fluency/240/000000/node-js.png",
  "https://img.icons8.com/plasticine/400/000000/react.png",
  "https://img.icons8.com/color/480/000000/javascript--v1.png",
  "https://img.icons8.com/color/480/000000/html-5--v1.png",
  "https://img.icons8.com/color/480/000000/css3.png",
  "https://img.icons8.com/color/480/000000/material-ui.png",
  "https://img.icons8.com/color/480/000000/bootstrap.png",
  "https://img.icons8.com/fluency/96/000000/laravel.png",
  "https://img.icons8.com/officel/480/000000/php-logo.png",
  "https://img.icons8.com/color/480/000000/mysql-logo.png",
  "https://img.icons8.com/ios-glyphs/480/000000/github.png",
  "https://img.icons8.com/cute-clipart/512/000000/canva-app.png",
];

export default function Technology() {
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
            TECH STACK
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
            Our Technologies
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </Typography>

          <Grid container spacing={4} pt={4}>
            {/* -----------------CARD 1 ---------------- */}
            {logos.map((item) => (
              <Grid item xs={2} key={item}>
                <img src={item} style={{ width: "100%" }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
