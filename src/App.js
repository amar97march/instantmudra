import React from "react";
import "./css/App.css";
import "css-pro-layout/dist/css/css-pro-layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Homepage";
import Login from "./components/UserLogin/Signin";
import ForgetPassword from "./components/UserLogin/ForgetPassword";
import DefaultLayout from "./components/layout/default";
import Dashboard from "./components/dashboard/Dashboard";
import Recharge from "./components/recharge/Recharge";
import WalletReport from "./components/reports/WalletReport";
import CMSReport from "./components/reports/CMSReport";

/**
 * App initial level with routes defined
 * @returns
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/forget-password" element={<ForgetPassword />} exact />
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recharge" element={<Recharge />} />
            <Route path="/reports-wallet" element={<WalletReport />} />
            <Route path="/reports-cms" element={<CMSReport />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
