import React from "react";
import Home from "./components/home/Home";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// https://www.robinwieruch.de/react-router-private-routes/
const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

const ComponentRoute = () => {
  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route
        element={<ProtectedRoute isAllowed={loggedIn?.role === "admin"} />}
      >
        <Route path="/manageproperties" element={<ManageProperties />} />
        <Route path="/manageusers" element={<Manageusers />} />
        <Route path="/managesubscribed" element={<ManageSubscribed />} />
      </Route> */}
    </Routes>
  );
};

export default ComponentRoute;
