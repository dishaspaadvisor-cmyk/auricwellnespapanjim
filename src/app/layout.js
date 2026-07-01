import "./globals.css";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { navigation } from "@/data/spadata";

export const metadata = {
  title: "Spa Planet",
  description: "Luxury Spa & Wellness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">

        {/* Top Bar */}
        <TopBar data={navigation.topbar} />

        {/* Navbar */}
        <Navbar
          logo={navigation.logo}
          menu={navigation.menu}
          button={navigation.button}
        />

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}