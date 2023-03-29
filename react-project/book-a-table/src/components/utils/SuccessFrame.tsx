import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";

type FrameProps = {
  message: string;
  icon: IconProp;
  button?: { label: string; className?: string };
};

export default function SuccessFrame({ message, icon, button }: FrameProps) {
  return (
    <Container className="center-container h-100 justify-content-center text-center">
      <Row className="py-3">
        <h3 className="text-primary">Succes!</h3>
      </Row>
      <Row className="py-3">
        <FontAwesomeIcon icon={icon} className="text-primary" size="7x" />
      </Row>
      <Row className="py-3">
        <h5 className="text-primary">{message}</h5>
        <p className="text-muted">Thank you for your business.</p>
      </Row>
      {button && (
        <Row className="py-5">
          <Button className={`rounded-md ${button.className}`}>
            {button.label}
          </Button>
        </Row>
      )}
    </Container>
  );
}
