import "./App.css";
import StickyFooter from "./components/common/Footer";
import ResponsiveAppBar from "./components/common/Header";
import Heropage from "./components/Home/Heropage";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Heropage />
      <StickyFooter />
    </div>
  );
}

export default App;
