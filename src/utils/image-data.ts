import bigLeafImg from "@/assets/images/big-leaf.jpg";
import bigLeaf2Img from "@/assets/images/big-leaf2.jpg";
import bigLeaf3Img from "@/assets/images/big-leaf3.jpg";
import bigLeaf4Img from "@/assets/images/big-leaf4.jpg";
import bigLeaf5Img from "@/assets/images/big-leaf5.jpg";
import featherImg from "@/assets/images/feather.jpg";
import gymImg from "@/assets/images/gym.jpg";
import houseWallImg from "@/assets/images/house-wall.jpg";
import kidsRoomImg from "@/assets/images/kids_room.jpg";
import leavesImg from "@/assets/images/leaves.jpg";
import mermaidImg from "@/assets/images/mermaid.jpg";
import musterImg from "@/assets/images/muster.jpg";
import octopusImg from "@/assets/images/octopus.jpg";
import rochenImg from "@/assets/images/rochen.jpg";
import sos1 from "@/assets/images/sos1.jpg";
import sos2 from "@/assets/images/sos2.jpg";
import sos3 from "@/assets/images/sos3.jpg";
import sos4 from "@/assets/images/sos4.jpg";
import sos5 from "@/assets/images/sos5.jpg";
import sos6 from "@/assets/images/sos6.jpg";
import sos7 from "@/assets/images/sos7.jpg";
import sos8 from "@/assets/images/sos8.jpg";
import spaceImg from "@/assets/images/space.jpg";
import squidImg from "@/assets/images/squid.jpg";
import sunflowerImg from "@/assets/images/sunflower.jpg";
import sunflower2Img from "@/assets/images/sunflower2.jpg";
import tabaklagerImg from "@/assets/images/tabaklager.jpg";
import underwaterWomanImg from "@/assets/images/underwater-woman.jpg";
import unicornImg from "@/assets/images/unicorn.jpg";
import waldImg from "@/assets/images/wald.jpg";
import whaleImg from "@/assets/images/whale.jpg";
import whale2Img from "@/assets/images/whale2.jpg";
import whale3Img from "@/assets/images/whale3.jpg";
import whiskeyImg from "@/assets/images/whiskey.jpg";

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
    src: bigLeaf2Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von großem Blatt",
  },
  {
    src: bigLeaf5Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von großem Blatt",
  },
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
    src: bigLeaf3Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von großem Blatt",
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
    src: bigLeaf4Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von großem Blatt",
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
    src: underwaterWomanImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von blonder Frau unter Wasser",
  },
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
