"use client";

import Link from "next/link";

import { heroData } from "@/data/spadata";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Images */}
      <div className="absolute inset-0 md:inset-6 lg:inset-8">

        {heroData.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 md:rounded-[34px] bg-cover bg-center transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${isMobile ? image.mobile : image.desktop
                })`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/45 md:rounded-[34px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl px-6">

        <div className="max-w-3xl">
          <h1 className="mt-16 text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {heroData.title}
          </h1>

        </div>

      </div>

      {/* Bottom Buttons */}
      <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-30 w-full px-4">

        <div className="mx-auto flex flex-wrap justify-center gap-3 max-w-5xl">
          <a
            href="https://wa.me/918422902212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[150px] sm:flex-none flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="tel:+918422902212"
            className="flex-1 min-w-[150px] sm:flex-none flex items-center justify-center gap-2 rounded-full bg-[#A67D7A] px-6 py-3 font-semibold text-white hover:bg-[#8b6664] transition"
          >
            <FaPhoneAlt />
            Call
          </a>



        </div>

      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/3 -translate-x-1/3 flex gap-3 z-30">

        {heroData.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${currentSlide === index
              ? "bg-white w-8"
              : "bg-white/50 w-3"
              }`}
          />
        ))}

      </div>

    </section>
  );
}