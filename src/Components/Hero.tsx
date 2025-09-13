import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero({
  title,
  subtitle,
}: HeroProps): React.ReactElement {
  return (
    <section id="hero" className="relative bg-cover bg-center flex-grow w-full">
      <div className="container mx-auto px-4 bg-base-100 shadow-lg rounded-lg overflow-hidden">
        <div className="relative z-10 text-center text-black px-4 py-10">
          <h1 className="text-3xl font-bold mb-4 drop-shadow-lg">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl font-light drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
