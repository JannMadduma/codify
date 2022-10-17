import { Box } from "@mui/material";
import React from "react";

const Hero = ({}) => {
  return (
    <Box style={{ display: "flex", width: "100%", height: "100%" }}>
      <Box sx={{ bgcolor: "#cfe8fc", width: "50%", height: "100%" }}>text</Box>
      <Box sx={{ bgcolor: "#cfe8fc", width: "50%", height: "100%" }}>
        picture
      </Box>
    </Box>
  );
};

export default Hero;
