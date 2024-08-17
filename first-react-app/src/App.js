import React from "react";
import Login from "./pages/Login";
import Registration from "./pages/registration/Register";

function App() {
  const login = false;
  return <>{login ? <Login /> : <Registration />}</>;
}

export default App;
