"use client";

import Image from "next/image";
import { Star, CircleUserRound } from "lucide-react";

const reviews = [
  {
    name: "Rajan Singh",
    time: "11 months ago",
    review:
      "It was very nice. So much relaxing. Excellent service and professional staff. Highly recommended.",
    image: "/logo/unnamed.png",
  },
  {
    name: "Ishwor Gupta",
    time: "11 months ago",
    review:
      "Wonderful spa experience. Clean environment, friendly therapists and amazing massage.",
    image: "/logo/unnamed (3).png",
  },
  {
    name: "Vikas Sharma",
    time: "11 months ago",
    review:
      "Lovely experience. Very relaxing atmosphere and the massage was absolutely fantastic.",
    image: "/logo/unnamed (4).png",
  },
];

export default function GoogleReviews() {
  return (
    <section
      className="relative py-16 lg:py-20"
      style={{
        backgroundImage: "url('/images/reviews-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">
            Authentic Experiences, Visible Results
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted by hundreds of happy guests for our premium spa therapies
            and relaxing wellness experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Google Rating Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              EXCELLENT
            </h3>

            <div className="flex justify-center gap-1 mt-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-7 h-7 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-600 text-lg mt-5">
              Based on <span className="font-bold">408 Reviews</span>
            </p>

            <div className="mt-8">
              <Image
                src="/logo/icon.svg"
                alt="Google Reviews"
                width={130}
                height={50}
                className="object-contain"
              />
            </div>

          </div>

          {/* Reviews */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-6 h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                {/* Header */}
                <div className="flex justify-between items-start">

                  <div className="flex items-center gap-4">

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
                      <h4 className="font-semibold text-lg text-gray-900">
                        {review.name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        {review.time}
                      </p>
                    </div>

                  </div>

                  <Image
                    src="/logo/icon.svg"
                    alt="Google"
                    width={32}
                    height={32}
                  />

                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-5 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 leading-7 flex-1">
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