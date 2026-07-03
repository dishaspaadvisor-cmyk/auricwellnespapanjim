"use client";

import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";


const services = [
    {
        title: "Swedish Massage",
        image: "/servicesgallery/servicesgallery2.png",
  
    },
    {
        title: "Deep Tissue",
        image: "/servicesgallery/services4.png",
        description: "Relieve muscle pain and stiffness.",
    },
    {
        title: "Full Body Massage",
        image: "/servicesgallery/service7.jpg",
     
    },
    {
        title: "Female to Male Massage",
        image: "/servicesgallery/services1.png",
    
    },
    {
        title: "Hot Oil Massage",
        image: "/servicesgallery/services3.png",
       
    },
    {
        title: "Jacuzzi Massage",
        image: "/servicesgallery/images (2).jpg",

    },
    {
        title: "Couple Spa",
        image: "/servicesgallery/caption.jpg",

    },
    {
        title: "Thai Massage",
        image: "/servicesgallery/images (4).jpg",

    },
    {
        title: "Foot Reflexology",
        image: "/servicesgallery/service5.jpg",
     
    },
];


export default function ServicesCard() {
    return (
        <section className="py-20 bg-[#faf7f4]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                        Our Spa Services
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our range of luxurious spa treatments designed to
                        relax, rejuvenate and refresh your body & mind.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={500}
                                    height={450}
                                    className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-2xl text-center font-serif text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#A67D7A]">
                                    {service.title}
                                </h3>

                                {/* Buttons */}
                                <div className="flex gap-3">

                                    <a
                                        href="https://wa.me/918422902212?text=Hello%20I%20am%20interested%20in%20your%20spa%20service"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                                    >
                                        <FaWhatsapp />
                                        WhatsApp
                                    </a>

                                    <a
                                        href="tel:+918422902212"
                                        className="flex-1 flex items-center justify-center gap-2 bg-[#A67D7A] hover:bg-[#8b6664] text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
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
    );
}