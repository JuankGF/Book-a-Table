import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import ImageCarousel from "./ImageCarousel";

type HeroProps = {
  image_sources: string[];
  rest_location: string;
  text: string;
};

export default function Hero({
  image_sources,
  rest_location,
  text = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist",
}: HeroProps) {
  return (
    <Container className="hero" fluid>
      <Row style={{ margin: "4em" }}>
        <Col xs={6}>
          <h2>Little Lemon</h2>
          <h3>{rest_location}</h3>
          <p>{text}</p>
        </Col>
        <Col md="auto">
          <ImageCarousel image_sources={image_sources}></ImageCarousel>
        </Col>
      </Row>
      <Row style={{ margin: "4em" }}>
        <Button>Reserve a Table</Button>
      </Row>
    </Container>
  );
}
