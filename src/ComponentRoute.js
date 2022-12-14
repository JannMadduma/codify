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
import Freelancers from "./components/admin/dashboard/mainContents/others/Freelancers";
import Subscribed from "./components/admin/dashboard/mainContents/others/Subscribed";

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

      {/* Admin View */}
      {/* <Route path="/admin" element={<SignInButton />} />
      <Route path="/client" element={<Client />} />
      <Route
        element={<ProtectedRoute isAllowed={loggedIn?.role === "admin"} />}
      >
        <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/admin" element={<SignInButton />} />
      <Route path="/pendingclients" element={<PendingClients />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/pendingprojects" element={<PendingProjects />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/freelancers" element={<Freelancers />} />
      <Route path="/subscribed" element={<Subscribed />} />
    </Routes>
  );
};

export default ComponentRoute;
