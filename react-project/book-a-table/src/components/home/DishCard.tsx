import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";

type DishCardProps = {
  image: string;
  title: string;
  text: string;
  actionLabel: string;
  actionIcon?: IconName;
};

export default function DishCard({
  image,
  title,
  text,
  actionLabel,
  actionIcon,
}: DishCardProps) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="text">
          {actionLabel} {actionIcon && <FontAwesomeIcon icon={actionIcon} />}
        </Button>
      </Card.Body>
    </Card>
  );
}
