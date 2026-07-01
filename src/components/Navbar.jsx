"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar({ logo, menu, button }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={"/logo/Auric_wellness_spa_panjim_favbar.webp"}
              alt="Auric Wellness Spa"
              width={180}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {menu.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1 text-[16px] font-semibold text-gray-800 transition-all duration-300 hover:text-amber-500
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-amber-500 after:transition-all after:duration-300
                  hover:after:w-full"
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className="
                    absolute left-0 top-full pt-4
                    w-72
                    opacity-0 invisible
                    scale-95 translate-y-2
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:scale-100
                    group-hover:translate-y-0
                    transition-all duration-300
                    z-50"
                  >
                    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
                      {item.children.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="block px-6 py-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300 border-b last:border-b-0 border-gray-100"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Link
              href={button.href}
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-amber-600 hover:shadow-xl"
            >
              {button.text}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-800"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen border-t" : "max-h-0"
        }`}
      >
        <div className="bg-white">
          {menu.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="flex w-full items-center justify-between border-b px-5 py-4 font-semibold text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition"
                  >
                    {item.title}

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      serviceOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="bg-gray-50">
                      {item.children.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-10 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b px-5 py-4 font-semibold text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Button */}
          <div className="p-5">
            <Link
              href={button.href}
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-full bg-amber-500 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-amber-600"
            >
              {button.text}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}