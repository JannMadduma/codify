import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignInButton from "./components/admin/adminpage/LoginButton";
import AboutUs from "./components/Home/about/AboutUs";
import PricingService from "./components/Home/pricingservices/PricingService";
import ContactUs from "./components/Home/heropage/ContactUs";
import { useSelector } from "react-redux";
import PendingClients from "./components/admin/dashboard/mainContents/clientManagement/PendingClients";
import PendingProjects from "./components/admin/dashboard/mainContents/projectManagement/PendingProjects";
import Projects from "./components/admin/dashboard/mainContents/projectManagement/Projects";
import Clients from "./components/admin/dashboard/mainContents/clientManagement/Clients";

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
      {/* Public View       */}
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/portfolio" element={<Home />} />
      <Route path="/pricing" element={<PricingService />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />

      {/* Admin View */}
      {/* <Route path="/admin" element={<SignInButton />} />
      <Route path="/client" element={<Client />} />
      <Route
        element={<ProtectedRoute isAllowed={loggedIn?.role === "admin"} />}
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pendingclients" element={<PendingClients />} /> */}
      <Route path="/admin" element={<SignInButton />} />
      <Route path="/clients" element={<Clients />} />
      {/* <Route path="/pendingprojects" element={<PendingProjects />} />
      <Route path="/projects" element={<Projects />} /> */}
    </Routes>
  );
};

export default ComponentRoute;
