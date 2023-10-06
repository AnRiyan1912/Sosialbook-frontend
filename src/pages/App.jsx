import { Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";
import React from "react";

function App() {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route {...route} key={i} />
      ))}
    </Routes>
  );
}

export default App;
