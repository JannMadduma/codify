import React from "react";
import Header from "../common/Header";
import Hero from "./heropage/hero";
import Framework from "./heropage/Framework";
import Technology from "./heropage/Technology";
import Portfolio from "../common/Portfolio";
import Footer from "../common/Footer";
import Feedbacks from "../common/Feedbacks";
import PricingService from "./pricingservices/PricingService";
import AboutUs from "./about/AboutUs";
import Goals from "./about/goalsObj";
import Missionvision from "./about/missionvision";
import ContactUs from "./heropage/ContactUs";
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
        {/* pricing */}
        <Technology />
        {/* FAQ */}
        <AboutUs />
        <Framework />
        <Missionvision />
        <Goals />
        <Feedbacks />
        {/* core team */}
        <ContactUs />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
