import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { testimonials } from "../utils/data";
import UserTestimonialCard from "./UserTestimonialCard";

export default function Testimonials() {
  return (
    <Container className="center-container bg-secondary_light section">
      <Row className="py-4 text-center">
        <h2 className="text-primary">Testimonials</h2>
      </Row>
      <Row className="g-3 px-3 py-2 pb-4">
        {testimonials.map(({ author, text, rate, user, userImage }) => (
          <Col xs={12} md={3} key={user}>
            <UserTestimonialCard
              author={author}
              text={text}
              user={user}
              userImage={userImage}
              rate={rate}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
