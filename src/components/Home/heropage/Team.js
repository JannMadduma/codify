import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CardContent } from "@mui/material";

export default function Team() {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: "100%",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Box align="center">
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
                  THE TEAM
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
                  Meet Our Core Team
                </Typography>
                <Typography variant="h5" align="center" paragraph>
                  Fulfill your business goals under the expert vision of the
                  Codify leadership team.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  alignItems: "center",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Grid
                  item
                  xs={3}
                  sx={{
                    padding: "0 10px",
                  }}
                >
                  <Box>
                    <img
                      style={{ width: "100%", padding: "0 20px" }}
                      src="img/jann.jpg"
                    />
                  </Box>
                  <Box>
                    <Typography
                      component="div"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif;",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      Jann Fraulien Madduma
                    </Typography>
                    <Typography
                      color="text.secondary"
                      align="center"
                      sx={{
                        fontFamily: "Poppins, sans-serif;",
                        fontSize: "10px",
                        padding: "0px",
                      }}
                    >
                      FUllstack Web Developer
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    padding: "0 10px",
                  }}
                >
                  <Box>
                    <img
                      style={{ width: "100%", padding: "0 20px" }}
                      src="img/ton.jpg"
                    />
                  </Box>
                  <Box>
                    <Typography
                      component="div"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif;",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      Jose Anthony Salingua
                    </Typography>
                    <Typography
                      color="text.secondary"
                      align="center"
                      sx={{
                        fontFamily: "Poppins, sans-serif;",
                        fontSize: "10px",
                        padding: "0px",
                      }}
                    >
                      FUllstack Web Developer
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    padding: "0 10px",
                  }}
                >
                  <Box>
                    <img
                      style={{ width: "100%", padding: "0 20px" }}
                      src="img/russe.jpg"
                    />
                  </Box>
                  <Box>
                    <Typography
                      component="div"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif;",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      Russel Jay Buan
                    </Typography>
                    <Typography
                      color="text.secondary"
                      align="center"
                      sx={{
                        fontFamily: "Poppins, sans-serif;",
                        fontSize: "10px",
                        padding: "0px",
                      }}
                    >
                      FUllstack Web Developer
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    padding: "0 10px",
                  }}
                >
                  <Box>
                    <img
                      style={{ width: "100%", padding: "0 20px" }}
                      src="img/phylip.jpg"
                    />
                  </Box>
                  <Box>
                    <Typography
                      component="div"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif;",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      Phyllip Sam Sabayle Salvador
                    </Typography>
                    <Typography
                      color="text.secondary"
                      align="center"
                      sx={{
                        fontFamily: "Poppins, sans-serif;",
                        fontSize: "10px",
                        padding: "0px",
                      }}
                    >
                      FUllstack Web Developer
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
