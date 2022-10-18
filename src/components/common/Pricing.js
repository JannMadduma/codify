import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Icon, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Sheet } from "@mui/joy";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TuneIcon from "@mui/icons-material/Tune";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

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
          <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
            <IconButton variant="plain">
              <WebAssetIcon />
            </IconButton>
          </Sheet>
          <Typography>text here</Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
            <IconButton variant="plain">
              <EngineeringIcon />
            </IconButton>
          </Sheet>
          <Typography>text here</Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
            <IconButton variant="plain">
              <TuneIcon />
            </IconButton>
          </Sheet>
          <Typography>text here</Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
            <IconButton variant="plain">
              <LoyaltyIcon />
            </IconButton>
          </Sheet>
          <Typography>text here</Typography>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function Pricing() {
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
        </Grid>
      </Box>
    </Box>
  );
}
