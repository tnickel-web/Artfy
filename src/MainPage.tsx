import "./assets/tammi.jpg";
import ImageSlider from "./ImageSlider";

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
    <nav className="bg-base-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <ul className="menu menu-horizontal p-0 space-x-4">
            <li>
              <a href="#">Über mich</a>
            </li>
            <li>
              <a href="#">Werke</a>
            </li>
            <li>
              <a href="#">Termin vereinbaren</a>
            </li>
            <li>
              <a href="#">Impressum</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function MainContent() {
  return (
    <>
      <UeberMich />
      <ImageSlider />
    </>
  );
}

function UeberMich() {
  return (
    <section
      className="relative bg-cover bg-center py-20 flex-grow"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?nature,water')",
      }}
    >
      <div className="max-w-4xl mx-auto p-8 bg-base-100 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text- mb-8">
          Willkommen auf unserer Website für Wandbemalung und kreative
          Raumgestaltung!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Wir freuen uns, dass Sie den Weg zu uns gefunden haben und heißen Sie
          herzlich willkommen in einer Welt, in der Wände sprechen, Farben
          Geschichten erzählen und Ihre Räume zu lebendigen Kunstwerken werden.
          Hier bei <strong className="text-gray-900">[Ihr Firmenname]</strong>{" "}
          verstehen wir, dass Wände mehr sind als nur bauliche Strukturen – sie
          sind die Leinwände für Ihre Träume, Ihre Visionen und Ihre
          Persönlichkeit.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Entdecken Sie die Kunst der Wandbemalung
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Jede Wand hat das Potenzial, mehr zu sein als eine einfache Trennwand.
          Mit der richtigen Bemalung wird sie zum Herzstück Ihres Raumes, einem
          Element, das nicht nur das Ambiente, sondern auch die Stimmung und das
          Wohlbefinden beeinflusst. Unsere Mission ist es, Ihnen dabei zu
          helfen, Ihre Wände in einzigartige Kunstwerke zu verwandeln, die Ihre
          Individualität und Ihren Stil widerspiegeln.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Ob Sie einen ruhigen Rückzugsort in Ihrem Schlafzimmer schaffen
          möchten, der mit sanften, beruhigenden Farben und Mustern versehen
          ist, oder ob Sie nach einer auffälligen, modernen Gestaltung für Ihr
          Wohnzimmer suchen – wir sind hier, um Ihre Wünsche zu realisieren.
          Unsere Künstler und Designer arbeiten eng mit Ihnen zusammen, um
          sicherzustellen, dass jeder Pinselstrich, jede Farbwahl und jedes
          Detail genau das ausdrückt, was Sie sich vorgestellt haben.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Kreativität ohne Grenzen
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Bei uns sind der Fantasie keine Grenzen gesetzt. Von eleganten,
          minimalistischen Designs bis hin zu komplexen, großflächigen
          Wandgemälden, die Ihre Gäste sprachlos machen werden – wir bieten eine
          breite Palette von Stilen und Techniken, die sich perfekt an Ihre
          Vorlieben und die spezifischen Anforderungen Ihrer Räume anpassen
          lassen.
        </p>
        <p className="text-lg text-gray-700">
          Vielleicht träumen Sie von einem Wandbild, das eine idyllische
          Landschaft zeigt, die Sie an Ihre liebsten Reiseziele erinnert, oder
          von einer abstrakten Komposition, die Bewegung und Dynamik in Ihren
          Raum bringt. Was auch immer Ihre Vision ist, wir setzen sie mit
          Leidenschaft und Präzision um.
        </p>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2024 Mein Name. Alle Rechte vorbehalten.</p>
        <p>Impressum: Hier stehen die Impressumsdaten...</p>
      </div>
    </footer>
  );
}

export default App;
