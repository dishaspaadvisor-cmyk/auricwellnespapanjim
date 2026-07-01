"use client";

import Link from "next/link";
import { Heart, Star, CalendarDays } from "lucide-react";

const cards = [
  {
    title: "About Us",
    description:
      "Learn about SpaPlanet, our experienced therapists, premium facilities, and our commitment to your wellness journey.",
    icon: Heart,
    button: "Know More",
    href: "/about",
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Customer Reviews",
    description:
      "See why our guests trust SpaPlanet for luxurious massage therapies, relaxation, and exceptional service.",
    icon: Star,
    button: "Read Reviews",
    href: "/reviews",
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Book Now",
    description:
      "Reserve your massage or wellness treatment online and enjoy a relaxing experience tailored just for you.",
    icon: CalendarDays,
    button: "Book Appointment",
    href: "/contact",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">

          <span className="inline-block rounded-full bg-pink-50 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-pink-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Experience Luxury Wellness
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-7">
            Discover our premium spa services, trusted customer experiences,
            and easy online appointment booking.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl ${card.color}`}
                >
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base">
                  {card.description}
                </p>

                {/* Button */}
                <Link
                  href={card.href}
                  className="inline-flex items-center justify-center mt-6 rounded-full bg-amber-500 hover:bg-pink-700 text-white font-semibold px-6 py-3 transition w-full sm:w-auto"
                >
                  {card.button}
                </Link>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}