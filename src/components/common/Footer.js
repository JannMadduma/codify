import React from "react";
import { makeStyles } from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

import {
  Box,
  Button,
  Grid,
  IconButton,
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
          <Box>
            <Typography>
              <IconButton
                aria-label="Linkedin.com"
                onClick={() => window.open("https://www.Linkedin.com")}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="Facebook.com"
                onClick={() => window.open("https://www.Facebook.com")}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="GitHub.com"
                onClick={() => window.open("https://www.GitHub.com")}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter.com"
                onClick={() => window.open("https://www.Twitter.com")}
              >
                <TwitterIcon />
              </IconButton>
            </Typography>
          </Box>
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

          <Paper>
            <Grid container>
              <Grid item md={8}>
                <Box>
                  <InputBase sx={{ ml: 1 }} placeholder="Your email here" />
                </Box>
              </Grid>
              {/* <Grid item md={4}>
                <Button size="small" variant="contained">
                  Subscribe
                </Button>
              </Grid> */}
            </Grid>
          </Paper>
        </div>
      </div>
      <h5 className={classes.bottom}>© CODIFYPH | COPYRIGHT 2022</h5>
    </footer>
  );
}
