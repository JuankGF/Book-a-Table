import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../utils/Hero";

export default function About() {
  return (
    <Hero
      rest_location="Chicago"
      text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
      className="mb-3"
    >
      <Container className="position-relative">
        <img
          src={require("../../assets/Mario and Adrian A.jpg")}
          alt="restaurant-hero-1"
          className="shadow-md rounded-sm on-bottom banner-img"
        />
        <img
          src={require("../../assets/Mario and Adrian b.jpg")}
          alt="restaurant-hero-2"
          className="shadow-md rounded-sm on-top banner-img"
        />
      </Container>
    </Hero>
  );
}
