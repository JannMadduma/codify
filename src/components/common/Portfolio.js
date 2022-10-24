import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import JannProjects from "../Home/portfolio/websites/JannProjects";
import PhillipProjects from "../Home/portfolio/websites/PhillipProjects";
import RechProjects from "../Home/portfolio/websites/RechProjects";
import RusselProjects from "../Home/portfolio/websites/RusselProjects";
import TonProjects from "../Home/portfolio/websites/TonProjects";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Item>
          <JannProjects />
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <PhillipProjects />
        </Item>
      </Grid>
      {/* <Grid item xs={3}>
        <Item>
          <RechProjects />
        </Item>
      </Grid> */}
      <Grid item xs={3}>
        <Item>
          <RusselProjects />
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <TonProjects />
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function Portfolio() {
  return (
    <Container>
      <Box style={{ padding: "5%" }} id="portfolio">
        <Box
          sx={{ width: "100%", maxWidth: "100%", padding: "1%" }}
          align="center"
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif;",
            }}
          >
            OUR WORK
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#82C8E1 ",
              fontFamily: "Poppins, sans-serif;",
            }}
          >
            Our Portfolio
          </Typography>
          <Typography sx={{ mx: "auto", width: 900 }}>
            This is a description of the portfolio. This is a description of the
            portfolio. This is a description of the portfolio. This is a
            description of the portfolio. This is a description of the
            portfolio.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={5}>
            <Grid container item spacing={5}>
              <FormRow />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
