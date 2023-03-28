import React from "react";
import { Link } from "react-router-dom";

type NavbarProps = { className?: string; linkClassName?: string };

export default function Navbar({ className, linkClassName }: NavbarProps) {
  return (
    <ul className={`px-0 list-unstyled ${className ?? "nav-menu"}`}>
      <li>
        <Link className={`app-link ${linkClassName ?? ""}`} to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <a className={`app-link ${linkClassName ?? ""}`} href="#about">
          About
        </a>
      </li>
      <li>
        <Link className={`app-link ${linkClassName ?? ""}`} to={"/menu"}>
          Menu
        </Link>
      </li>
      <li>
        <Link
          className={`app-link ${linkClassName ?? ""}`}
          to={"/reservations"}
        >
          Reservations
        </Link>
      </li>
      <li>
        <Link className={`app-link ${linkClassName ?? ""}`} to={"/login"}>
          Login
        </Link>
      </li>
    </ul>
  );
}
