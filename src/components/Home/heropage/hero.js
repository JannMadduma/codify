import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider, Grid, ThemeProvider } from "@mui/material";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('img/herobackground.png')",
        height: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffffc2",
          height: "100%",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "center" }}
          >
            <Grid item xs={6}>
              <Box
                sx={{
                  pt: 8,
                  pb: 6,
                }}
              >
                <Box>
                  <Typography
                    component="h3"
                    variant="h3"
                    align="left"
                    color="text.primary"
                    sx={{
                      color: "#353C42",

                      fontWeight: 500,
                    }}
                  >
                    website
                  </Typography>
                  <Typography
                    component="h2"
                    variant="h2"
                    align="left"
                    color="text.primary"
                    gutterBottom
                    sx={{
                      fontSize: "80px",
                      color: "#82C8E1",
                      fontWeight: "bold",
                    }}
                  >
                    DESIGN
                    <br /> & CODES
                  </Typography>
                  <Divider color="#02B4FE" variant="fullWidth" />
                  <br />
                  <Typography
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    paragraph
                  >
                    Allow us in advancing your business and feel a significant
                    change in your business.
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="left"
                  >
                    <Button
                      className="Button"
                      variant="contained"
                      style={{
                        backgroundColor: "#82C8E1",
                        boxShadow: "none",
                      }}
                    >
                      Text Here
                    </Button>
                    <Button
                      className="Button"
                      variant="contained"
                      style={{
                        backgroundColor: "#82C8E1",
                        boxShadow: "none",
                      }}
                    >
                      Text Here
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img style={{ width: "100%" }} src="img/hero.png" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
