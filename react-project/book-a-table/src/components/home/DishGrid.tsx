import React from "react";
import { Button, Container, Row } from "react-bootstrap";

export default function DishGrid() {
  return (
    <Container className="center-container">
      <Row>
        <h2>Specials</h2>
        <Button>Online Menu</Button>
      </Row>
      <Row></Row>
    </Container>
  );
}
