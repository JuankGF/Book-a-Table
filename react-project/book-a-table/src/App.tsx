import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";

import Header from "./components/utils/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Little Lemon</footer>
    </>
  );
}

export default App;
