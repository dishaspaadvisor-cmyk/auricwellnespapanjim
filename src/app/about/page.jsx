import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="bg-[#faf7f4] py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div>

                        {/* Main Image */}
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <Image
                                src="/about/Deep Tissue Massage.jpg"
                                alt="Massage"
                                width={370}
                                height={320}
                                className="w-full h-36 sm:h-48 lg:h-80 object-cover object-top hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/* Our Story */}
                        <div className="mt-8 md:mt-10">

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2d2926]">
                                Our Story
                            </h2>

                            <div className="w-20 h-1 bg-[#A67D7A] rounded-full mt-4 mb-6"></div>

                            <p className="text-gray-600 leading-7 md:leading-8 text-sm sm:text-base">
                                Ritual Spa was founded with a passion for creating a peaceful
                                sanctuary where every guest can experience true relaxation and
                                wellness. Every treatment is designed to restore balance,
                                relieve stress, and rejuvenate both body and mind.
                            </p>

                            <p className="text-gray-600 leading-7 md:leading-8 text-sm sm:text-base mt-5">
                                Our experienced therapists combine traditional healing
                                techniques with modern spa therapies, delivering an unforgettable
                                luxury experience in a calm and elegant environment.
                            </p>

                        </div>

                        {/* Gallery Images */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-8 md:mt-10">

                            <div className="overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src="/about/t3.webp"
                                    alt="Massage"
                                    width={350}
                                    height={300}
                                    className="w-full h-36 sm:h-48 lg:h-60 object-cover object-top hover:scale-110 transition duration-500"
                                />
                            </div>

                            <div className="overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src="/about/t21.webp"
                                    alt="Massage"
                                    width={350}
                                    height={300}
                                    className="w-full h-36 sm:h-48 lg:h-60 object-cover object-top hover:scale-110 transition duration-500"
                                />
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2d2926]">
                            About Us
                        </h1>

                        <div className="w-24 h-1 bg-[#A67D7A] rounded-full mt-4 mb-6"></div>

                        <p className="text-gray-600 leading-7 md:leading-8 text-sm sm:text-base">
                            At Ritual Spa, wellness is more than a treatment—it's a lifestyle.
                            We provide a luxurious escape where guests can unwind, recharge,
                            and reconnect with themselves through premium spa therapies in panjim goa.
                        </p>

                        <p className="text-gray-600 leading-7 md:leading-8 text-sm sm:text-base mt-5">
                            Our carefully curated treatments include Swedish Massage, Deep
                            Sensual Massage ,Sensual Spa,Full Body Sensual Massage,Adult Massage
                            Adult Spa,Body to Body Massage,B2B Massage, Nuru Massage,Sandwich Massage, Happy Ending Massage
                          
                            
                           
                          
                 

                        </p>

                        <p className="text-gray-600 leading-7 md:leading-8 text-sm sm:text-base mt-5">
                            Our elegant spa environment combines soothing interiors, calming
                            aromas,   Best Happy Ending Massage,Female to Male Massage, Russian Massage Girl,  Relax with Beautiful Girls,Couple Romantic Massage,and
                             personalized care to create an unforgettable
                            experience for every guest in panjim goa .
                        </p>

                        <p className="text-gray-600 leading-7 md:leading-8 text-sm sm:text-base mt-5">
                            Whether you're looking for deep relaxation, stress relief, or a
                            complete wellness journey, Ritual Spa is dedicated to providing
                            outstanding hospitality with every visit in panjim goa .
                        </p>

                        {/* Second Image */}
                        <div className="mt-8 md:mt-12 overflow-hidden rounded-3xl shadow-xl">
                            <Image
                                src="/about/t32.webp"
                                alt="Massage"
                                width={400}
                                height={350}
                                className="w-full h-50 sm:h-48 lg:h-80 object-cover object-top hover:scale-110 transition duration-500"
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}