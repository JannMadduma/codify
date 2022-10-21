import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ComponentRoute from "./ComponentRoute";
import { Provider } from "react-redux";
import ConfigureStore from "./store/ConfigureStore";

const store = ConfigureStore();

function app() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ComponentRoute />
      </BrowserRouter>
    </Provider>
  );
}

export default app;
