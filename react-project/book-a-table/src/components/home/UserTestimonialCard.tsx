import { Card, Col, Image, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

import { Testimonial } from "../utils/data";

export default function UserTestimonialCard({
  author,
  text,
  user,
  rate,
  userImage,
}: Testimonial) {
  return (
    <Card className="shadow-sm h-100 rounded-md">
      <Card.Header className="bg-white border-0 d-flex justify-content-center rounded-md">
        <Rating readonly initialValue={rate} size={18} />
      </Card.Header>
      <Row className="px-3 mt-1 align-items-center">
        <Col xs={4}>
          <Image src={userImage} className="avatar-img-rounded" roundedCircle />
        </Col>
        <Col>
          <Card.Subtitle className="d-grid">
            <b className="text-primary">{author}</b>
            <p className="text-muted">
              <small>{user}</small>
            </p>
          </Card.Subtitle>
        </Col>
      </Row>
      <Card.Body>
        <Card.Text className="text-muted">
          <small>{text}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
