// HashRouter:
// HashRouter is a simple router that uses the URL hash to store the current route.
// It's useful for client-side routing without the need for a server.
//Usage: HashRouter uses the hash portion of the URL (the part after the # symbol) to keep the UI in sync with the URL.
// Best for: Single-page applications hosted on servers where you don't have control over server-side routing, like GitHub Pages.
//Using hash URLs is not recommended.
// Reasons:
// 1. Hash URLs are not bookmarkable.
// 2. Hash URLs are not shareable.
// 3. Hash URLs are not SEO-friendly.
// 4. Hash URLs can cause issues with some browsers and devices.
// 5. Hash URLs can cause issues with some server-side routing libraries (SSR).
// 6. Hash URLs can cause issues with some frameworks and libraries that use the hash URL for other purposes, like Backbone.js.
// 7. Hash URLs can cause issues with some plugins and extensions that use the hash URL for other purposes, like Google Analytics.
// 8. Hash URLs can cause issues with some browsers and devices that don't support the hash.

// Example : The URL will look something like http://example.com/#/about.
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";

export const HashRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
