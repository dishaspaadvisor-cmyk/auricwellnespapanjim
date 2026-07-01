"use client";

import Image from "next/image";
import {
  Star,
  CircleUserRound,
} from "lucide-react";

const reviews = [
  {
    name: "Vinod singh",
    time: "11 months ago",
    review:
      "It was very nice. So much relaxing. Excellent service and professional staff. Highly recommended.",
  },
  {
    name: "Robin gupta",
    time: "11 months ago",
    review:
      "Wonderful spa experience. Clean environment, friendly therapists and amazing massage.",
  },
  {
    name: "rakesh sharma",
    time: "11 months ago",
    review:
      "Lovely experience. Very relaxing atmosphere and the massage was absolutely fantastic.",
  },
];

export default function GoogleReviews() {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: "url('/images/reviews-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-gray-900 mb-16">
          Authentic experiences, visible results
        </h2>

        <div className="grid lg:grid-cols-4 gap-8 items-center">

          {/* Left Side */}
          <div className="text-center lg:text-left">

            <h3 className="text-3xl font-bold text-gray-900">
              EXCELLENT
            </h3>

            <div className="flex justify-center lg:justify-start mt-4 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-600 text-lg">
              Based on <b>408 reviews</b>
            </p>

            <div className="mt-6">
              <Image
                src="/logo/icon.svg"
                alt="Google"
                width={150}
                height={50}
              />
            </div>

          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-6 hover:-translate-y-2 transition duration-300"
              >
                {/* Header */}

                <div className="flex justify-between items-start">

                  <div className="flex gap-4">

                    <CircleUserRound className="w-14 h-14 text-gray-400" />

                    <div>
                      <h4 className="font-semibold text-lg">
                        {review.name}
                      </h4>

                      <p className="text-gray-500 text-sm">
                        {review.time}
                      </p>
                    </div>

                  </div>

                  <Image
                    src="/logo/icon.svg"
                    alt="Google"
                    width={28}
                    height={28}
                  />

                </div>

                {/* Stars */}

                <div className="flex mt-5 mb-4">

                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

                {/* Review */}

                <p className="text-gray-700 leading-7">
                  {review.review}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}