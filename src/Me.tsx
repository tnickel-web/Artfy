import React from "react";
import tammiImg from "/tammi.jpg";

export const Me = (): React.ReactElement => {
  return (
    <section
      id="aboutMe"
      className="relative bg-cover bg-center py-10 flex-grow w-full"
    >
      <div className="container mx-auto px-4 bg-base-100 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Erste Reihe - volle Breite */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-2xl font-bold mb-4 mt-4">Moin :)</h1>
            <p className="mb-4">
              Schön, dass du auf meiner Webseite gelandet bist! Hier erzähle ich
              dir, was ich Kreatives mache und wie du mich erreichen kannst.
            </p>
            <p className="mb-4">
              Von gemütlichen Kinderzimmern über stilvolle Restaurants bis hin
              zu modernen Einrichtungen: Ich biete Wandmalerei für die
              unterschiedlichsten Räume und Anlässe an. Jede Fläche hat ihren
              eigenen Charakter, und mit meiner Erfahrung und gezielter Farbwahl
              bringe ich sie auf eine ganz besondere Weise zum Strahlen.
            </p>
            <p>
              Als erfahrene Malermeisterin und Wandgestalterin weiß ich, wie ich
              mit Untergrund, Farben und Formen umgehe, um aus einer schlichten
              Fläche ein Kunstwerk zu zaubern. Egal, ob du schon eine klare Idee
              hast oder mir gestalterische Freiheit lässt – wir arbeiten Hand in
              Hand, um ein Ergebnis zu schaffen, das perfekt zu dir und deinem
              Raum passt.
            </p>
          </div>

          {/* Zweite Reihe - Text links, Bild rechts */}
          <div>
            <h2 className="text-xl font-bold mb-4">Das bin ich</h2>
            <p>
              Ich bin Tamara Akova, aber die meisten nennen mich „Tammi&#34;.
              2015 habe ich meine Ausbildung als Malerin und Lackiererin
              gestartet, und nach bestandener Prüfung und zwei spannenden
              Berufsjahren war für mich klar, dass ich noch einen Schritt
              weitergehen möchte. 2022 – pünktlich zum Valentinstag – hielt ich
              stolz meinen Meisterbrief in der Hand.
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
          <div className="col-span-1 md:col-span-2">
            <p className="mb-4">
              Nach weiteren zwei Jahren voller toller Projekte und viel
              Erfahrung habe ich mich spontan dazu entschlossen, mich
              selbstständig zu machen. Seitdem gestalte ich mit Herzblut Wände,
              die nicht nur schön aussehen, sondern auch Geschichten erzählen.
              Die Idee zur Selbstständigkeit kam, als ich mit Freunden ein
              Atelier eröffnete. Dieser kreative Ort hat mich inspiriert und
              bestärkt, meiner Leidenschaft für Wandmalerei voll und ganz
              nachzugehen. Und hier bin ich, bereit, deine Wand in ein buntes
              Kunstwerk zu verwandeln!
            </p>
            <h2 className="text-xl font-bold mb-4">So wird deine Wand bunt</h2>
            <p className="mb-4">
              Ob du schon eine klare Vorstellung hast oder mir einfach freie
              Hand lassen möchtest – melde dich gerne! Wir machen einen
              unverbindlichen Termin aus und besprechen in Ruhe deine Ideen und
              meine Vorschläge. Die Preise richten sich nach dem Aufwand, der
              Größe und dem Detailgrad des Projekts. Wenn alles passt, legen wir
              los und schon bald erstrahlt deine Wand in bunten Farben!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
