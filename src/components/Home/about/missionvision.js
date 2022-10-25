import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Missionvision() {
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
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "center" }}
          >
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <img
                  style={{ height: 300, width: 500 }}
                  src="../images/10.png"
                />
              </Box>

              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(50, 180, 235, 0.8)",
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                    marginBottom: 5,
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 5,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                  }}
                >
                  "We want to create a place for business owners who wants to
                  grow their business further into the world of modern market"
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(50, 180, 235, 0.8)",
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                    marginBottom: 5,
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 5,
                    fontFamily: "Poppins, sans-serif;",
                    textAlign: "center",
                  }}
                >
                  "We aim to create a more open, worry free medium for business
                  owners, especially small businesses where they can directly
                  inquire to us and talk about their desired projects where we
                  can help them reach a goal they never expected they could"
                </Typography>
              </Box>

              <Box>
                <img
                  style={{ height: 300, width: 500 }}
                  src="../images/5.png"
                ></img>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
