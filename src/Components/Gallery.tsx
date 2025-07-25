import React, { useState } from "react";
import { images, ImageCategory } from "../utils/image-data.ts";
import type { Image } from "../utils/image-data.ts";

const Gallery = (): React.ReactElement => {
  const initialCategory: string = ImageCategory.Kids;

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    initialCategory,
  ]);

  const openOverlay = (image: Image): void => {
    setSelectedImage(image);
  };

  const closeOverlay = (): void => {
    setSelectedImage(null);
  };

  const toggleCategory = (category: string): void => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category],
    );
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

  const renderAllCategories = (): React.JSX.Element[] => {
    return Object.values(ImageCategory).map((category) => {
      const imagesCount = images.filter(
        (image) => image.category === category,
      ).length;

      const isExpanded = expandedCategories.includes(category);

      return (
        <div key={category} className="mb-4">
          <h3
            onClick={() => toggleCategory(category)}
            className="cursor-pointer text-2xl font-bold mb-2 text-center bg-gray-200 p-4 rounded-lg
            hover:bg-gray-300 transition flex justify-between items-center"
          >
            {category} <span>{isExpanded ? "▲" : "▼"}</span>
          </h3>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[100000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`columns-1 gap-3 [&>img:not(:first-child)]:mt-4 ${
                imagesCount >= 4
                  ? "md:columns-2 lg:columns-4"
                  : "md:columns-2 lg:columns-3"
              }`}
            >
              {renderImagesByCategory(category as ImageCategory)}
            </div>
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
      <div className="p-1 bg-base-100 rounded-lg">
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
