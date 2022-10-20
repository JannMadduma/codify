import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SidebarDesign from "./sidebarContents/SidebarDesign";
import Header from "../../common/Header";

const mdTheme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Header />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SidebarDesign />
        <MainContents />
      </Box>
    </ThemeProvider>
  );
}
