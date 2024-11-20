import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";

// CookieBanner Komponente
const CookieBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  // Überprüfen, ob der Benutzer bereits zugestimmt hat
  useEffect(() => {
    const cookieConsent = Cookie.get("cookieConsent");
    if (!cookieConsent) {
      setIsBannerVisible(true);
    }
  }, []);

  // Funktion, die ausgeführt wird, wenn der Benutzer zustimmt
  const handleConsent = () => {
    // Setze einen Cookie, um die Zustimmung zu speichern
    Cookie.set("cookieConsent", "true", { expires: 365 });
    setIsBannerVisible(false); // Banner ausblenden
  };

  return (
    isBannerVisible && (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
          <div className="text-center">
            <p className="text-lg mb-4">
              Wir verwenden technische Cookies, um die Funktionalität unserer
              Webseite zu gewährleisten.
            </p>
            <button className="btn btn-primary w-1/2" onClick={handleConsent}>
              Zustimmen
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
