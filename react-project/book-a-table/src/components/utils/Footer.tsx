import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import logo from "../../assets/logo2.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import Navbar from "./Navbar";

export default function Footer() {
  const { isMobile } = useWindowSize();
  return (
    <footer className="pt-3 px-5 d-flex align-items-center">
      <Row className="g-3 w-100">
        <Col
          xs={5}
          md={4}
          className="position-relative d-flex align-items-center justify-content-center"
        >
          <Image
            src={logo}
            width="100rem"
            className="shadow-sm object-fit-cover"
          />
        </Col>

        <Col>
          <Row className="px-3 g-3 w-100">
            {!isMobile && (
              <Col as="nav">
                <h6 className="text-primary">Navigation</h6>
                <Navbar
                  linkClassName="text-muted text-sm"
                  className="footer-nav"
                />
              </Col>
            )}
            <Col xs={6} md="auto">
              <h6 className="text-primary">Contact</h6>
              <p className="text-muted">
                <small>Address</small>
              </p>
              <p className="text-muted">
                <small>Phone number</small>
              </p>
              <p className="text-muted">
                <small>Email</small>
              </p>
            </Col>
            <Col xs={6} md="auto">
              <h6 className="text-primary">Social Media Links</h6>
              <div className="d-flex w-100 g-3 align-items-center justify-content-between">
                <FontAwesomeIcon
                  icon={faFacebook as IconProp}
                  size="2x"
                  className="text-primary cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faInstagram as IconProp}
                  size="2x"
                  className="text-primary cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faWhatsapp as IconProp}
                  size="2x"
                  className="text-primary cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faTwitter as IconProp}
                  size="2x"
                  className="text-primary cursor-pointer"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
}
