import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

export default function ContactUs() {
  return (
    <div
      style={{
        backgroundImage: "url('img/herobackground.png')",
        height: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          height: "100%",
        }}
        id="contactUs"
      >
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "center" }}
          >
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box>
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
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
