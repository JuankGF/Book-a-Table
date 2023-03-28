import React, { PropsWithChildren } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

type HeroProps = {
  rest_location: string;
  text: string;
  text_class?: string;
  button_variant?: "primary" | "secondary";
  className?: string;
  id?: string;
  button_label?: string;
  button_action?: () => void;
};

export default function Hero({
  id,
  children,
  className,
  rest_location,
  text_class,
  button_variant = "primary",
  text = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist",
  button_label = "Reserve a Table",
  button_action,
}: PropsWithChildren<HeroProps>) {
  return (
    <Container id={id} className={`hero ${className ?? ""}`}>
      <Row style={{ padding: "2em" }}>
        <Col>
          <h2 className="text-secondary text-shadow-sm">Little Lemon</h2>
          <h4 className={`text-shadow-sm ${text_class}`}>{rest_location}</h4>
          <p className={text_class}>{text}</p>
          <Button
            variant={button_variant}
            className="rounded-sm"
            onClick={button_action}
          >
            {button_label}
          </Button>
        </Col>
        {children && <Col xs={6}>{children}</Col>}
      </Row>
    </Container>
  );
}
