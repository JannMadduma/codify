import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Framework from "./components/Home/heropage/Framework";
import PricingService from "./components/Home/pricingservices/PricingService";

function App() {
  return (
    <div className="App">
      <Header />
      <PricingService />
      <Footer />
    </div>
  );
}

export default App;
