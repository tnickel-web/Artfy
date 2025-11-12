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
import bigLeafImg from "/bilder/big-leaf.jpg";
import houseWallImg from "/bilder/house-wall.jpg";
import sos1 from "/bilder/sos1.jpg";
import sos2 from "/bilder/sos2.jpg";
import sos3 from "/bilder/sos3.jpg";
import sos4 from "/bilder/sos4.jpg";
import sos5 from "/bilder/sos5.jpg";
import sos6 from "/bilder/sos6.jpg";
import sos7 from "/bilder/sos7.jpg";
import sos8 from "/bilder/sos8.jpg";
import mermaidImg from "/bilder/mermaid.jpg";

export interface Image {
  src: string;
  category: ImageCategory;
  alt: string;
}

export enum ImageCategory {
  Kids = "Kinderzimmer & Kitas",
  SOS = "SOS-Kinderdorf",
  Other = "Wohnräume, Street Art und Muster",
  Business = "Geschäftsräume & Lagerhallen",
}

export const images: Image[] = [
  // KIDS
  {
    src: gymImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei in Turnraum (SOS-Kinderdorf)",
  },
  {
    src: spaceImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Weltraum",
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
    src: whale2Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Wal",
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
    src: bigLeafImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von großem Blatt",
  },
  {
    src: rochenImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Rochen",
  },
  // BUSINESS
  {
    src: rochenImg,
    category: ImageCategory.Business,
    alt: "Wandmalerei von Rochen",
  },
  {
    src: bigLeafImg,
    category: ImageCategory.Business,
    alt: "Wandmalerei von großem Blatt",
  },
  {
    src: tabaklagerImg,
    category: ImageCategory.Business,
    alt: "Wandmalerei in Tabaklager",
  },
  // SOS-Kinderdorf
  {
    src: gymImg,
    category: ImageCategory.SOS,
    alt: "Wandmalerei in Turnraum (SOS-Kinderdorf)",
  },
  {
    src: kidsRoomImg,
    category: ImageCategory.SOS,
    alt: "Wandmalerei in Spielzimmer (SOS-Kinderdorf)",
  },
  {
    src: featherImg,
    category: ImageCategory.SOS,
    alt: "Wandmalerei von Feder (SOS-Kinderdorf)",
  },
  {
    src: sos1,
    category: ImageCategory.SOS,
    alt: "Willkommensbereich Federn (SOS-Kinderdorf)",
  },
  {
    src: sos2,
    category: ImageCategory.SOS,
    alt: "Flur Federn (SOS-Kinderdorf)",
  },
  {
    src: sos3,
    category: ImageCategory.SOS,
    alt: "Tür Federn (SOS-Kinderdorf)",
  },
  {
    src: sos4,
    category: ImageCategory.SOS,
    alt: "Essensbereich Federn (SOS-Kinderdorf)",
  },
  {
    src: sos5,
    category: ImageCategory.SOS,
    alt: "Kreativraum Federn (SOS-Kinderdorf)",
  },
  {
    src: sos6,
    category: ImageCategory.SOS,
    alt: "Tür Federn (SOS-Kinderdorf)",
  },
  {
    src: sos7,
    category: ImageCategory.SOS,
    alt: "Sportraum Federn (SOS-Kinderdorf)",
  },
  {
    src: sos8,
    category: ImageCategory.SOS,
    alt: "Flur Federn (SOS-Kinderdorf)",
  },
  // OTHER
  {
    src: sunflowerImg,
    category: ImageCategory.Other,
    alt: "Malerei von Sonnenblume",
  },
  {
    src: whiskeyImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Whiskey",
  },
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
    src: sunflower2Img,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Sonnenblume 2",
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
  {
    src: houseWallImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Gänseblümchen an Hauswand (Musterfoto)",
  },
  {
    src: mermaidImg,
    category: ImageCategory.Other,
    alt: "Meerjungfrau",
  },
];
