import "./globals.css";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { navigation } from "@/data/spadata";

export const metadata = {
  metadataBase: new URL("https://www.spaplanet.in"), // Change to your domain

  title: {
    default: "Auric Wellness | Luxury Spa & Full Body Massage Center",
    template: "%s | Auric Wellness",
  },

  description:
    "Auric Wellness offers luxury spa treatments including Full Body Massage, Thai Massage, Deep Tissue Massage, Swedish Massage, Couple Spa, Aromatherapy, Reflexology, Ayurvedic Massage, Hot Stone Massage, Wellness Spa, and professional massage therapy.",

  keywords: [
    "Full Body Massage",
    "Thai Massage",
    "Deep Tissue Massage",
    "Swedish Massage",
    "Spa Near Me",
    "Massage Near Me",
    "Couple Spa",
    "Luxury Spa",
    "Wellness Spa",
    "Day Spa",
    "Aromatherapy Massage",
    "Reflexology",
    "Ayurvedic Massage",
    "Head Massage",
    "Foot Massage",
    "Back Massage",
    "Stress Relief Massage",
    "Pain Relief Massage",
    "Spa Therapy",
    "Neck and Shoulder Massage",
    "Balinese Massage",
    "Hot Stone Massage",
    "Professional Massage Therapist",
    "Wellness Center",
    "Couple Massage",
    "Romantic Couple Massage",
    "Spa Packages",
    "Luxury Massage",
    "Relaxation Massage",
    "Body Massage",
    "Best Spa",
    "Premium Spa",
    "Spa Services",
    "Massage Therapy",
  ],

  authors: [
    {
      name: "Auric Wellness ",
    },
  ],

  creator: "Auric Wellness",

  publisher: "Auric Wellness",

  category: "Spa & Wellness",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Auric Wellness | Luxury Spa & Wellness Center",
    description:
      "Experience premium spa treatments including Full Body Massage, Thai Massage, Swedish Massage, Deep Tissue Massage, Couple Spa, Wellness Therapy and more.",
    url: "https://www.Auricwellness.in",
    siteName: "Auric Wellness",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auric Wellness",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Auric Wellness | Luxury Spa",
    description:
      "Luxury Spa & Wellness Center offering premium massage therapies.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.Auricwellness.co.in",
  },

  icons: {
    icon: [
      { url: "/logo/AURIC_WELLNESS_PANJIM_LOGO.png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">

        <TopBar data={navigation.topbar} />

        <Navbar
          logo={navigation.logo}
          menu={navigation.menu}
          button={navigation.button}
        />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}