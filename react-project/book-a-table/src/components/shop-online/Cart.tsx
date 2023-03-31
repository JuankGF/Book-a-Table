import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { findDish } from "../utils/data";

export default function Cart() {
  const orders = useContext(CartContext);
  return (
    <Container className="px-5">
      <section>
        <h5>Delivery details</h5>
        <hr />
      </section>
      <section>
        <h5>Add more to your order</h5>
        <hr />
      </section>
      <section>
        <h5>Order Summary</h5>
        <Row className="px-3 py-1 bg-slate">Items</Row>
        {orders?.cartItems.map((order) => {
          const dish = findDish(order.dishId);
          return (
            <Row
              key={`${order.dishId}-${order.customerId}`}
              className="text-md"
            >
              <Col xs={8} lg={10}>
                <h6>
                  {order.qty} x {dish?.name}
                </h6>
              </Col>
              <Col xs={4} lg={2}>
                <b>${dish?.price}</b>
              </Col>

              {order.adds?.map((add) => (
                <Row key={add.name} className="text-sm text-muted">
                  Adds
                  <Col xs={8} lg={10}>
                    <p>{add.name}</p>
                  </Col>
                  <Col xs={4} lg={2}>
                    <p>${add.price}</p>
                  </Col>
                </Row>
              ))}
            </Row>
          );
        })}
        <hr />
        <Row className="text-sm text-muted">
          <Col xs={8} lg={10}>
            Subtotal
          </Col>
          <Col>$Orders-price-sum</Col>
        </Row>
        <Row className="text-sm text-muted">
          <Col xs={8} lg={10}>
            Delivery
          </Col>
          <Col>$8</Col>
        </Row>
        <Row>
          <Col xs={8} lg={10}>
            <b>Total</b>
          </Col>
          <Col>
            <b>$Orders-price-sum + delivery</b>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
