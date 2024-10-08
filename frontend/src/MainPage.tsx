import "./assets/tammi.jpg";
import ContactForm from "./ContactForm";
import Galery from "./ImageSlider";
import { Me } from "./Me";
import { UeberMich } from "./UberMich";

function App() {
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
            className="relative flex justify-center py-20 items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('./src/assets/whale.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <h1 className="text-7xl font-serif text-secondary">Artfy</h1>
            <div className="absolute right-10">
                <img
                    src="./src/assets/tammi.jpg"
                    alt="Profilbild"
                    className="w-40 h-40 rounded-full object-cover border-2 border-secondary shadow-lg"
                    style={{ objectPosition: "top center" }}
                />
            </div>
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
                backgroundImage: "url('./src/assets/striche.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="bg-black bg-opacity-50 min-h-screen w-full flex flex-col justify-center items-center">
                <div className="w-2/3">
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
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p>&copy; 2024 Mein Name. Alle Rechte vorbehalten.</p>
                <p>Impressum: Hier stehen die Impressumsdaten...</p>
            </div>
        </footer>
    );
}

export default App;
