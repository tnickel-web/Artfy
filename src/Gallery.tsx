import React, { useEffect, useState } from "react";
import { Image, ImageCategory, images } from "./utils/image-data.ts";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>();
  const [openCategories, setOpenCategories] = useState<ImageCategory[]>([]);

  useEffect(() => {
    // Open "Other" category by default
    setOpenCategories([ImageCategory.Other]);
  }, []);

  const openOverlay = (image: Image): void => {
    setSelectedImage(image);
  };

  const closeOverlay = (): void => {
    setSelectedImage(null);
  };

  const toggleCategory = (category: ImageCategory) => {
    setOpenCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category],
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

  const uncategorizedImages = renderImagesByCategory(ImageCategory.Other);
  const wallArtImages = renderImagesByCategory(ImageCategory.WallArt);

  return (
    <section
      id="gallery"
      className="relative bg-cover bg-center py-10 flex-grow w-full"
    >
      <div className="p-4 bg-base-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Galerie</h2>
        <h3
          className="text-xl font-bold mb-4 text-center mt-10 cursor-pointer bg-gray-100 flex items-center"
          onClick={() => toggleCategory(ImageCategory.WallArt)}
        >
          <span className="flex-grow m-2">{ImageCategory.WallArt}</span>
          <span>
            {openCategories.includes(ImageCategory.WallArt) ? "↑" : "↓"}
          </span>
        </h3>
        <div
          className={`columns-1 gap-5 sm:columns-3 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8 ${
            openCategories.includes(ImageCategory.WallArt) ? "block" : "hidden"
          }`}
        >
          {wallArtImages}
        </div>
        <h3
          className="text-xl font-bold mb-4 text-center mt-10 cursor-pointer bg-gray-100 flex items-center"
          onClick={() => toggleCategory(ImageCategory.Other)}
        >
          <span className="flex-grow m-2">{ImageCategory.Other}</span>
          <span>{openCategories.includes(ImageCategory.Other) ? "↑" : "↓"}</span>
        </h3>
        <div
          className={`columns-1 gap-5 sm:columns-2 md:columns-2 lg:columns-2 [&>img:not(:first-child)]:mt-8 ${
            openCategories.includes(ImageCategory.Other) ? "block" : "hidden"
          }`}
        >
          {uncategorizedImages}
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
