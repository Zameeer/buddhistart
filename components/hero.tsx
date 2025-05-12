"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/urgen/Katmandu/hero1.jpg?height=1080&width=1920",
    alt: "Wall art carving",
  },
  {
    src: "/urgen/Rinchenpong/hero2.jpg?height=1080&width=1920",
    alt: "Buddhist painting",
  },
  {
    src: "/urgen/Nepal_Kathmandu/hero3.jpg?height=1080&width=1920",
    alt: "Wood carving",
  },
  {
    src: "/urgen/UK_London/hero4.jpeg?height=1080&width=1920",
    alt: "Monastery artwork",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 whitespace-nowrap">
            Exquisite Buddhist Art & Carvings
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light whitespace-normal">
            Transforming spaces with sacred artistry and traditional
            craftsmanship worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
