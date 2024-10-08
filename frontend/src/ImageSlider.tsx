import { useState } from "react";

const Galery = () => {
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
        <section
            id="galery"
            className="relative bg-cover bg-center py-10 flex-grow w-full"
        >
            <div className="mx-24 p-4 bg-base-100 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Galery</h2>
                <div className="carousel w-full h-64 pb-4 relative">
                    <div
                        className="carousel-inner flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                className="carousel-item w-full flex-shrink-0"
                                key={index}
                            >
                                <img
                                    src={slide}
                                    className="w-full h-full object-contain"
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 w-full">
                        <button onClick={prevSlide} className="btn btn-circle">
                            ❮
                        </button>
                        <button
                            onClick={nextSlide}
                            className="btn btn-circle mr-10"
                        >
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Galery;
