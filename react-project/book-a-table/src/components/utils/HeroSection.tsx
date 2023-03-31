import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "./Hero";
import { useWindowSize } from "../../hooks/useWindowSize";
import ImageCarousel from "./ImageCarousel";

export default function HeroSection() {
  const navigate = useNavigate();
  const { isMobile } = useWindowSize();
  return (
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
  );
}
