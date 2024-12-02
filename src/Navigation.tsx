import React, { useState } from "react";
import ListItem from "./ListItem";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:bg-white md:shadow-lg fixed z-50 md:origin-left md:m-3 md:w-fit">
      <div className="max-w-7xl mx-auto px-4 md:m-2">
        {/* Hamburger Menu für mobile Geräte */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-4 text-gray-500 w-10 h-10 btn-circle relative bg-orange-100 bg-opacity-80 border-2 border-orange-400"
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${isOpen && "opacity-0"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
            md:flex md:items-center md:space-x-4
            flex-col md:flex-row space-y-2 md:space-y-0 pt-2 md:pt-0
            transition-all duration-500 ease-out overflow-hidden
            ${
              isOpen
                ? "max-h-[1000px] opacity-100 scale-y-100 origin-top"
                : "max-h-0 opacity-0 scale-y-0 origin-top"
            }
            md:max-h-full md:opacity-100 md:scale-y-100
          `}
        >
          <ListItem
            href="#aboutMe"
            content="Über mich"
            index={1}
            isOpen={isOpen}
          ></ListItem>
          <ListItem
            href="#gallery"
            content="Galerie"
            index={2}
            isOpen={isOpen}
          ></ListItem>
          <ListItem
            href="#contactForm"
            content="Termin vereinbaren"
            index={3}
            isOpen={isOpen}
          ></ListItem>
          <ListItem
            href="#footer"
            content="Impressum"
            index={4}
            isOpen={isOpen}
          ></ListItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
