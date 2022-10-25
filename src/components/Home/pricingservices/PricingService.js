import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const framework = [
  {
    img: "https://img.icons8.com/dotty/480/000000/google-sites.png",
    title: "Webpages",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/box--v1.png",
    title: "ECommerce",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/hand-cursor.png",
    title: "Shopify",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/uncheck-all.png",
    title: "Prototyping",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/news.png",
    title: "UX Research",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/checked-2.png",
    title: "UI/UX Audit",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/about.png",
    title: "Consultation",
  },
  {
    img: "https://img.icons8.com/wired/512/000000/binoculars.png",
    title: "Design Sprints",
  },
];

export default function PricingService() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          backgroundImage: "url('img/servicesBackground.png')",
          height: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#72bfdbc2",
            height: "100%",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h4"
              variant="h5"
              align="center"
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              SERVICES
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              sx={{
                fontWeight: "bold",
                color: "white",
                fontFamily: "Poppins, sans-serif;",
              }}
            >
              Our Craft
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

            <Grid container spacing={4} pt={4}>
              {/* -----------------CARD 1 ---------------- */}
              {framework.map((item) => (
                <Grid item xs={3} key={item}>
                  <img
                    src={item.img}
                    style={{
                      width: "100%",
                      padding: "0 60px",
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
                        color: "white",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}
