import React from "react";
import Login from "./pages/Login";
import Registration from "./pages/registration/Register";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const login = true;
  return <AuthProvider>{login ? <Login /> : <Registration />}</AuthProvider>;
}

export default App;
