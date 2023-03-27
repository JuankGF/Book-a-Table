import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { dishList } from "../utils/data";
import DishCard from "./DishCard";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

export default function DishGrid() {
  return (
    <Container className="center-container">
      <Row>
        <Col>
          <h2 className="text-primary">Specials</h2>
        </Col>
        <Col xs={5} md={3} lg={2} className="d-flex justify-content-end">
          <Button className="rounded-sm">Online Menu</Button>
        </Col>
      </Row>
      <Row className="py-3 px-2 g-3">
        {dishList.slice(0, 3).map((dish) => (
          <Col xs={12} sm={6} md={4} key={dish.name}>
            <DishCard
              image={dish.image}
              title={dish.name}
              text={dish.description}
              actionLabel="Order a delivery"
              actionIcon={faMotorcycle}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
