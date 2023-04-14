import React, { useContext, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";

import HeroSection from "../utils/HeroSection";
import { dishList } from "../utils/data";
import DishCard from "../home/DishCard";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const filters = ["lunch", "mains", "desserts", "specials", "salads"];
const hasCategory = (filters: string[], itemCategories: string[]) => {
  let hasCategory = false;
  for (let index = 0; index < itemCategories.length && !hasCategory; index++) {
    const category = itemCategories[index];
    hasCategory = filters.includes(category);
  }
  return hasCategory;
};

export default function Menu() {
  const cart = useContext(CartContext);
  const userCtx = useContext(UserContext);
  const [activeFilters, setActiveFilters] = useState([] as string[]);

  const toogleFilter = (newFilter: string) => {
    const filters = [...activeFilters];
    const filterIndex = filters.indexOf(newFilter);
    if (filterIndex !== -1) filters.splice(filterIndex, 1);
    else filters.push(newFilter);
    setActiveFilters(filters);
  };

  return (
    <Container className="hero section">
      <Row>
        <HeroSection />
      </Row>
      <Row className="mt-3">
        <h4 className="text-primary">Order for Delivery</h4>
        <div className="d-inline-flex my-3 gx-3 w-100 overflow-auto">
          {filters.map((f) => (
            <Badge
              bg={activeFilters.includes(f) ? "primary" : "secondary"}
              className="rounded-md cursor-pointer mx-2"
              key={f}
              onClick={() => toogleFilter(f)}
            >
              {f.toUpperCase()}
            </Badge>
          ))}
        </div>
        <h6 className="text-muted text-center text-sm">
          Select one of the dishes above and you are on your way to success!{" "}
        </h6>
      </Row>
      <Row className="mt-3 border-top mx-5 py-2 g-3 pb-5">
        {dishList.map((dish) => {
          const shouldRender =
            activeFilters.length === 0 ||
            hasCategory(activeFilters, dish?.categories ?? []);
          return (
            shouldRender && (
              <Col xs={12} sm={6} lg={4} key={dish.name}>
                <DishCard
                  id={dish.id}
                  image={dish.image}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                  layoutHorizontal
                  addToCart={() =>
                    cart?.addToCart({
                      customerId: userCtx.userId,
                      dishId: dish.id,
                      qty: 1,
                      price: 0,
                    })
                  }
                />
              </Col>
            )
          );
        })}
      </Row>
    </Container>
  );
}
