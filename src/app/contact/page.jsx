import Image from "next/image";
import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}

      <section className="relative h-[50vh]">

        <Image
          src="/heroimage/images.jpg"
          alt="Contact"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">

          <h1 className="text-white text-5xl md:text-6xl font-serif">
            Contact Us
          </h1>

          <p className="text-white mt-4 max-w-2xl">
            We'd love to hear from you. Contact us for appointments and enquiries.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <ContactCard />

    </>
  );
}