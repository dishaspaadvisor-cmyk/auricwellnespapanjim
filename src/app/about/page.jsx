"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="bg-[#faf7f4] py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN */}
                    <div className="space-y-8">

                        {/* Image */}
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <Image
                                src="/about/aboutimage.png"
                                alt="Auric Wellness Spa"
                                width={700}
                                height={900}
                                priority
                                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Our Story */}
                        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">

                            <span className="text-[#A67D7A] uppercase tracking-[3px] text-sm font-semibold">
                                Our Story
                            </span>

                            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#2d2926]">
                                Relax. Refresh. Rejuvenate.
                            </h2>

                            <div className="w-20 h-1 bg-[#A67D7A] rounded-full mt-5 mb-6"></div>

                            <p className="text-gray-600 leading-8">
                                Auric Wellness Spa was founded with a passion for creating
                                a peaceful sanctuary where every guest experiences complete
                                relaxation and wellness. Every treatment is thoughtfully
                                designed to restore balance, reduce stress, and rejuvenate
                                both body and mind.
                            </p>

                            <p className="text-gray-600 leading-8 mt-5">
                                Our experienced therapists combine traditional healing
                                techniques with modern spa therapies to deliver a luxurious,
                                personalized experience in a calm and elegant environment.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-8">

                        {/* About */}
                        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">

                            <span className="text-[#A67D7A] uppercase tracking-[3px] text-sm font-semibold">
                                About Us
                            </span>

                            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2d2926]">
                                Luxury Spa Experience
                            </h1>

                            <div className="w-24 h-1 bg-[#A67D7A] rounded-full mt-5 mb-6"></div>

                            <p className="text-gray-600 leading-8">
                                At Auric Wellness Spa, wellness is more than a treatment—it is
                                a lifestyle. We provide a luxurious escape where guests can
                                unwind, recharge, and reconnect with themselves through premium
                                spa therapies in Panjim, Goa.
                            </p>

                            <p className="text-gray-600 leading-8 mt-5">
                                Our treatments include Swedish Massage, Deep Tissue Massage,
                                Full Body Massage, Couple Massage, Aromatherapy, Hot Stone
                                Therapy, Wellness Spa Treatments, Relaxation Massage, and
                                personalized wellness therapies delivered by experienced
                                therapists.
                            </p>

                            <p className="text-gray-600 leading-8 mt-5">
                                Whether you're seeking stress relief, relaxation, or a complete
                                wellness journey, our elegant interiors, soothing ambience, and
                                dedicated hospitality create an unforgettable spa experience.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}