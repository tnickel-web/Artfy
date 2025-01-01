import React, { useState } from "react";
import { images, ImageCategory, Image } from "./utils/image-data.ts";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>();

  const openOverlay = (image: Image): void => {
    setSelectedImage(image);
  };

  const closeOverlay = (): void => {
    setSelectedImage(null);
  };

  const renderImagesByCategory = (category: ImageCategory): React.JSX.Element[] => {
    return images
      .filter((image: Image) => image.category === category)
      .map((image: Image) => (
        <img
          className="cursor-pointer rounded-lg w-full h-auto"
          key={image.src}
          src={image.src}
          alt={image.alt}
          onClick={() => openOverlay(image)}
        />
      ));
  };

  const uncategorizedImages = renderImagesByCategory(ImageCategory.Other);
  const wallArtImages = renderImagesByCategory(ImageCategory.WallArt);

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
        <h3 className="text-xl font-bold mb-4 text-center mt-10">
          {ImageCategory.WallArt}
        </h3>
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
              src={selectedImage.src}
              alt={"Vergrößerte Ansicht " + selectedImage.alt}
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
