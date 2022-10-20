import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ComponentRoute from "./ComponentRoute";
import { Provider } from "react-redux";
import ConfigureStore from "./store/ConfigureStore";
import Clients from "./components/admin/dashboard/mainContents/clientManagement/Clients";

const store = ConfigureStore();

function app() {
  return (
    <Provider store={store}>
      <Clients />
    </Provider>
    // <Provider store={store}>
    //   <div className="App">
    //     <BrowserRouter>
    //       <ComponentRoute />
    //     </BrowserRouter>
    //   </div>
    // </Provider>
  );
}

export default app;
