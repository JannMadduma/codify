import React from "react";
import Header from "../common/Header";
import Hero from "./heropage/hero";
import Framework from "./heropage/Framework";
import Technology from "./heropage/Technology";
import Portfolio from "../common/Portfolio";
import Footer from "../common/Footer";
import Feedbacks from "../common/Feedbacks";
import CallToActions from "./heropage/CallToAction";
import PricingService from "./pricingservices/PricingService";

const Home = ({}) => {
  return (
    <div>
      <Header />
      <Hero />
      <Framework />
      <Technology />
      <Portfolio />
      <PricingService />
      <Feedbacks />
      <CallToActions />
      <Footer />
    </div>
  );
};

export default Home;
