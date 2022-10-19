import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignInButton from "./components/admin/loginpage/LoginButton";
import SignIn from "./components/admin/adminpage/AdminPage";

function ComponentRoute() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<SignIn />} />
    </Routes>
  );
}

export default ComponentRoute;
