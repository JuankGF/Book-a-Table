import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container as="header" className="app-header">
      <Row className="w-100">
        <Col xs={4}>
          <img src={logo} alt="logo" className="app-logo"></img>
        </Col>
        <Col xs={8} as="nav" className="d-flex align-items-center">
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
                width="48vmin"
              ></Image>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
