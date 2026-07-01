import { MapPin, Mail, Phone } from "lucide-react";

export default function TopBar({ data }) {
  return (
    <div className="bg-amber-50 text-black font-sans text-sm font-normal text-neutral-800 tracking-normal">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex items-center justify-between">

        {/* Left Side - Address */}
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{data.address}</span>
        </div>

        {/* Right Side - Email & Phone */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 hover:text-pink-200 transition"
          >
            <Mail size={16} />
            <span>{data.email}</span>
          </a>

          <a
            href={`tel:${data.phone}`}
            className="flex items-center gap-2 hover:text-pink-200 transition"
          >
            <Phone size={16} />
            <span>{data.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}