import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useWindowSize } from "../../hooks/useWindowSize";
import Hero from "../utils/Hero";
import ImageCarousel from "../utils/ImageCarousel";
import BookTableForm from "./BookTableForm";

export default function BookTable() {
  const { isMobile } = useWindowSize();
  const navigate = useNavigate();

  return (
    <>
      <Hero
        rest_location="Chicago"
        text="Up to 4 different areas to pick and enjoy. If you need to smoke select a table outside in our beautiful garden. Inside our restaurant you’ll find music and sports in our top screens."
        className="bg-primary section"
        button_variant="secondary"
        text_class="text-white"
        button_label="Online Menu"
        button_action={() => navigate("/menu")}
      >
        {!isMobile && (
          <ImageCarousel
            image_sources={[
              "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
              "https://wallpapercave.com/dwp1x/wp1874157.jpg",
              "https://mitsagroup.com/wp-content/uploads/2021/02/restaurant-3.jpg",
            ]}
          />
        )}
      </Hero>
      <Container className="center-container px-6">
        <h4 className="text-primary text-center">Reserve a Table</h4>
        <BookTableForm />
      </Container>
    </>
  );
}
