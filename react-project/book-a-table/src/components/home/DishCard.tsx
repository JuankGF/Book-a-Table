import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row } from "react-bootstrap";

import { Dish } from "../utils/data";

type DishCardProps = {
  actionLabel?: string;
  actionIcon?: IconDefinition;
  layoutHorizontal?: boolean;
  addToCart?: (itemId: string) => void;
} & Dish;

export default function DishCard({
  id,
  image,
  name,
  description,
  actionLabel,
  actionIcon,
  layoutHorizontal,
  price,
  addToCart,
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
              <Card.Title className="text-primary">{name}</Card.Title>
              <Card.Text className="text-muted card-text-chunk">
                <small>{description}</small>
              </Card.Text>
              {price && (
                <div>
                  <small className="text-secondary">
                    <b>${price}</b>
                  </small>
                  {addToCart && (
                    <Button
                      variant="text"
                      className="text-secondary mx-1"
                      onClick={() => addToCart(id)}
                    >
                      Add to cart <FontAwesomeIcon icon={faShoppingCart} />
                    </Button>
                  )}
                </div>
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
            <Card.Title className="text-primary">{name}</Card.Title>
            <Card.Text className="text-muted">
              <small>{description}</small>
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
