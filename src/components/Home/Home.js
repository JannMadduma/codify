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
import Team from "./heropage/Team";
import Feedbacks from "../common/Feedbacks";
import ContactUs from "./heropage/ContactUs";

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

//   const stylesdot = {
//     paperContainer: {
//         height: 70,
//         backgroundImage: `url(${"../images/dots.png"})`,
//         width: 200,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         position: 'absolute',
//         marginTop: 5290,
//         marginLeft: 10,
//         transform: 'rotate(90deg)'
//     }
// };
//   const stylesdottwo = {
//     paperContainer: {
//         height: 70,
//         backgroundImage: `url(${"../images/dots.png"})`,
//         width: 200,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         position: 'absolute',
//         marginTop: 5750,
//         marginLeft: 1270,
//         transform: 'rotate(90deg)'
//     }
// };

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
        <goalsObj />
        <Feedbacks />
        <Team />
        <ContactUs />
        <Footer />
      </div>

      {/* <div style={stylesdot.paperContainer}>

              </div>
      <div style={stylesdottwo.paperContainer}>

              </div> */}
    </ThemeProvider>
  );
};

export default Home;
