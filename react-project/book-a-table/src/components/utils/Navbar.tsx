import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="nav-menu">
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
      <li className="avatar">
        <Image
          alt="avatar"
          roundedCircle
          src="https://api.dicebear.com/5.x/fun-emoji/svg?seed=avatar"
          width="40vmin"
          className="shadow-sm"
        ></Image>
      </li>
    </ul>
  );
}
