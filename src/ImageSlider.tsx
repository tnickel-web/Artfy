import { useState } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "./src/assets/whale.jpg",
    "./src/assets/tammi.jpg",
    "./src/assets/artfy.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="carousel w-full h-64 pb-4">
      <div className="carousel-item relative w-full">
        <img
          src={slides[currentSlide]}
          className="w-full h-full object-contain"
          alt={`Slide ${currentSlide + 1}`}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevSlide} className="btn btn-circle">
            ❮
          </button>
          <button onClick={nextSlide} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
