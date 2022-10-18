import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Portfolio from "./components/common/Portfolio";
import Hero from "./components/Home/heropage/hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
