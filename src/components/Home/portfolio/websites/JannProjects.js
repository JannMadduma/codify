import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function JannProjects() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "#82C8E1 ",
        padding: "0 15px",
      }}
    >
      <CardMedia height="140" sx={{ p: 1 }} />
      <video autoPlay muted style={{ width: "100%", borderRadius: "5px" }}>
        <source src="vid/estatewindows.mp4" type="video/mp4" />
      </video>
      <CardContent>
        <Typography
          component="div"
          align="left"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif;",
            fontSize: "12px",
            padding: "0px",
          }}
        >
          ESTATE WINDOWS
        </Typography>
        <Typography
          color="text.secondary"
          align="left"
          sx={{
            fontFamily: "Poppins, sans-serif;",
            fontSize: "10px",
            padding: "0px",
          }}
        >
          Web Application
          <br />
          Codify
          <br />1 UL Design 2 Full Stack Web Developers
        </Typography>
      </CardContent>
    </Card>
  );
}
