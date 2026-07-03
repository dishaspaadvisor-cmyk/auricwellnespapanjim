"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const galleryImages = [
  "/services/servicesimage (1).jpg",
  "/services/servicesimage (4).webp",
  "/services/servicesimage (10).webp",
  "/services/servicesimage (12).webp",
  "/services/servicesimage (4).jpg",
  "/services/servicesimage (2).webp",
  "/services/servicesimage (9).webp",
  "/services/servicesimage (6).jpg",
  "/services/servicesimage (11).webp",
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
        <Image
          src="/heroimage/heroimage1.png"
          alt="Gallery"
          fill
          priority
          quality={100}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-serif">
            Our Gallery
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl text-sm sm:text-base md:text-lg">
            Discover our luxurious spa atmosphere, elegant interiors and
            relaxing experiences.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-16 bg-[#faf8f6]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#2d2926]">
            Explore Our Spa
          </h2>

          <p className="text-gray-600 mt-5 leading-8">
            Every corner of our spa is designed to create a peaceful,
            luxurious and unforgettable experience.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-12 md:pb-20 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={700}
                  height={900}
                  quality={100}
                  sizes="(max-width:640px) 50vw,
                         (max-width:1024px) 50vw,
                         33vw"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Desktop Overlay */}
                <div className="absolute inset-0 bg-transparent lg:bg-black/0 lg:group-hover:bg-black/20 transition-all duration-300" />

                {/* Desktop Only Button */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-300">

                  <button
                    type="button"
                    className="bg-white text-[#A67D7A] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#A67D7A] hover:text-white transition"
                  >
                    View Image
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl hover:text-red-400 transition z-50"
          >
            <FaTimes />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 md:left-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition z-50"
          >
            <FaChevronLeft className="text-xl md:text-3xl" />
          </button>

          {/* Image */}
          <div
            className="w-full max-w-6xl px-10 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedIndex]}
              alt={`Gallery ${selectedIndex + 1}`}
              width={1800}
              height={2400}
              quality={100}
              priority
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 md:right-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition z-50"
          >
            <FaChevronRight className="text-xl md:text-3xl" />
          </button>
        </div>
      )}
    </>
  );
}