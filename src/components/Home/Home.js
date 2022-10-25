import React from "react";
import Header from "../common/Header";
import Hero from "./heropage/hero";
import Framework from "./heropage/Framework";
import Technology from "./heropage/Technology";
import Portfolio from "../common/Portfolio";
import Footer from "../common/Footer";
import PricingService from "./pricingservices/PricingService";
import AboutUs from "./about/AboutUs";
import Missionvision from "./about/missionvision";
import Pricing from "./heropage/Pricing";
import FAQ from "./heropage/FAQ";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let themeInit = createTheme({});
const theme = createTheme(themeInit, {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "100px",
          [themeInit.breakpoints.up("lg")]: {
            maxWidth: "1070px",
          },
        },
      },
    },
  },
});

const Home = ({}) => {
  return (
    <ThemeProvider theme={theme}>
      <div id="home" style={{ height: "100%" }}>
        <Header />
        <Hero />
        <Portfolio />
        <PricingService />
        <Pricing />
        <Technology />
        <FAQ />
        <AboutUs />
        <Framework />
        <Missionvision />

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
