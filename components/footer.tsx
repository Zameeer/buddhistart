import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#f2906c]">
              Buddhist Art Consultancy
            </h3>
            <p className="text-gray-300 mb-6">
              Transforming spaces with sacred Buddhist art, carvings, and
              paintings. We bring spiritual beauty to monasteries, homes, and
              commercial spaces.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#f2906c]">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#f2906c]">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#f2906c]">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#f2906c]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  Client Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="#why-choose-us"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#f2906c]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-[#f2906c] mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Dharma Street, Serenity Valley, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-[#f2906c] mr-3 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  +977 981-8916817
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-[#f2906c] mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@buddhistart.com"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  info@buddhistart.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Urgen Art Consultancy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
