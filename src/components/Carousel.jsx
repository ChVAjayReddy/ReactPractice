import { useState, useEffect } from "react";
// import "./carousel.css";

const images = [
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1019/800/400",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="carousel">
      <button className="btn left" onClick={prevSlide}>
        ❮
      </button>

      <img src={images[currentIndex]} alt="carousel" className="image" />

      <button className="btn right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}

export default Carousel;
