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
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Text Here</Button>
              <Button variant="outlined">Text Here</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
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
                  image="https://cdn-icons-png.flaticon.com/512/1071/1071928.png"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography gutterBottom variant="h5" component="h2">
                  Website Making
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
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
                  image="https://cdn-icons-png.flaticon.com/512/2674/2674027.png"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography gutterBottom variant="h5" component="h2">
                  Website Maintenance
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
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
                  image="https://cdn-icons-png.flaticon.com/512/6407/6407476.png"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography gutterBottom variant="h5" component="h2">
                  Custom Web Service
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
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
                  image="https://cdn-icons-png.flaticon.com/512/8285/8285958.png"
                  alt="random"
                />
              </Card>
              <Box sx={{ flexGrow: 1, padding: "5%" }} align="center">
                <Typography gutterBottom variant="h5" component="h2">
                  Website For Sale
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}