import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.scss";

import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function App() {
  const location = useLocation();
  return (
    <>
      <Header>
        {location.pathname.includes("/menu") && (
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-primary"
            size="lg"
          />
        )}
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
