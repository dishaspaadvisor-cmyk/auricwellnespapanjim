export const navigation = {
  logo: "/logo.png",

  topbar: {
    address: "Panaji,goa, India",
    email: "auricwellnessspa.panjim@gmail.com",
    phone: "+91 8422902212",
  },

  menu: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",

      children: [
        {
          title: "Swedish Massage",
          href: "/services",
        },
        {
          title: "Deep Tissue Massage",
          href: "/services",
        },
        {
          title: "Thai Massage",
          href: "/services",
        },
        {
          title: "Balinese Massage",
          href: "/services",
        },
        {
          title: "Aromatherapy",
          href: "/services",
        },
        {
          title: "Hot Stone Massage",
          href: "/services",
        },
        {
          title: "Body Scrub",
          href: "/services",
        },
        {
          title: "Foot Reflexology",
          href: "/services",
        },
        {
          title: "Couple Spa",
          href: "/services",
        },
      ],
    },
    {
      title: "Combo Offers",
      href: "/offers",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],

  button: {
    text: "Book Now",
    href: "/book-now",
  },
};
export const heroData = {
  images: [
    "/heroimage/hero1.png",
    "/heroimage/heroimage2.png",
    "/heroimage/heroimage1.png",
  ],

  subtitle: "Luxury Spa & Wellness",

  title: "No 1 spa in Panjim, Goa ,best services available",

  description:
    "Experience premium massage therapies and wellness treatments designed to  rejuvenate your body, calm your mind, and restore your inner balance.",

  primaryButton: {
    text: "Book Appointment",
    href: "/contact",
  },

  secondaryButton: {
    text: "Explore Services",
    href: "/services",
  },
};