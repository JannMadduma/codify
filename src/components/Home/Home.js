import React from "react";
import Header from "../common/Header";
import Hero from "./heropage/hero";
import Framework from "./heropage/Framework";
import Technology from "./heropage/Technology";
import Portfolio from "../common/Portfolio";
import Footer from "../common/Footer";
import Pricing from "../common/Pricing";
import Feedbacks from "../common/Feedbacks";
import CallToActions from "./heropage/CallToAction";

const Home = ({}) => {
  return (
    <div>
      <Header />
      <Hero />
      <Framework />
      <Technology />
      <Portfolio />
      <Pricing />
      <Feedbacks />
      <CallToActions />
      <Footer />
    </div>
  );
};

export default Home;
