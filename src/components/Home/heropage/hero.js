import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "Flex",
            margin: "5%",
          }}
          align="center"
        >
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
                align="left"
                color="text.primary"
                gutterBottom
              >
                text here
              </Typography>
              <Typography
                component="h1"
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom
              >
                Header text goes here
              </Typography>
              <Typography
                variant="h5"
                align="left"
                color="text.secondary"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="left"
              >
                <Button variant="contained">Text Here</Button>
                <Button variant="outlined">Text Here</Button>
              </Stack>
            </Container>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              width: "100%",
              padding: "3%",
            }}
          >
            <img src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300" />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
