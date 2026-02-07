import React from "react";
import tammiImg from "/tammi.jpg";

export const Me = (): React.ReactElement => {
  return (
    <section
      id="aboutMe"
      className="relative bg-cover bg-center py-10 flex-grow w-full"
    >
      <div className="container mx-auto px-4 bg-base-100 shadow-lg rounded-lg">
        <div className="grid grid-cols-2 gap-6">
          {/* Erste Reihe - volle Breite */}
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-4 mt-4">Moin!</h2>
            <p className="text-lg">
              Ich bin Tamara Akova (Tammi) und arbeite seit Ende 2024 als
              freiberufliche Künstlerin. Ich gestalte individuelle Wandmalereien
              und arbeite aktuell in Bremen und Umgebung, aber auch darüber
              hinaus. Meine Arbeiten enstehen direkt auf Wänden und Fassaden,
              innen sowie außen.
            </p>
          </div>

          {/* Zweite Reihe - Text links, Bild rechts */}
          <div className="col-span-1 self-center">
            {/*<h2 className="text-2xl font-bold mb-4">Über mich</h2>*/}
            <p className="text-lg">
              Meine Ausbildung als Malermeisterin bildet die technische
              Grundlage für die Umsetzung meiner selbst entwickelten Motiv- und
              Farbkonzepte. Im Zentrum meiner Arbeit steht jedoch der
              künstlerische Entwurf und die individuelle Gestaltung des
              jeweiligen Ortes.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={tammiImg}
              alt="Profilbild"
              className="w-60 h-60 rounded-full object-cover border-2 border-orange-300 shadow-lg self-center"
            />
          </div>

          {/* Dritte Reihe - volle Breite */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">Bereit für Farbe?</h2>
            <p className="text-lg mb-4">
              Wenn du Interesse an einer künstlerischen Wandmalerei hast,
              tauschen wir uns unverbindlich über Ideen, Raum und Möglichkeiten
              aus. Auf dieser Basis entwickle ich ein individuelles Konzept und
              setzte es direkt vor Ort um.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
