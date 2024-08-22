// Browser Routing
// Browser Router is a simple router that uses the browser's URL to store the current route.
// It's useful for client-side routing with a server that supports HTML5 history API.
// Usage: Browser Router uses the HTML5 history API to keep the UI in sync with the URL
// Best for: Single-page applications hosted on servers that support HTML5 history API, like most modern servers.
// Using Browser Router is recommended.
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/registration/Register";
import PublicRoute from "./publicRoutes";
import PrivateRoute from "./privateRoutes";
import Settings from "../pages/settings";
import Counter from "../pages/counter";
import TodoPage from "../pages/todo";
import Loader from "../components/Loader";

// Lazy load the components
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/products"));

const BrowserRoutes = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div
            style={{
              display: "grid",
              placeContent: "center",
              width: "100%",
              height: "100dvh",
            }}
          >
            <Loader />
          </div>
        }
      >
        <Routes>
          {/* Nesting Routing */}
          <Route path="/" element={<PublicRoute />}>
            <Route index path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/todo" element={<TodoPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
export default BrowserRoutes;
