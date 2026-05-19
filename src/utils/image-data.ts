import bigLeafImg from "@/assets/images/big-leaf.jpg";
import bigLeaf2Img from "@/assets/images/big-leaf2.jpg";
import bigLeaf3Img from "@/assets/images/big-leaf3.jpg";
import bigLeaf4Img from "@/assets/images/big-leaf4.jpg";
import bigLeaf5Img from "@/assets/images/big-leaf5.jpg";
import crabImg from "@/assets/images/crab.jpg";
import featherImg from "@/assets/images/feather.jpg";
import fishBlueImg from "@/assets/images/Fisch-blau.jpg";
import fishBlue2Img from "@/assets/images/Fisch-blau2.jpg";
import fishPinkImg from "@/assets/images/Fisch-pink.jpg";
import fishPink2Img from "@/assets/images/Fisch-pink2.jpg";
import gymImg from "@/assets/images/gym.jpg";
import houseWallImg from "@/assets/images/house-wall.jpg";
import kaeferImg from "@/assets/images/Kaefer.jpg";
import kaefer2Img from "@/assets/images/Kaefer2.jpg";
import kidsRoomImg from "@/assets/images/kids_room.jpg";
import leavesImg from "@/assets/images/leaves.jpg";
import mermaidImg from "@/assets/images/mermaid.jpg";
import muschelKopfImg from "@/assets/images/Muschelkopf.jpg";
import musterImg from "@/assets/images/muster.jpg";
import notesImg from "@/assets/images/notes.jpg";
import notes2Img from "@/assets/images/notes2.jpg";
import notes3Img from "@/assets/images/notes3.jpg";
import octopusImg from "@/assets/images/octopus.jpg";
import pilzImg from "@/assets/images/Pilz.jpg";
import rainbowImg from "@/assets/images/rainbow.jpg";
import rainbow2Img from "@/assets/images/rainbow2.jpg";
import rainbow3Img from "@/assets/images/rainbow3.jpg";
import rochenImg from "@/assets/images/rochen.jpg";
import schiffImg from "@/assets/images/schiff.jpg";
import schuppenImg from "@/assets/images/schuppen.jpg";
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
import storchImg from "@/assets/images/storch.jpg";
import sunflower2Img from "@/assets/images/sunflower2.jpg";
import tabaklagerImg from "@/assets/images/tabaklager.jpg";
import underwaterWomanImg from "@/assets/images/underwater-woman.jpg";
import unicornImg from "@/assets/images/unicorn.jpg";
import waldImg from "@/assets/images/wald.jpg";
import whaleImg from "@/assets/images/whale.jpg";
import whale2Img from "@/assets/images/whale2.jpg";
import whale3Img from "@/assets/images/whale3.jpg";
import wieseImg from "@/assets/images/wiese.jpg";

export interface Image {
  src: string;
  category: ImageCategory;
  alt: string;
}

export enum ImageCategory {
  Kids = "Kinderzimmer & Kitas",
  SOS = "SOS-Kinderdorf",
  Other = "Freie Arbeiten & Urban Art",
  Business = "Geschäftsräume & Lagerhallen",
}

export const images: Image[] = [
  // KIDS
  {
    src: wieseImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Wiese mit Sonne und Schafen in Wolke",
  },
  {
    src: schiffImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Schiff in Wolke",
  },
  {
    src: crabImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Krabbe in Wolke",
  },

  {
    src: schuppenImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Pflanzen & Himmel an Schuppenaußenwand",
  },
  {
    src: rainbow2Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Regenbogen auf Schuppenwand",
  },
  {
    src: rainbow3Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Regenbogen auf Schuppenwand",
  },
  {
    src: rainbowImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Regenbogen über Tür",
  },
  {
    src: notesImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Musiknoten auf Regenbogenwellen",
  },
  {
    src: notes2Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Musiknoten auf Regenbogenwellen",
  },
  {
    src: notes3Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Musiknoten auf Regenbogenwellen",
  },
  {
    src: bigLeafImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von großem Blatt",
  },
  {
    src: bigLeaf2Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von großem Blatt",
  },
  {
    src: bigLeaf3Img,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von großem Blatt",
  },
  {
    src: bigLeaf4Img,
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
    src: rochenImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Rochen",
  },
  {
    src: storchImg,
    category: ImageCategory.Kids,
    alt: "Wandmalerei von Storch",
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
    src: pilzImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von lila Pilz & Gesicht",
  },
  {
    src: muschelKopfImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von Frau unter Wasser mit Muschel als Haar",
  },
  {
    src: fishBlueImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von blauem Fisch",
  },
  {
    src: fishBlue2Img,
    category: ImageCategory.Other,
    alt: "Wandmalerei von blauem Fisch",
  },
  {
    src: fishPinkImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von pinkem Fisch",
  },
  {
    src: fishPink2Img,
    category: ImageCategory.Other,
    alt: "Wandmalerei von pinkem Fisch",
  },
  {
    src: kaeferImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von pinkem Fisch",
  },
  {
    src: kaefer2Img,
    category: ImageCategory.Other,
    alt: "Wandmalerei von pinkem Fisch",
  },
  {
    src: underwaterWomanImg,
    category: ImageCategory.Other,
    alt: "Wandmalerei von blonder Frau unter Wasser",
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
