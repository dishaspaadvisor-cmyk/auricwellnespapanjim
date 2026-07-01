import Image from "next/image";

export const metadata = {
  title: "Privacy Policy & Terms | Your Spa Name",
  description:
    "Read our Privacy Policy and Terms & Conditions before using our website or booking spa services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#faf7f4]">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/privacy-bg.jpg"
          alt="Spa Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Privacy Policy & Terms
          </h1>

          <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
            Your privacy and trust are important to us. Please read our
            policies before booking our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Privacy Policy */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16">

          <h2 className="text-3xl font-bold text-[#b8860b] mb-8">
            Privacy Policy
          </h2>

          <div className="space-y-8 text-gray-700 leading-8">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Information We Collect
              </h3>

              <p>
                We may collect your name, phone number, email address, booking
                details, and any information you voluntarily provide while
                contacting or booking services with us.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                How We Use Your Information
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Manage appointments and bookings.</li>
                <li>Respond to customer inquiries.</li>
                <li>Provide customer support.</li>
                <li>Improve our spa services.</li>
                <li>Send booking confirmations when necessary.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Data Security
              </h3>

              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, misuse, or disclosure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Third-Party Services
              </h3>

              <p>
                Our website may use trusted third-party services such as Google
                Maps, WhatsApp, and analytics tools to improve your experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Cookies
              </h3>

              <p>
                We may use cookies to improve website functionality and user
                experience. You can disable cookies in your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Contact Us
              </h3>

              <p>
                If you have any questions regarding this Privacy Policy, please
                contact us through our website or by phone.
              </p>
            </div>

          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

          <h2 className="text-3xl font-bold text-[#b8860b] mb-8">
            Terms & Conditions
          </h2>

          <div className="space-y-8 text-gray-700 leading-8">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Booking Policy
              </h3>

              <p>
                Appointments are subject to availability. We recommend booking
                in advance to secure your preferred time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Cancellation Policy
              </h3>

              <p>
                Please notify us as early as possible if you need to cancel or
                reschedule your appointment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Payments
              </h3>

              <p>
                Payment for spa services must be completed as per the agreed
                payment method before or after the service, depending on the
                booking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Health Information
              </h3>

              <p>
                Clients are responsible for informing our staff about any
                allergies, medical conditions, pregnancy, or injuries before
                receiving treatment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Website Usage
              </h3>

              <p>
                You agree to use this website only for lawful purposes and not
                engage in any activity that could harm or disrupt the website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Changes to Policies
              </h3>

              <p>
                We reserve the right to update these policies at any time.
                Continued use of our website indicates acceptance of the updated
                policies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Acceptance
              </h3>

              <p>
                By using our website or booking our services, you agree to these
                Privacy Policy and Terms & Conditions.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}