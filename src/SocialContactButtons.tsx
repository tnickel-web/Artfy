import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import PersonalInformation from "./PersonalInformation";

const SocialContactButtons = () => {
  return (
    <div className="flex space-x-4">
      {/* Instagram Button */}
      <a
        href={PersonalInformation.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="instagram"
        className="btn btn-circle bg-pink-500 hover:bg-pink-600 text-white"
      >
        <FaInstagram className="text-2xl" />
      </a>

      {/* Facebook Button */}
      <a
        href={PersonalInformation.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
        className="btn btn-circle bg-blue-600 hover:bg-blue-700 text-white"
      >
        <FaFacebook className="text-2xl" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${PersonalInformation.telefon}`}
        aria-label="telefon"
        className="btn btn-circle bg-green-500 hover:bg-green-600 text-white"
      >
        <FaPhoneAlt className="text-2xl" />
      </a>

      <a
        href={`https://wa.me/${PersonalInformation.telefon.replace(/[ +]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="whatsapp"
        className="btn btn-circle bg-green-500 hover:bg-green-600 text-white"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${PersonalInformation.email}`}
        aria-label="email"
        className="btn btn-circle bg-yellow-500 hover:bg-yellow-600 text-white"
      >
        <FaEnvelope className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialContactButtons;
