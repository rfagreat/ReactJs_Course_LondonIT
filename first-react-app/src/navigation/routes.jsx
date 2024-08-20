// Browser Routing
// Browser Router is a simple router that uses the browser's URL to store the current route.
// It's useful for client-side routing with a server that supports HTML5 history API.
// Usage: Browser Router uses the HTML5 history API to keep the UI in sync with the URL
// Best for: Single-page applications hosted on servers that support HTML5 history API, like most modern servers.
// Using Browser Router is recommended.

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/registration/Register";

const BrowserRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
export default BrowserRoutes;
