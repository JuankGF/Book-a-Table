import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/logo.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <Container as="header" className="app-header">
      <Row className="w-100">
        <Col xs={4}>
          <img src={logo} alt="logo" className="app-logo"></img>
        </Col>
        <Col xs={8} as="nav" className="d-flex align-items-center">
          <Navbar />
        </Col>
      </Row>
    </Container>
  );
}
