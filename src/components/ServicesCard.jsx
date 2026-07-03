import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const services = [
    {
        title: "Swedish Massage",
        image: "/servicesgallery/servicesgallery2.png",
        description: "Relax your body with our Swedish Massage therapy.",
    },
    {
        title: "Deep Tissue",
        image: "/servicesgallery/services4.png",
        description: "Relieve muscle pain and stiffness.",
    },
    {
        title: "Full Body Massage",
        image: "/servicesgallery/service7.jpg",
        description: "Warm stones provide deep relaxation.",
    },
    {
        title: "Female to Male Massage",
        image: "/servicesgallery/services1.png",
        description: "Exfoliating treatment for glowing skin.",
    },
    {
        title: "Hot Oil Massage",
        image: "/servicesgallery/services3.png",
        description: "Warm oils and soothing techniques for deep relaxation.",
    },
    {
        title: "Jacuzzi Massage",
        image: "/servicesgallery/images (2).jpg",
        description: " Luxury hydrotherapy for complete rejuvenation.",
    },
    {
        title: "Couple Spa",
        image: "/servicesgallery/caption.jpg",
        description: "Enjoy a romantic spa experience together.",
    },
    {
        title: "Thai Massage",
        image: "/servicesgallery/images (4).jpg",
        description: "Professional Thai massage for ultimate relaxation.",
    },
    {
        title: "Foot Reflexology",
        image: "/servicesgallery/service5.jpg",
        description: "Pressure point therapy for total wellness.",
    },
];

export default function ServicesCard() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif">
                        Our Spa Services
                    </h2>

                    <p className="text-gray-600 mt-4">
                        Explore our range of luxurious spa treatments designed to relax, rejuvenate, and refresh your body and mind.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl shadow-lg"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={500}
                                height={600}
                                className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 lg:bg-black/20 lg:group-hover:bg-black/70 transition-all duration-500"></div>

                            {/* Content */}
                            <div
                                className="
    absolute inset-0
    flex flex-col justify-end lg:justify-center items-center
    text-center
    p-5 sm:p-6 lg:p-8

    opacity-100
    lg:opacity-0
    lg:group-hover:opacity-100

    transition-all duration-500
  "
                            >
                                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-serif mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-200 text-sm sm:text-base leading-6 mb-5">
                                    {service.description}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

                                    <a
                                        href="https://wa.me/918422902212?text=Hello%20I%20am%20interested%20in%20your%20spa%20service"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full transition-all duration-300"
                                    >
                                        <FaWhatsapp size={18} />
                                        WhatsApp
                                    </a>

                                    <a
                                        href="tel:+918422902212"
                                        className="flex items-center justify-center gap-2 bg-[#A67D7A] hover:bg-[#8b6664] text-white px-5 py-3 rounded-full transition-all duration-300"
                                    >
                                        <FaPhoneAlt size={16} />
                                        Call
                                    </a>

                                </div>
                            </div>

                            {/* Desktop Title Only */}
                            <div
                                className="
    absolute bottom-6 left-6
    hidden lg:block
    lg:group-hover:opacity-0
    transition-all duration-300
  "
                            >
                                <h3 className="text-white text-2xl font-semibold">
                                    {service.title}
                                </h3>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}