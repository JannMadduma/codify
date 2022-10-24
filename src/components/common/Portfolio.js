import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
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
    <div id="portfolio">
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
      <Grid item xs={3}>
        <Item>
          <RechProjects />
        </Item>
      </Grid>
    </div>
  );
}

export default function Portfolio() {
  return (
    <Box style={{ padding: "5%" }}>
      <Box
        sx={{ width: "100%", maxWidth: "100%", padding: "1%" }}
        align="center"
      >
        <Typography variant="h4">text here</Typography>
        <Typography variant="h2">header text goes here</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={5}>
          <Grid container item spacing={5}>
            <FormRow />
          </Grid>
          <Grid container item spacing={5}>
            <FormRow />
          </Grid>
          <Grid container item spacing={5}>
            <FormRow />
          </Grid>
          <Grid container item spacing={5}>
            <FormRow />
          </Grid>
          <Grid container item spacing={5}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
