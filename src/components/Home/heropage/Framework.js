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

const framework = [
  {
    img: "https://img.icons8.com/windows/512/000000/dev.png",
    title: "RIGHT TEAM",
    description:
      "We offer various website projects for you! We're just one contact away!",
  },
  {
    img: "https://img.icons8.com/ios/100/000000/process.png",
    title: "RIGHT PROCESS",
    description:
      "We offer various website projects for you! We're just one contact away!",
  },
  {
    img: "https://img.icons8.com/ios/500/000000/ableton.png",
    title: "RIGHT TECHNOLOGY",
    description:
      "We offer various website projects for you! We're just one contact away!",
  },
];

export default function Framework() {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </Typography>

          <Grid container spacing={4} pt={4}>
            {/* -----------------CARD 1 ---------------- */}
            {framework.map((item) => (
              <Grid item xs={4} key={item}>
                <img
                  src={item.img}
                  style={{
                    width: "100%",
                    padding: "0 80px",
                  }}
                />
                <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                  <Typography
                    variant="h6"
                    key={item}
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 2,
                      fontFamily: "Poppins, sans-serif;",
                      textAlign: "center",
                      color: "rgba(50, 180, 235, 0.8)",
                    }}
                  >
                    {item.title}
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
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
