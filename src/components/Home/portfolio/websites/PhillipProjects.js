import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PhillipProjects() {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: "#82C8E1 " }}>
      <CardMedia
        component="img"
        alt="PICTURE"
        height="140"
        image="/logo192.png"
        sx={{ p: 2 }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="left"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif;",
          }}
        >
          Phillip
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          Web Application
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          Codify
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          1 UL Design 2 Full Stack Web Developers
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          2 Days
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
