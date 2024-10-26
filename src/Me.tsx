import React from "react";

export const Me = () => {
    return (
        <section className="relative bg-cover bg-center py-10 flex-grow w-full">
            <div className=" p-4 bg-base-100 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Moin</h2>
                <div className="pl-9 pr-3 grid grid-cols-3 gap-8 text-lg">
                    <div className="col-span-3">
                        <p>
                            Schön, dass du auf meiner Webseite gelandet bist!
                            Hier erzähle ich dir, was ich Kreatives mache und
                            wie du mich erreichen kannst.
                        </p>
                    </div>
                    <div className="col-span-2">
                        <p>
                            Mein Ziel? Die Welt ein Stück bunter zu machen!
                            Wände sind mehr als nur Begrenzungen – sie bieten
                            unendliche Möglichkeiten für kreative Gestaltung.
                            Als erfahrene Malermeisterin und Künstlerin weiß ich
                            genau, wie ich mit Farben und Formen umgehe, um aus
                            einer schlichten Fläche ein Kunstwerk zu zaubern.
                            Egal, ob du schon eine klare Idee hast oder mir
                            gestalterische Freiheit lässt – wir arbeiten Hand in
                            Hand, um ein Ergebnis zu schaffen, das perfekt zu
                            dir und deinem Raum passt.
                        </p>
                    </div>
                    <div>
                        <img
                            src="tammi.jpg"
                            alt="Profilbild"
                            className="w-40 h-40 rounded-full object-cover border-2 border-secondary shadow-lg my-6 self-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
