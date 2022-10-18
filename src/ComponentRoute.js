import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function ComponentRoute() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default ComponentRoute;
