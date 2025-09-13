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
              Hier werden individuelle Wandgestaltungen, kreative Murals und
              lebendige Fassadengestaltungen mit Farbe - innen sowie außen -
              umgesetzt. Ob im Kinderzimmer, Café, Büro oder Hallen. Quasi
              überall, wo Wandflächen stehen. Mit meiner Erfahrung, Ideen und
              Leidenschaft gestalte ich Wandbilder, die Räume verwandeln, nach
              deiner Vorstellung oder mit meinem kreativen Konzept.
            </p>
          </div>

          {/* Zweite Reihe - Text links, Bild rechts */}
          <div className="col-span-1 self-center">
            <h2 className="text-2xl font-bold mb-4">Über mich</h2>
            <p className="text-lg">
              Ich bin Tamara Akova (Tammi), Malermeisterin und freiberufliche
              Künstlerin. Seit 2024 bin ich selbstständig mit dem was mich
              begeistert: Wandmalerei, Mural Art und Fassadengestaltung. Ich
              verbinde mein handwerkliches und künstlerisches Wissen, um
              Wandflächen kreativ zu gestalten.
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
              Ob du schon eine klare Vorstellung hast oder mir einfach freie
              Hand lassen möchtest. Wir machen einen unverbindlichen Termin aus
              und besprechen deine Ideen und meine Vorschläge. Die Preise
              richten sich nach Aufwand, Größe und dem Detailgrad des Projekts.
              Wenn alles passt, wird es schon bald bunt auf deiner Wand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
