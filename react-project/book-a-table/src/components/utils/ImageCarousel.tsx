import React from "react";
import {
  Carousel,
  CarouselProps as CarouselOriginalProps,
} from "react-bootstrap";

type CarouselProps = {
  image_sources: string[];
} & CarouselOriginalProps;

export default function ImageCarousel({
  image_sources,
  controls = false,
  ...props
}: CarouselProps) {
  return (
    <Carousel fade controls={controls} {...props}>
      {image_sources.map((image, index) => (
        <Carousel.Item key={`${image}_${index}`}>
          <img
            className="d-block w-100 rounded-sm carousel-img"
            src={image}
            alt={`${index + 1} slide`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
