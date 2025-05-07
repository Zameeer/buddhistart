"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // For hamburger icon (needs `lucide-react` package)

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY <= 10);

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = (
    <>
      <Link
        href="#home"
        className="block text-[#fff8f2] hover:text-[#f2906c] px-3 py-2 text-sm font-medium"
      >
        Home
      </Link>
      <Link
        href="#services"
        className="block text-[#fff8f2] hover:text-[#f2906c] px-3 py-2 text-sm font-medium"
      >
        Services
      </Link>
      <Link
        href="#gallery"
        className="block text-[#fff8f2] hover:text-[#f2906c] px-3 py-2 text-sm font-medium"
      >
        Gallery
      </Link>
      <Link
        href="#clients"
        className="block text-[#fff8f2] hover:text-[#f2906c] px-3 py-2 text-sm font-medium"
      >
        Clients
      </Link>
      <Link
        href="#why-choose-us"
        className="block text-[#fff8f2] hover:text-[#f2906c] px-3 py-2 text-sm font-medium"
      >
        Why Choose Us
      </Link>
      <Link
        href="#contact"
        className="block text-[#fff8f2] hover:text-[#f2906c] px-3 py-2 text-sm font-medium"
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible || isHovered
          ? "bg-[#9a2e21] backdrop-blur-md shadow-md"
          : "translate-y-[-100%]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center" style={{ marginTop: "10px" }}>
            <Image
              src="/companylogo.png"
              alt="Company Logo"
              width={80}
              height={80}
              className="mr-2"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">{navLinks}</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#fff8f2] focus:outline-none"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#a0522d] px-4 pb-4 space-y-1 z-50">
          {navLinks}
        </div>
      )}
    </nav>
  );
}
