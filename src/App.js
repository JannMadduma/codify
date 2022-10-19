import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ComponentRoute from "./ComponentRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ComponentRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
