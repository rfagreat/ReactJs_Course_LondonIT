import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [active, setActive] = useState("Home");

  // import useNavigate from "react-router-dom"
  // const navigate = useNavigate();
  // navigate("/home");

  const menuItems = [
    { name: "Home", icon: "🏠", path: "/" },
    { name: "About", icon: "📊", path: "/about" },
    { name: "Settings", icon: "⚙️", path: "/settings" },
  ];

  return (
    <div className="layout">
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>Logo</h2>
        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={active === item.name ? "active" : ""}
              onClick={() => setActive(item.name)}
            >
              <Link to={item.path} className="sidebar-link">
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
