"use client";

import { useState } from "react";


import Image from "next/image";
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
        if (selectedIndex === null) return;
        setSelectedIndex(
            selectedIndex === 0
                ? galleryImages.length - 1
                : selectedIndex - 1
        );
    };

    const nextImage = () => {
        if (selectedIndex === null) return;
        setSelectedIndex(
            selectedIndex === galleryImages.length - 1
                ? 0
                : selectedIndex + 1
        );
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[45vh] sm:h-[55vh] md:h-[65vh]">
                <Image
                    src="/heroimage/hero1.png"
                    alt="Gallery"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-serif">
                        Our Gallery
                    </h1>

                    <p className="text-white mt-4 md:mt-6 max-w-2xl text-base md:text-lg">
                        Discover the peaceful atmosphere, elegant interiors, and luxurious
                        spa experiences through our gallery.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-14 md:py-16 bg-[#faf8f6]">
                <div className="max-w-3xl mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#2d2926]">
                        Explore Our Spa
                    </h2>

                    <p className="text-gray-600 mt-5 leading-8">
                        Every corner of our spa is thoughtfully designed to provide comfort,
                        elegance, and complete relaxation.
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="pb-20 bg-[#faf8f6]">
                <div className="max-w-7xl mx-auto px-5 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    width={600}
                                    height={600}
                                    className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 lg:group-hover:bg-black/60 transition-all duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500">

                 

                                    <h3 className="text-white text-xl md:text-2xl font-semibold mt-4">
                                        Luxury Spa
                                    </h3>

                                    <button className="mt-3 bg-white text-[#A67D7A] px-5 py-2 rounded-full font-medium hover:bg-[#A67D7A] hover:text-white transition">
                                        View Image
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    {/* Close */}
                    <button
                        onClick={closeModal}
                        className="absolute top-5 right-5 text-white text-3xl hover:text-red-400 transition z-50"
                    >
                        <FaTimes />
                    </button>

                    {/* Previous */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-3 md:left-8 text-white text-2xl md:text-4xl bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Image */}
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={galleryImages[selectedIndex]}
                            alt="Gallery Image"
                            width={1400}
                            height={1000}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                        />
                    </div>

                    {/* Next */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-3 md:right-8 text-white text-2xl md:text-4xl bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </>
    );
}