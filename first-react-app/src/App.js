import React from "react";
import { HashRouter } from "./navigation";
import { AuthProvider } from "./context/AuthContext";
import BrowserRoutes from "./navigation/routes";
// React Routing
//To install the react-routing-dom user  npm install react-router-dom
//https://reactrouter.com/en/main/start/tutorial
// Routing Types:
// 1. HashRouter
// 2. BrowserRouter

function App() {
  const isHash = false;
  return (
    <AuthProvider>{isHash ? <HashRouter /> : <BrowserRoutes />}</AuthProvider>
  );
}

export default App;
