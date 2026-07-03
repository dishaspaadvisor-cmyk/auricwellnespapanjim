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
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";


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
      <section className="pb-12 md:pb-20 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
              Our Spa Gallery
            </h2> 
            


            <p className="text-gray-600 max-w-2xl mx-auto">
              Full Body Massage,Thai Massage,Deep Tissue Massage,
              Swedish Massage,Spa Near Me,Massage Near Me

            </p>
          </div>

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

      {/* Offers Section */}
  
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side */}
            <div>

              <h2 className="text-4xl font-serif mb-8">
                Contact Information
              </h2>

              <div className="space-y-5 text-gray-700">

            <p className="flex items-start gap-4 text-gray-700 leading-7">
                <FaMapMarkerAlt
                  size={22}
                  className="text-[#A67D7A] flex-shrink-0 mt-1"
                />

                <span>
                  103, First Floor, GERA's Emperium Premio, House No. KP-16-88,
                  Survey No. 13/1-A (Part), Village Panelim, Kadamba Plateau,
                  Panaji, North Goa, Goa - 403006
                </span>
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
                src="/about/Deep Tissue Massage.jpg"
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