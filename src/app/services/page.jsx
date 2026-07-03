"use client";

import Image from "next/image";
import ServicesCard from "@/components/ServicesCard";

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[45vh] md:h-[70vh]">

                <Image
                    src="/heroimage/istockphoto-469640918-612x612.jpg"
                    alt="Spa Services"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">

                    <h1 className="text-4xl md:text-7xl font-serif text-white">
                        Our Services
                    </h1>

                    <p className="text-gray-200 text-base md:text-lg max-w-2xl mt-4 md:mt-6">
                        Experience luxury spa treatments designed to relax,
                        rejuvenate, and refresh your body and mind.
                    </p>

                </div>

            </section>

            {/* Description */}
            <section className="py-10 md:py-16 bg-[#faf8f6]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-serif mb-4 md:mb-6">
                        Premium Spa Treatments
                    </h2>

                    <p className="text-gray-600 leading-7 md:leading-8 text-sm md:text-base">
                        We offer a complete range of luxurious spa services
                        including massages, body treatments, facials, and
                        wellness therapies. Full Body Massage, Stress Relief
                        Massage, Pain Relief Massage, Neck & Shoulder Massage,
                        Spa Therapy, Balinese Massage, Hot Stone Massage,
                        Professional Massage Therapy, Wellness Center, Couple
                        Massage, Romantic Couple Massage, Spa Packages, Sensual
                        Massage, Full Body Sensual Massage, Body to Body Massage,
                        Female to Male Massage, Nuru Massage, Sandwich Massage,
                        Happy Ending Massage, Adult Massage, Adult Spa, Russian
                        Massage Girl, Relax with Beautiful Girls, Best Happy
                        Ending Massage.
                    </p>

                </div>
            </section>

            {/* Services Cards */}
            <ServicesCard />
        </>
    );
}