import React, { useEffect, useMemo, useState } from "react";

type InfoBarProps = {
  message?: React.ReactNode;
  hideAfterDate?: string;
};

const InfoBar = ({
  message = (
    <>
      <strong>Info:</strong> Von <strong>Mai 2026 bis Januar 2027</strong>{" "}
      befinde ich mich im Ausland und bin in dieser Zeit per E-Mail für
      Entwürfe, Skizzen und Planungen erreichbar. Aufträge mit Ausführung können
      noch bis einschließlich April umgesetzt werden. Die Umsetzung neuer
      Projekte ist wieder ab <strong>Februar 2027</strong> möglich. Frühzeitige
      Anfragen sind jederzeit willkommen.
    </>
  ),
  hideAfterDate = "2027-02-01",
}: InfoBarProps): React.ReactElement | null => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const shouldHideByDate = useMemo(() => {
    const cutoff = new Date(`${hideAfterDate}T00:00:00`);
    return Number.isNaN(cutoff.getTime()) ? false : new Date() >= cutoff;
  }, [hideAfterDate]);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollPosition >= pageHeight - 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isAtBottom || shouldHideByDate) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-md border border-orange-200 bg-white/90 px-4 py-4 shadow-lg backdrop-blur">
        <span className="text-sm text-slate-700">{message}</span>
        <button
          type="button"
          aria-label="Infobar schließen"
          onClick={() => setIsVisible(false)}
          className="rounded-full px-2 py-1 text-xs text-slate-500 hover:text-slate-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default InfoBar;
