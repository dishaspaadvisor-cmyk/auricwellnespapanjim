"use client";

import Image from "next/image";
import { Star, CircleUserRound } from "lucide-react";

const reviews = [
  {
    name: "Rajan Singh",
    time: "11 months ago",
    review:
      "It was very nice. So much relaxing. Excellent service and professional staff. Highly recommended.",
    image: "/logo/unnamed.png", // Only first review has a profile image
  },
  {
    name: "Ishwor Gupta",
    time: "11 months ago",

    review:
      "Wonderful spa experience. Clean environment, friendly therapists and amazing massage.",
    image: "/logo/unnamed (3).png", // Only first review has a profile image
  },
  {
    name: "Vikas Sharma",
    time: "11 months ago",
    review:
      "Lovely experience. Very relaxing atmosphere and the massage was absolutely fantastic.",
        image: "/logo/unnamed (4).png", // Only first review has a profile image
  },
];

export default function GoogleReviews() {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: "url('/images/reviews-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-gray-900 mb-16 text-center">
          Authentic Experiences, Visible Results
        </h2>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Left Side */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900">EXCELLENT</h3>

            <div className="flex justify-center mt-4 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-7 h-7 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-600 text-lg">
              Based on <b>408 reviews</b>
            </p>

            <div className="mt-6 flex justify-center">
              <Image
                src="/logo/icon.svg"
                alt="Google"
                width={60}
                height={35}
              />
            </div>
          </div>

          {/* Review Cards */}
          <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="flex gap-4 items-center">
                    {/* Profile */}
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500 bg-gray-100 flex items-center justify-center">
                      {review.image ? (
                        <Image
                          src={review.image}
                          alt={review.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <CircleUserRound className="w-8 h-8 text-gray-400" />
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.time}</p>
                    </div>
                  </div>

                  {/* Google Logo */}
                  <Image
                    src="/logo/icon.svg"
                    alt="Google"
                    width={30}
                    height={30}
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
                <p className="text-gray-700 leading-7">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}