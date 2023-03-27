import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";

type DishCardProps = {
  image: string;
  title: string;
  text: string;
  actionLabel: string;
  actionIcon?: IconDefinition;
};

export default function DishCard({
  image,
  title,
  text,
  actionLabel,
  actionIcon,
}: DishCardProps) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img variant="top" src={image} className="card-image" />
      <Card.Body className="d-grid">
        <Card.Title className="text-primary">{title}</Card.Title>
        <Card.Text className="text-muted">
          <small>{text}</small>
        </Card.Text>
        <Button
          variant="text"
          className="text-primary rounded-sm"
          style={{ placeSelf: "end" }}
        >
          {actionLabel} {actionIcon && <FontAwesomeIcon icon={actionIcon} />}
        </Button>
      </Card.Body>
    </Card>
  );
}
