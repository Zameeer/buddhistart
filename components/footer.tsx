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
                  Gokarneshwor-5, Jorpati, Kathmandu, Nepal
                </span>
              </li>
              <li>
                <div className="rounded-md overflow-hidden mt-2 shadow-lg border border-[#f2906c]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3531.742526016212!2d85.371890275468!3d27.72523487617233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQzJzMwLjkiTiA4NcKwMjInMjguMSJF!5e0!3m2!1sen!2sin!4v1748424595556!5m2!1sen!2sin"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                  ></iframe>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-[#f2906c] mr-3 flex-shrink-0" />
                <a
                  href="tel:+9779818916817"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  +977 981-8916817
                </a>

                <a
                  href="tel:+9779843106388"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  , +977 984-3106388
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-[#f2906c] mr-3 flex-shrink-0" />
                <a
                  href="mailto:urgenart@gmail.com"
                  className="text-gray-300 hover:text-[#f2906c]"
                >
                  urgenart@gmail.com
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
