import React, { useState } from "react";

interface Image {
  src: string;
  category: string;
  alt: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>();

  const images: Image[] = [
    { src: "bilder/whale_crop.jpg", category: "wall art", alt: "Malerei Wal" },
    { src: "bilder/rochen.jpg", category: "wall art", alt: "Malerei Rochen" },
    { src: "bilder/octopus.jpg", category: "wall art", alt: "Malerei Oktopus" },
    { src: "bilder/sunflower.jpg", category: "", alt: "Malerei Sonnenblume" },
    { src: "bilder/unicorn.jpg", category: "wall art", alt: "Malerei Einhorn" },
    { src: "bilder/women.jpg", category: "", alt: "Malerei Frau" },
    { src: "bilder/wald.jpg", category: "wall art", alt: "Malerei Wald" },
    { src: "bilder/whiskey.jpg", category: "wall art", alt: "Malerei Whiskey" },
  ];

  const openOverlay = (image: string): void => {
    setSelectedImage(image);
  };

  const closeOverlay = (): void => {
    setSelectedImage(null);
  };

  const renderImagesByCategory = (category: string): React.JSX.Element[] => {
    return images
      .filter((slide: Image) => slide.category === category)
      .map((slide: Image) => (
        <img
          className="cursor-pointer rounded-lg w-full h-auto"
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          onClick={() => openOverlay(slide.src)}
        />
      ));
  };

  const uncategorizedImages = renderImagesByCategory("");
  const wallArtImages = renderImagesByCategory("wall art");

  return (
    <section
      id="gallery"
      className="relative bg-cover bg-center py-10 flex-grow w-full"
    >
      <div className="p-4 bg-base-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Galerie</h2>
        <div className="columns-1 gap-5 sm:columns-2 md:columns-3 lg:columns-2 [&>img:not(:first-child)]:mt-8">
          {uncategorizedImages}
        </div>
        <h3 className="text-xl font-bold mb-4 text-center mt-10">Wand</h3>
        <div className="columns-1 gap-5 sm:columns-2 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8">
          {wallArtImages}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => closeOverlay()}
        >
          <div className="max-w-4xl max-h-4xl">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => {
                e.stopPropagation();
                closeOverlay();
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
