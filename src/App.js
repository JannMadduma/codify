import "./App.css";
import Feedbacks from "./components/common/Feedback";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Portfolio from "./components/common/Portfolio";
import Pricing from "./components/common/Pricing";
import Hero from "./components/Home/heropage/hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
