"use client";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import AboutPage from "./about/page";
import ServicesCard from "@/components/ServicesCard";
import GoogleReviews from "@/components/GoogleReviews";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";


export default function Home() {

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


  const offers = [
    "/offer/Auric_Wellness_Panjim_Offer_1.png",
    "/offer/Auric_Wellness_Panjim_Offer_2.png",
    "/offer/Auric_Wellness_Panjim_Offer_3.png",
  ];

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
    <main className="w-full overflow-x-hidden">

      <section>
        <Hero />
      </section>

      <section className="py-8 md:py-12">
        <FeatureCards />
      </section>
      {/* aboutsection */}
      <section className="py-8 md:py-12">
        <AboutPage />
      </section>
      {/* service section */}
      <section className="py-8 md:py-12">
        <ServicesCard />
      </section>

      {/* Gallery */}
      <section className="pb-20 bg-[#faf8f6]">
        <section className="py-14 md:py-16 bg-[#faf8f6]">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2d2926]">
              Explore Our Spa
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Every corner of our spa is thoughtfully designed to provide comfort,
              elegance, and complete relaxation.in panjim, goa. we offer a wide range of spa services including massages, facials, body treatments, and more. our experienced therapists use high-quality products and techniques to ensure a rejuvenating experience for our clients.
            </p>
          </div>
        </section>
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

      {/* Offers Section */}
      <section className="py-20 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif">
              Exclusive Spa Offers
            </h2>

            <p className="text-gray-600 mt-4">
              Choose your favorite offer and book your appointment today in Panjim, Goa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <Image
                  src={offer}
                  alt={`Offer ${index + 1}`}
                  width={500}
                  height={650}
                  className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
                />

                <div className="p-6">

                  <div className="flex gap-3">

                    <a
                      href="https://wa.me/918422902212?text=Hello%20I%20am%20interested%20in%20your%20spa%20offer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full transition"
                    >
                      <FaWhatsapp />
                      WhatsApp
                    </a>

                    <a
                      href="tel:+918422902212"
                      className="flex-1 flex justify-center items-center gap-2 bg-[#A67D7A] hover:bg-[#8b6664] text-white py-3 rounded-full transition"
                    >
                      <FaPhoneAlt />
                      Call
                    </a>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side */}
            <div>

              <h2 className="text-4xl font-serif mb-8">
                Contact Information
              </h2>

              <div className="space-y-5 text-gray-700">

                <p className="flex gap-3">
                  <FaMapMarkerAlt className="text-[#A67D7A] mt-1" />
                  103, First Floor, GERA's Emperium Premio, House No. KP-16-88, Survey No. 13/1-A
                  (Part), Village Panelim, Kadamba Plateau, Panaji,
                  North Goa, Goa - 403006
                </p>

                <p className="flex gap-3">
                  <FaPhoneAlt className="text-[#A67D7A]" />
                  +91 8422902212
                </p>

                <p className="flex gap-3">
                  <FaEnvelope className="text-[#A67D7A]" />
                  auricwellnessspa.panjim@gmail.com
                </p>

                <p>
                  <strong>Working Hours</strong><br />
                  Monday - Sunday<br />
                  10:00 AM - 10:00 PM
                </p>

              </div>

              {/* Social Icons */}

              <div className="flex gap-4 mt-8">

                <a href="#" className="w-10 h-10 rounded-full bg-[#A67D7A] text-white flex items-center justify-center">
                  <FaFacebookF />
                </a>

                <a href="#" className="w-10 h-10 rounded-full bg-[#A67D7A] text-white flex items-center justify-center">
                  <FaInstagram />
                </a>

                <a href="#" className="w-10 h-10 rounded-full bg-[#A67D7A] text-white flex items-center justify-center">
                  <FaTwitter />
                </a>

              </div>

              {/* Map */}

              <iframe
                className="w-full h-72 rounded-xl mt-8"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.8363413561774!2d73.8890263!3d15.4922132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbf1e753d9ba7%3A0xb8bab8de7c77defb!2sGera%E2%80%99s%20Imperium%20Premio!5e1!3m2!1sen!2sin!4v1782902281923!5m2!1sen!2sin"
              ></iframe>

            </div>

            {/* Right Side */}

            <div>

              <Image
                src="/about/photo-1620733723572-11c53f73a416.avif"
                alt="Contact"
                width={600}
                height={400}
                className="rounded-2xl mb-8 w-full h-72 object-cover"
              />

              <h2 className="text-4xl font-serif mb-6">
                Ask a Question
              </h2>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-full px-5 py-3"
                />

                <div className="grid md:grid-cols-2 gap-4">

                  <input
                    type="text"
                    placeholder="Phone"
                    className="border rounded-full px-5 py-3"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="border rounded-full px-5 py-3"
                  />

                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border rounded-full px-5 py-3"
                />

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full border rounded-2xl px-5 py-3"
                ></textarea>

                <a
                  href="https://wa.me/918422902212?text=Hello I want to book an appointment."
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full"
                >
                  <FaWhatsapp />
                  Send on WhatsApp
                </a>

              </form>

            </div>

          </div>

        </div>
      </section>


      <section className="py-8 md:py-12">
        <GoogleReviews />
      </section>


    </main>
  );
}