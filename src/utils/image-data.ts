export interface Image {
  src: string;
  category: ImageCategory;
  alt: string;
}

export enum ImageCategory {
  Other,
  WallArt = "Wandgemälde",
}

export const images: Image[] = [
  { src: "bilder/whale_crop.jpg", category: ImageCategory.WallArt, alt: "Wandmalerei Wal" },
  { src: "bilder/rochen.jpg", category: ImageCategory.WallArt, alt: "Wandmalerei Rochen" },
  { src: "bilder/octopus.jpg", category: ImageCategory.WallArt, alt: "Wandmalerei Oktopus" },
  { src: "bilder/sunflower.jpg", category: ImageCategory.Other, alt: "Malerei Sonnenblume" },
  { src: "bilder/unicorn.jpg", category: ImageCategory.WallArt, alt: "Wandmalerei Einhorn" },
  { src: "bilder/women.jpg", category: ImageCategory.Other, alt: "Malerei Frau" },
  { src: "bilder/wald.jpg", category: ImageCategory.WallArt, alt: "Wandmalerei Wald" },
  { src: "bilder/whiskey.jpg", category: ImageCategory.WallArt, alt: "Wandmalerei Whiskey" },
];