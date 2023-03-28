import React from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import Hero from "../utils/Hero";
import ImageCarousel from "../utils/ImageCarousel";

import About from "./About";
import DishGrid from "./DishGrid";
import Testimonials from "./Testimonials";

export default function Home() {
  const { isMobile } = useWindowSize();
  const navigate = useNavigate();

  return (
    <>
      <Hero
        rest_location="Chicago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        className="bg-primary section"
        button_variant="secondary"
        text_class="text-white"
        button_action={() => navigate("/reservations")}
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
      <DishGrid />
      <Testimonials />
      <About />
    </>
  );
}
