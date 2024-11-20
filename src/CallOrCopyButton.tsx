import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CallOrCopyButton = () => {
  const phoneNumber = "+49 163 7159501"; // Die Telefonnummer, die verwendet werden soll
  const [isMobile, setIsMobile] = useState(false);
  const [buttonText, setButtonText] = useState(
    isMobile ? "Mich anrufen" : "Nummer kopieren"
  );
  const [animate, setAnimate] = useState(false);

  // Überprüfe, ob der Benutzer ein mobiles Gerät verwendet
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileDevices =
      /Android|iPhone|iPad|iPod|Chrome Android|Firefox for Android|Opera Android|Safari on iOS|Samsung Internet|WebView Android|WebView Android|Windows Phone/i;
    setIsMobile(mobileDevices.test(userAgent));
  }, []);

  useEffect(() => {
    if (animate) {
      setAnimate(true);
      setButtonText("");
      const timer = setTimeout(() => {
        setAnimate(false); // Animation zurücksetzen
        setButtonText(phoneNumber);
      }, 500); // Animation läuft 1 Sekunde

      return () => clearTimeout(timer);
    }
  }, [animate]);

  useEffect(() => {
    setButtonText(isMobile ? "Mich anrufen" : "Nummer kopieren");
  }, [isMobile]);

  const handleButtonClick = () => {
    if (isMobile) {
      // Auf mobilen Geräten die Telefonnummer anrufen
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Auf nicht-mobilen Geräten die Telefonnummer in die Zwischenablage kopieren
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          toast("Meine Telefonnummer ist in deiner Zwischenablage!", {
            style: {
              background:
                "color-mix(in oklab, var(--fallback-in,oklch(var(--in)/1)) 90%, black)", // Beispiel für Tailwind-Farbe
              borderRadius: "0.5rem",
            },
            duration: 5000,
          });
          setAnimate(true);
        })
        .catch((error) => {
          console.error("Fehler beim Kopieren: ", error);
        });
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`btn btn-info w-full mt-4 transition-transform ${animate && !isMobile ? "animate-rotateText" : ""}`}
    >
      {buttonText}
    </button>
  );
};

export default CallOrCopyButton;
