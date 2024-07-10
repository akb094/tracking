import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Tracking from "./components/Tracking";
import Dashboard from "./components/Dashboard"; // Import the LandingPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />{" "}
        {/* Update the default route to LandingPage */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </Router>
  );
};

export default App;
