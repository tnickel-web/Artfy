import whaleImg from "/bilder/whale.jpg";
import whale2Img from "/bilder/whale2.jpg";
import whale3Img from "/bilder/whale3.jpg";
import rochenImg from "/bilder/rochen.jpg";
import octopusImg from "/bilder/octopus.jpg";
import sunflowerImg from "/bilder/sunflower.jpg";
import sunflower2Img from "/bilder/sunflower2.jpg";
import unicornImg from "/bilder/unicorn.jpg";
import womanImg from "/bilder/woman.jpg";
import waldImg from "/bilder/wald.jpg";
import whiskeyImg from "/bilder/whiskey.jpg";
import leavesImg from "/bilder/leaves.jpg";
import spaceImg from "/bilder/space.jpg";
import kidsRoomImg from "/bilder/kids_room.jpg";
import featherImg from "/bilder/feather.jpg";
import gymImg from "/bilder/gym.jpg";
import tabaklagerImg from "/bilder/tabaklager.jpg";
import musterImg from "/bilder/muster.jpg";

export interface Image {
  src: string;
  category: ImageCategory;
  alt: string;
}

export enum ImageCategory {
  Other = "Andere",
  WallArt = "Wandgemälde",
}

export const images: Image[] = [
  {
    src: leavesImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Blätter",
  },
  {
    src: spaceImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Weltraum",
  },
  {
    src: whaleImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Wal",
  },
  {
    src: whale2Img,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Wal 2",
  },
  {
    src: whale3Img,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Wal 3",
  },
  {
    src: rochenImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Rochen",
  },
  {
    src: octopusImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Oktopus",
  },
  {
    src: sunflowerImg,
    category: ImageCategory.Other,
    alt: "Malerei von Sonnenblume",
  },
  {
    src: sunflower2Img,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Sonnenblume 2",
  },
  {
    src: unicornImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Einhorn",
  },
  {
    src: womanImg,
    category: ImageCategory.Other,
    alt: "Malerei von Frau",
  },
  {
    src: waldImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Wald",
  },
  {
    src: whiskeyImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Whiskey",
  },
  {
    src: kidsRoomImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei in Spielzimmer mit Computertisch",
  },
  {
    src: featherImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei von Feder",
  },
  {
    src: gymImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei in Sportstudio",
  },
  {
    src: tabaklagerImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei in Tabaklager",
  },
  {
    src: musterImg,
    category: ImageCategory.WallArt,
    alt: "Wandmalerei (Musterfoto)",
  },
];
