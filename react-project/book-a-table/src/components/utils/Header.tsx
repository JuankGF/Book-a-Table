import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import logo from "../../assets/logo.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import Navbar from "./Navbar";

type HeaderProps = {
  showAvatar?: boolean;
  userName?: string;
};

export default function Header({ userName, showAvatar = true }: HeaderProps) {
  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.width! <= 720;

  return (
    <Container as="header" className="app-header">
      <Row className="w-100">
        {isSmallScreen && (
          <Col xs={4}>
            <FontAwesomeIcon icon={faBars} />
          </Col>
        )}
        <Col xs={4}>
          <img src={logo} alt="logo" className="app-logo"></img>
        </Col>

        <Col
          xs={4}
          sm={8}
          as="nav"
          className="d-flex align-items-center justify-content-end"
        >
          {!isSmallScreen && <Navbar />}
          <span className="avatar">
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
        </Col>
      </Row>
    </Container>
  );
}
