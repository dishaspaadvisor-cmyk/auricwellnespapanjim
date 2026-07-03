import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactCard() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl font-serif mb-8">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-700">

              <p className="flex items-start gap-4 text-gray-700 leading-7">
                <FaMapMarkerAlt
                  size={22}
                  className="text-[#A67D7A] flex-shrink-0 mt-1"
                />

                <span>
                  103, First Floor, GERA's Emperium Premio, House No. KP-16-88,
                  Survey No. 13/1-A (Part), Village Panelim, Kadamba Plateau,
                  Panaji, North Goa, Goa - 403006
                </span>
              </p>

              <p className="flex gap-3">
                <FaPhoneAlt className="text-[#A67D7A]" />
                +91 8422902212
              </p>

              <p className="flex gap-3">
                <FaEnvelope className="text-[#A67D7A]" />
                auricwellnessspa.panjim@gmail.com
              </p>

              <p>
                <strong>Working Hours</strong><br />
                Monday - Sunday<br />
                10:00 AM - 10:00 PM
              </p>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a href="https://www.facebook.com/profile.php?id=61591388791802" className="w-10 h-10 rounded-full bg-[#A67D7A] text-white flex items-center justify-center">
                <FaFacebookF />
              </a>

              <a href="https://www.instagram.com/auricwellnessspa.panjim/" className="w-10 h-10 rounded-full bg-[#A67D7A] text-white flex items-center justify-center">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/in/auric-wellness-spa-panjim-75207a41a/" className="w-10 h-10 rounded-full bg-[#A67D7A] text-white flex items-center justify-center">
                <FaLinkedin />
              </a>

            </div>

            {/* Map */}

            <iframe
              className="w-full h-72 rounded-xl mt-8"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.8363413561774!2d73.8890263!3d15.4922132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbf1e753d9ba7%3A0xb8bab8de7c77defb!2sGera%E2%80%99s%20Imperium%20Premio!5e1!3m2!1sen!2sin!4v1782902281923!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>

          </div>

          {/* Right Side */}

          <div>

            <Image
              src="/about/Deep Tissue Massage.jpg"
              alt="Contact"
              width={600}
              height={400}
              className="rounded-2xl mb-8 w-full h-72 object-cover"
            />

            <h2 className="text-4xl font-serif mb-6">
              Ask a Question
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-full px-5 py-3"
              />

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Phone"
                  className="border rounded-full px-5 py-3"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-full px-5 py-3"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-full px-5 py-3"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border rounded-2xl px-5 py-3"
              ></textarea>

              <a
                href="https://wa.me/971527984943?text=Hello I want to book an appointment."
                target="_blank"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full"
              >
                <FaWhatsapp />
                Send on WhatsApp
              </a>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}