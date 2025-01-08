import whaleImg from "/bilder/whale_crop.jpg"
import rochenImg from "/bilder/rochen.jpg"
import octopusImg from "/bilder/octopus.jpg"
import sunflowerImg from "/bilder/sunflower.jpg"
import unicornImg from "/bilder/unicorn.jpg"
import womenImg from "/bilder/women.jpg"
import waldImg from "/bilder/wald.jpg"
import whiskeyImg from "/bilder/whiskey.jpg"
import leavesImg from "/bilder/leaves.jpg"
import spaceImg from "/bilder/space.jpg"

export interface Image {
  src: string;
  category: ImageCategory;
  alt: string;
}

export enum ImageCategory {
  Other= "Andere",
  WallArt = "Wandgemälde",
}

export const images: Image[] = [
  { src: leavesImg, category: ImageCategory.WallArt, alt: "Wandmalerei Blätter" },
  { src: spaceImg, category: ImageCategory.WallArt, alt: "Wandmalerei Weltraum" },
  { src: whaleImg, category: ImageCategory.WallArt, alt: "Wandmalerei Wal" },
  { src: rochenImg, category: ImageCategory.WallArt, alt: "Wandmalerei Rochen" },
  { src: octopusImg, category: ImageCategory.WallArt, alt: "Wandmalerei Oktopus" },
  { src: sunflowerImg, category: ImageCategory.Other, alt: "Malerei Sonnenblume" },
  { src: unicornImg, category: ImageCategory.WallArt, alt: "Wandmalerei Einhorn" },
  { src: womenImg, category: ImageCategory.Other, alt: "Malerei Frau" },
  { src: waldImg, category: ImageCategory.WallArt, alt: "Wandmalerei Wald" },
  { src: whiskeyImg, category: ImageCategory.WallArt, alt: "Wandmalerei Whiskey" },
];