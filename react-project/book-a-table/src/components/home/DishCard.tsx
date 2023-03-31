import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

type DishCardProps = {
  image: string;
  title: string;
  text: string;
  actionLabel?: string;
  actionIcon?: IconDefinition;
  layoutHorizontal?: boolean;
  price?: number;
};

export default function DishCard({
  image,
  title,
  text,
  actionLabel,
  actionIcon,
  layoutHorizontal,
  price,
}: DishCardProps) {
  return (
    <Card className="shadow-sm h-100">
      {!layoutHorizontal && (
        <Card.Img variant="top" src={image} className="card-image" />
      )}
      <Card.Body
        as={layoutHorizontal ? Row : undefined}
        className={{ "d-grid": !layoutHorizontal }}
      >
        {layoutHorizontal ? (
          <>
            <Col xs={6} md={7} lg={8} xl={9}>
              <Card.Title className="text-primary">{title}</Card.Title>
              <Card.Text className="text-muted card-text-chunk">
                <small>{text}</small>
              </Card.Text>
              {price && (
                <small className="text-secondary">
                  <b>${price}</b>
                </small>
              )}
            </Col>

            <Col xs={6} md={5} lg={4} xl={3} className="overflow-hidden">
              <Card.Img
                variant="right"
                src={image}
                className="rounded-sm w-100"
              />
            </Col>
          </>
        ) : (
          <>
            <Card.Title className="text-primary">{title}</Card.Title>
            <Card.Text className="text-muted">
              <small>{text}</small>
            </Card.Text>
            {price && (
              <small className="text-secondary">
                <b>${price}</b>
              </small>
            )}
            {actionLabel && actionIcon && (
              <Button
                variant="text"
                className="text-primary rounded-sm"
                style={{ placeSelf: "end" }}
              >
                {actionLabel}{" "}
                {actionIcon && <FontAwesomeIcon icon={actionIcon} />}
              </Button>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}
