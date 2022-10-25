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
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  footerStyles: {
    color: "white",
    background: "#82C8E1 ",
  },
  linkContainer: {
    display: "flex",
    textAlign: "top",
    flexDirection: "row",
  },
  links: {
    fontFamily: "Poppins, sans-serif;",
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    paddingTop: "1%",
    flex: "25%",
  },
  linksLogo: {
    fontSize: 38,
    fontFamily: "Poppins, sans-serif;",
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    paddingTop: "3%",
    paddingBottom: "0px",
    flex: "25%",
  },
  linksText: {
    fontFamily: "Poppins, sans-serif;",
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    paddingTop: "1%",
    flex: "25%",
  },
  aStyles: {
    fontFamily: "Poppins, sans-serif;",
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    lineHeight: "180%",
  },
  bottom: {
    textAlign: "center",
    padding: "1%",
    color: "black",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footerStyles}>
      <div>
        <h3 className={classes.linksLogo}>codifyph</h3>
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
                sx={{ color: "white" }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="Facebook.com"
                onClick={() => window.open("https://www.Facebook.com")}
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="GitHub.com"
                onClick={() => window.open("https://www.GitHub.com")}
                sx={{ color: "white" }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter.com"
                onClick={() => window.open("https://www.Twitter.com")}
                sx={{ color: "white" }}
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
          <Typography sx={{ color: "black" }}>
            For inquiries,{" "}
            <span>
              <a href="#" className={classes.aStyles}>
                {" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "white",
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
          <Typography sx={{ color: "black" }}>Get our latest update</Typography>

          <Paper>
            <Grid container>
              <Grid item md={8}>
                <Box>
                  <InputBase sx={{ ml: 1 }} placeholder="Your email here" />
                </Box>
              </Grid>
              <Grid item md={4}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ bgcolor: "#82C8E1 " }}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
      <h5 className={classes.bottom}>
        © C O D I F Y P H | C O P Y R I G H T 2 0 2 2
      </h5>
    </footer>
  );
}
