"use client";

import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const offers = [
  "/offer/Auric_Wellness_Panjim_Offer_1.png",
  "/offer/Auric_Wellness_Panjim_Offer_2.png",
  "/offer/Auric_Wellness_Panjim_Offer_3.png",
];

export default function OffersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[55vh]">

        <Image
          src="/heroimage/massage-dubai.jpg"
          alt="Offers"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">

          <h1 className="text-4xl md:text-7xl font-serif text-white">
            Special Offers
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl text-base md:text-lg">
            Discover our exclusive spa packages and limited-time offers.
            Relax, refresh and save on your next visit.
          </p>

        </div>

      </section>

      {/* Offers */}
      <section className="py-12 md:py-20 bg-[#faf8f6]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-10 md:mb-14">

            <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
              Exclusive Spa Offers
            </h2>

            <p className="text-gray-600 mt-3">
              Choose your favorite offer and book your appointment today.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {offers.map((offer, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Image */}
                <div className="overflow-hidden bg-white">

                  <Image
                    src={offer}
                    alt={`Offer ${index + 1}`}
                    width={600}
                    height={850}
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                  />

                </div>

                {/* Buttons */}
                <div className="p-5">

                  <div className="flex gap-3">

                    <a
                      href="https://wa.me/918422902212?text=Hello%20I%20am%20interested%20in%20your%20spa%20offer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="tel:+918422902212"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#A67D7A] hover:bg-[#8b6664] text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                    >
                      <FaPhoneAlt />
                      <span>Call</span>
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}