import Cookie from "js-cookie";
import React, { useState, useEffect } from "react";

const CookieBanner = (): false | React.JSX.Element => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookie.get("cookieConsent");

    if (!cookieConsent) {
      setIsBannerVisible(true);
    }
  }, []);

  const handleConsent = (): void => {
    Cookie.set("cookieConsent", "true", { expires: 365 });
    setIsBannerVisible(false);
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
