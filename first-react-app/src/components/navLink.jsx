/**
 * A navigation component that renders a set of links to different routes.
 *
 * @returns {React.ReactElement} A navigation element with links to home, services, and contact pages.
 *
 * @example
 */

import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
