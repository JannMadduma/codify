import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Portfolio from "./components/common/Portfolio";
import AboutUs from "./components/Home/about/AboutUs";
import Missionvision from "./components/Home/about/missionvision";
import Hero from "./components/Home/heropage/hero";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Portfolio/>
      <AboutUs/>
      <Missionvision/>
      <Footer/>
    </div>
  );
}

export default App;
