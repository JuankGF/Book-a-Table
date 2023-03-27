import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";

import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
