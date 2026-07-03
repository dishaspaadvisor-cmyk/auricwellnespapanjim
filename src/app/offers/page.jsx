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
      <section className="relative h-[55vh]">
        <Image
          src="/heroimage/massage-dubai.jpg"
          alt="Offers"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white">
            Special Offers
          </h1>

          <p className="text-white mt-5 max-w-2xl text-lg">
            Discover our exclusive spa packages and limited-time offers.
            Relax, refresh, and save on your next visit.
          </p>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif">
              Exclusive Spa Offers
            </h2>

            <p className="text-gray-600 mt-4">
              Choose your favorite offer and book your appointment today.
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
    </>
  );
}