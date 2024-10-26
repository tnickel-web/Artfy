import React from "react";
import ContactForm from "./ContactForm";
import Galery from "./ImageSlider";
import { Me } from "./Me";

function App(): React.ReactElement {
    return (
        <div className="bg-base-200 min-h-screen flex flex-col">
            <Header />
            <Navigation />
            <MainContent />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header
            className="grid grid-cols-1 place-items-center  relative  justify-center py-20 items-center bg-cover bg-center"
            style={{
                backgroundImage: `/public/whale.jpg`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <img
                className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-3/12"
                src="./assets/images/Header.png"
                alt="Beschreibung"
            ></img>
            <img
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-3/12"
                src="./public/images/titel_unter.png"
                alt="Beschreibung"
            ></img>
        </header>
    );
}

function Navigation() {
    return (
        <nav className="bg-base-300 shadow-lg fixed z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center">
                    <ul className="menu menu-horizontal p-0 space-x-4">
                        <li>
                            <a href="#aboutMe">Über mich</a>
                        </li>
                        <li>
                            <a href="#galery">Galery</a>
                        </li>
                        <li>
                            <a href="#contactForm">Termin vereinbaren</a>
                        </li>
                        <li>
                            <a href="#footer">Impressum</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function MainContent() {
    return (
        <div
            className="w-30 min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('./public/images/striche.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="bg-black bg-opacity-50 min-h-screen w-full flex flex-col justify-center items-center">
                <div className="lg:1/3 md:w-2/3 xs:w-3/3 mx-5 lg:mx-24">
                    <Me />
                    <Galery />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer id="footer" className="bg-neutral text-neutral-content py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mt-4 flex flex-wrap">
                    <div className="w-full md:w-1/3 mb-4 text-left">
                        <h3 className="text-lg font-semibold">Impressum</h3>
                        <div className="mb-2">
                            <h4 className="font-medium">Name:</h4>
                            <p>Tamara Arkova</p>
                        </div>
                        <div className="mb-2">
                            <h4 className="font-medium">Anschrift:</h4>
                            <p>
                                Meyerstraße 31 / 33, 28201 Bremen, Deutschland
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 mb-4 text-left">
                        <h3 className="text-lg font-semibold">Kontakt</h3>
                        <div className="mb-2">
                            <h4 className="font-medium">Telefon:</h4>
                            <p>+49 163 7159501</p>
                        </div>
                        <div className="mb-2">
                            <h4 className="font-medium">E-Mail:</h4>
                            <p>T.akova@artfy-hb.de</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 mb-4 text-left">
                        <h3 className="text-lg font-semibold">
                            Weitere Informationen
                        </h3>
                       
                        <div className="mb-2">
                            <h4 className="font-medium">Ust-idNr.:</h4>
                            <p>
                                DE369127227
                            </p>
                        </div>
                        <div className="mb-2">
                            <h4 className="font-medium">Handelsregister:</h4>
                            <p>Amtsgericht Bremen HRB 29465</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center">
                &copy; 2024 Tamara Arkova. Alle Rechte vorbehalten.
            </p>
        </footer>
    );
}

export default App;
