import React from "react";

import About from "./About";
import DishGrid from "./DishGrid";
import Testimonials from "./Testimonials";
import HeroSection from "../utils/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DishGrid />
      <Testimonials />
      <About />
    </>
  );
}
