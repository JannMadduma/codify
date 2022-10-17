import React from "react";
import { makeStyles } from "@material-ui/core";

import {
  Box,
  Button,
  Grid,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  footerStyles: {
    color: "white",
    background: "#2160A0",
  },
  linkContainer: {
    display: "flex",
    textAlign: "top",
    flexDirection: "row",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    paddingTop: "1%",
    flex: "25%",
  },
  linksLogo: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    paddingTop: "3%",
    paddingBottom: "0px",
    flex: "25%",
  },
  linksText: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    paddingTop: "1%",
    flex: "25%",
  },
  aStyles: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    lineHeight: "180%",
  },
  bottom: {
    textAlign: "center",
    padding: "1%",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footerStyles}>
      <div>
        <h3 className={classes.linksLogo}>LOGO</h3>
      </div>
      <div className={classes.linkContainer}>
        <div className={classes.links}>
          <a href="#" className={classes.aStyles}>
            About Us
          </a>
          <a href="#" className={classes.aStyles}>
            Our Story
          </a>
          <a href="#" className={classes.aStyles}>
            Our Tech
          </a>
          <a href="#" className={classes.aStyles}>
            Our Projects
          </a>
        </div>
        <div className={classes.links}>
          <a href="#" className={classes.aStyles}>
            Admin Log in
          </a>
          <a href="#" className={classes.aStyles}>
            FAQs
          </a>
          <a href="#" className={classes.aStyles}>
            Contact Us
          </a>
        </div>
        <div className={classes.linksText}>
          <Typography>
            For inquiries,{" "}
            <span>
              <a href="#" className={classes.aStyles}>
                {" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  send us an email
                </Typography>
              </a>
            </span>{" "}
            and we are more than happy to assist you
          </Typography>
        </div>
        <div className={classes.links}>
          <Typography>Get our latest update</Typography>

          <Paper
            sx={{
              position: "relative",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "white",
              textAlign: "center",
            }}
          >
            <Grid container>
              <Grid item md={6}>
                <Box>
                  <InputBase sx={{ ml: 1 }} placeholder="Your email here" />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box>
                  <Button size="small" variant="contained">
                    Subscribe
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
      <h5 className={classes.bottom}>Anywhere Fitness, a TT44 Company</h5>
    </footer>
  );
}
