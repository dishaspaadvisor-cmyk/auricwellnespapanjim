"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroData } from "@/data/spadata";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Images */}
      <div className="absolute inset-4 md:inset-6 lg:inset-8">
        {heroData.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 rounded-[34px] bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="place-items-center elementor-element elementor-element-cb0ed39 e-con-full elementor-hidden-tablet elementor-hidden-mobile animated-fast e-flex cmsmasters-block-default e-con e-child animated fadeIn">
        <div className="max-w-2xl w-[80%] md:w-[80%] lg:w-[70%] rounded-[24px] p-0 animate-fade-up">

          <span className="inline-flex items-center rounded-full border border-white/40 px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-[2.5px] text-white">
            {heroData.subtitle}
          </span>

          <h1 className="mt-5 whitespace-pre-line text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white animate-fade-up delay-200">
            {heroData.title}
          </h1>

          <p className="mt-4 max-w-lg text-sm md:text-base leading-7 text-gray-100 animate-fade-up delay-500">
            {heroData.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3 animate-fade-up delay-700">
            <Link
              href={heroData.primaryButton.href}
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-pink-700"
            >
              {heroData.primaryButton.text}
            </Link>

            <Link
              href={heroData.secondaryButton.href}
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              {heroData.secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroData.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}