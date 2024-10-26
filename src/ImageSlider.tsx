import { useState } from "react";

const Galery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string>();
    const slides = [
        "./src/assets/bilder/octopus.jpg",
        "./src/assets/bilder/sunflower.jpg",
        "./src/assets/bilder/unicorn.jpg",
        "./src/assets/bilder/whale.jpg",
        "./src/assets/bilder/women.jpg",
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const openOverlay = (image: string) => {
        setSelectedImage(image);
    };

    const closeOverlay = () => {
        setSelectedImage(undefined);
    };

    return (
        <section
            id="galery"
            className="relative bg-cover bg-center py-10 flex-grow w-full"
        >
            <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Galery</h2>
                <div className="carousel w-full h-96 pb-4 relative">
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
                                onClick={() => openOverlay(slide)}
                            >
                                <img
                                    src={slide}
                                    className="w-full h-full object-contain cursor-pointer"
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

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeOverlay}
                >
                    <div className="max-w-4xl max-h-4xl">
                        <img
                            src={selectedImage}
                            alt="Enlarged view"
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Galery;
