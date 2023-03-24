import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="nav-menu px-0">
      <li>
        <Link className="app-link" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="app-link" to={"/about"}>
          About
        </Link>
      </li>
      <li>
        <Link className="app-link" to={"/menu"}>
          Menu
        </Link>
      </li>
      <li>
        <Link className="app-link" to={"/reservations"}>
          Reservations
        </Link>
      </li>
      <li>
        <Link className="app-link" to={"/login"}>
          Login
        </Link>
      </li>
    </ul>
  );
}
