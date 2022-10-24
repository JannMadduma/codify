import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function ContactUs() {
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
          id="contactUs"
        >
          <Container maxWidth="md">
            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              CONTACT US
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#82C8E1 ",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Let's Colaborate
            </Typography>
            <Typography
              align="center"
              paragraph
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Need something built for your business?
              <br />
              Talk to us about it.
            </Typography>
            <Stack
              sx={{ pt: 4, mx: 5 }}
              direction="row"
              spacing={5}
              justifyContent="center"
            >
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif;",
                  bgcolor: "#82C8E1 ",
                  px: 3,
                  py: 1,
                  mx: 5,
                }}
              >
                Learn more {">"}
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif;",
                  bgcolor: "#82C8E1 ",
                  px: 3,
                  py: 1,
                  mx: 5,
                }}
              >
                Inquire now
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
