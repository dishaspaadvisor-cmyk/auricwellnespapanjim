import Image from "next/image";
import ServicesCard from "@/components/ServicesCard";

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}

            <section className="relative h-[70vh]">

                <Image
                    src="/heroimage/6879c37f4455261d79f409cc_1752810367366.jpg"
                    alt="Spa Services"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">

                    <h1 className="text-white text-5xl md:text-7xl font-serif">
                        Our Services
                    </h1>

                    <p className="text-gray-200 max-w-2xl mt-6 text-lg">
                        Experience luxury spa treatments designed to relax,
                        rejuvenate, and refresh your body and mind.
                    </p>

                </div>

            </section>

            {/* Description */}

            <section className="py-16 bg-[#faf8f6]">
                <div className="max-w-4xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-serif mb-6">
                        Premium Spa Treatments
                    </h2>

                    <p className="text-gray-600 leading-8">
                        We offer a complete range of luxurious spa services
                        including massages, body treatments, facials, and
                        wellness therapies.Full Body Massage, Stress Relief Massage,Pain Relief Massage
                        Pain Relief Massage, Neck & Shoulder Massage ,Spa Therapy,Balinese Massage
                         Hot Stone Massage,Professional Massage Therapi,Wellness Center Couple Massage
                        Romantic Couple Massage,Spa Packages,Sensual Massage, Full Body Sensual Massage
                        Body to Body MassageFemale to Male Massage, Nuru Massage, Sandwich MassageHappy Ending Massage
                         Happy Ending Massage, Adult Massage, Adult Spa,  Russian Massage Girl,Relax with Beautiful Girls,Best Happy Ending Massage
                    
                       
                       
                       
                       
                      
                        
                        
                       
                    </p>

                </div>
            </section>

            {/* Services Cards */}

            <ServicesCard />
        </>
    );
}