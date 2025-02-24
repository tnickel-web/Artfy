import React, { useState, useEffect } from "react";
import { images, ImageCategory, Image } from "./utils/image-data.ts";

const Gallery = (): React.ReactElement => {
  const [selectedImage, setSelectedImage] = useState<Image | null>();

  useEffect(() => {
    renderAllCategories();
  }, []);

  const openOverlay = (image: Image): void => {
    setSelectedImage(image);
  };

  const closeOverlay = (): void => {
    setSelectedImage(null);
  };

  const renderImagesByCategory = (
    category: ImageCategory,
  ): React.JSX.Element[] => {
    return images
      .filter((image: Image) => image.category === category)
      .map((image: Image) => (
        <img
          className="cursor-pointer rounded-lg"
          key={image.src}
          src={image.src}
          alt={image.alt}
          onClick={() => openOverlay(image)}
        />
      ));
  };

  const renderAllCategories = () => {
    return Object.values(ImageCategory).map((category) => {
      const imagesCount = images.filter(
        (image) => image.category === category,
      ).length;

      return (
        <div key={category}>
          <h3 className="text-2xl font-bold mb-4 text-center mt-10">
            {category}
          </h3>
          <div
            className={`columns-1 gap-3 [&>img:not(:first-child)]:mt-8 ${imagesCount >= 3 ? "md:columns-2 lg:columns-3" : "md:columns-2 lg:columns-2"}`}
          >
            {renderImagesByCategory(category as ImageCategory)}
          </div>
        </div>
      );
    });
  };

  return (
    <section
      id="gallery"
      className="container mx-auto p-4 bg-base-100 shadow-lg rounded-lg"
    >
      <div className="p-2 bg-base-100 rounded-lg">
        <h2 className="text-4xl font-bold mb-4 text-center">Galerie</h2>
        {renderAllCategories()}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => closeOverlay()}
        >
          <div className="max-w-4xl max-h-4xl">
            <img
              src={selectedImage.src}
              alt={"Vergrößerte Ansicht " + selectedImage.alt}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
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
