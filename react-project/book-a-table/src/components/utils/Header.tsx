import React, { useState } from "react";
import { Image } from "react-bootstrap";

import logo from "../../assets/logo.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

type HeaderProps = {
  showAvatar?: boolean;
  userName?: string;
};

export default function Header({ userName, showAvatar = true }: HeaderProps) {
  const { isSmallScreen } = useWindowSize();
  const [showCollapsed, setShowCollapsed] = useState(true);

  const toogleCollapse = () => setShowCollapsed((collapsed) => !collapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toogleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            className="app-logo"
            height={isSmallScreen ? "10vmin" : "8vmin"}
          ></img>
        </Link>
        <div
          className={`collapse navbar-collapse bg-light ${
            !showCollapsed && "show border py-2 mt-1"
          }`}
        >
          <Navbar />
        </div>
        {showCollapsed && (
          <span className="avatar navbar-end">
            <Image
              alt="avatar"
              roundedCircle
              src={`https://api.dicebear.com/5.x/fun-emoji/svg?seed=${
                userName ?? "avatar"
              }`}
              width={`${isSmallScreen ? "30vmin" : "40vmin"}`}
              className="shadow-sm"
            ></Image>
          </span>
        )}
      </div>
    </nav>
  );
}
