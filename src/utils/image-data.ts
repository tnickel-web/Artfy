import whaleImg from "/bilder/whale.jpg";
import whale2Img from "/bilder/whale2.jpg";
import whale3Img from "/bilder/whale3.jpg";
import rochenImg from "/bilder/rochen.jpg";
import octopusImg from "/bilder/octopus.jpg";
import sunflowerImg from "/bilder/sunflower.jpg";
import sunflower2Img from "/bilder/sunflower2.jpg";
import unicornImg from "/bilder/unicorn.jpg";
import waldImg from "/bilder/wald.jpg";
import whiskeyImg from "/bilder/whiskey.jpg";
import leavesImg from "/bilder/leaves.jpg";
import spaceImg from "/bilder/space.jpg";
import kidsRoomImg from "/bilder/kids_room.jpg";
import featherImg from "/bilder/feather.jpg";
import gymImg from "/bilder/gym.jpg";
import tabaklagerImg from "/bilder/tabaklager.jpg";
import musterImg from "/bilder/muster.jpg";
import squidImg from "/bilder/squid.jpg";

export interface Image {
  src: string;
  category: ImageCategory;
  alt: string;
}

export enum ImageCategory {
  Kids = "Kinderzimmer & Kitas",
  Business = "Geschäftsräume & Lagerhallen",
  Other = "Wohnräume, Streetart und Muster",
}

export const images: Image[] = [
  // KIDS
  {
    src: spaceImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Weltraum",
  },
  {
    src: whale2Img,
    category: ImageCategory.Kids,
    alt: "Zweite Wandmalerei von Wal",
  },
  {
    src: unicornImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Einhorn",
  },
  {
    src: waldImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Wald",
  },
  {
    src: kidsRoomImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei in Spielzimmer (SOS-Kinderdorf)",
  },
  {
    src: featherImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Feder (SOS-Kinderdorf)",
  },
  {
    src: gymImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei in Turnraum (SOS-Kinderdorf)",
  },
  // BUSINESS
  {
    src: tabaklagerImg,
    category: ImageCategory.Business,
    alt: "Wandmalerei in Tabaklager",
  },
  {
    src: rochenImg,
    category: ImageCategory.Business,
    alt: "Wandmalerei von Rochen",
  },
  // OTHER
  {
    src: leavesImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Blätter",
  },
  {
    src: whaleImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Wal",
  },
  {
    src: whale3Img,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Wal 3",
  },
  {
    src: octopusImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Oktopus",
  },
  {
    src: sunflowerImg,
    category: ImageCategory.Other,
    alt: "Malerei von Sonnenblume",
  },
  {
    src: sunflower2Img,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Sonnenblume 2",
  },
  {
    src: whiskeyImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Whiskey",
  },
  {
    src: musterImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei (Musterfoto)",
  },
  {
    src: squidImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Tintenfisch",
  },
];
