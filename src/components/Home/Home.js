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

const Home = ({}) => {
  return (
    <div id="home" style={{ height: "100%" }}>
      <Header />
      <Hero />
      <Portfolio />
      <PricingService />
      <Framework />
      <Technology />

      {/* ton  */}

      <Feedbacks />
      <Framework />

      {/* russ */}

      <AboutUs />
      <Goals />
      <Missionvision />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
