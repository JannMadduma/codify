import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignInButton from "./components/admin/adminpage/LoginButton";
import Freelancers from "./components/admin/adminpage/sidebars/Freelancers";

function Componentroute() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<SignInButton />} />
      <Route path="/manageadmin" element={<Freelancers />} />
    </Routes>
  );
}

export default Componentroute;
