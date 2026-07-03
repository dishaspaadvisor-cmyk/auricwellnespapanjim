"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-8 z-[9999] flex flex-col gap-4">

      {/* WhatsApp */}
      <a
        href="https://wa.me/918422902212?text=Hello%20I%20want%20to%20book%20a%20spa%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl animate-bounce hover:animate-none hover:scale-110 hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Call */}
      <a
        href="tel:+918422902212"
        aria-label="Call"
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#A67D7A] text-white shadow-2xl animate-bounce hover:animate-none hover:scale-110 hover:bg-[#8b6664] transition-all duration-300"
        style={{ animationDelay: "0.4s" }}
      >
        <FaPhoneAlt className="text-2xl" />
      </a>

    </div>
  );
}