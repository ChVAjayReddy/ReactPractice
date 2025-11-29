import React from "react";
import { IMAGES } from "../assets/data";
import ImageCard from "./ImageCard";
const Gallery = () => {
  return (
    <div>
      {IMAGES.map((image, index) => (
        <ImageCard key={index} imageurl={image.url} title={image.title} />
      ))}
    </div>
  );
};
export default Gallery;
