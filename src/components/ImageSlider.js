import React, { useState, useEffect } from "react";
import "../styles/ImageSlider.css";
import hanla1 from "../images/hanla1.webp";
import hanla2 from "../images/hanla2.jpg";
import hanla3 from "../images/hanla3.webp";
import hanla4 from "../images/hanla4.jpg";
import hanla5 from "../images/hanla5.jpg";
import hanla6 from "../images/hanla6.jpg";
import hanla7 from "../images/hanla7.jpg";

const ImageSlider = () => {
  const images = [hanla1, hanla2, hanla3, hanla4, hanla5, hanla6, hanla7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="main-image"
      />
      <div className="thumbnails">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => changeImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
