"use client";

import { Description } from "@radix-ui/react-toast";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  X,
} from "react-feather";

const projects = [
  {
    title: "TSOKNYI GECHAK LING MONASTERY",

    location: "CHOBER, KATHMANDU, NEPAL",
    images: [
      "/urgen/Katmandu/katmandu (7).jpg",
      "/urgen/Katmandu/DS_Rinpoche.jpeg",
      "/urgen/Katmandu/hero1.jpg",
      "/urgen/Katmandu/DS_Rinpoche2.jpeg",
      "/urgen/Katmandu/katmandu (1).jpg",
      "/urgen/Katmandu/katmandu (2).jpg",
      "/urgen/Katmandu/katmandu (3).jpg",
      "/urgen/Katmandu/katmandu (4).jpg",
      "/urgen/Katmandu/katmandu (5).jpg",
      "/urgen/Katmandu/katmandu (6).jpg",
      "/urgen/Katmandu/katmandu (8).jpg",
      "/urgen/Katmandu/katmandu (9).jpg",
      "/urgen/Katmandu/katmandu (10).jpg",
      "/urgen/Katmandu/katmandu (11).jpg",
      "/urgen/Katmandu/katmandu (12).jpg",
      "/urgen/Katmandu/katmandu (13).jpg",
      "/urgen/Katmandu/katmandu (15).jpg",
    ],
    details: {
      CLIENT: "DRUBWANG TSOKNYI RINPOCHE",
      "Year of Work": "2020-2024",
    },
  },
  {
    title: " SHYALA MONASTERY",
    location: "CMANASLU, NEPAL",
    images: [
      "/urgen/Manaslu_Nepal/samagaun-monastery-scaled.jpg",
      "/urgen/Manaslu_Nepal/Manslu (5).jpg",
      "/urgen/Manaslu_Nepal/DSD. Rinpoche.jpeg",
      "/urgen/Manaslu_Nepal/Manslu (2).jpg",
      "/urgen/Manaslu_Nepal/Manslu (3).jpg",
      "/urgen/Manaslu_Nepal/Manslu (4).jpg",
    ],
    details: {
      CLIENT: "DRUWANG SONAM DORJE RINPOCHE",
    },
  },
  {
    title: " GURU PADMA SAMVABA STATUE",
    location: "MUKTINATH, MUSTANG, NEPAL",
    images: [
      "/urgen/Mustang_Nepal/statue.jpeg",
      "/urgen/Mustang_Nepal/muktinath.jpg",
      "/urgen/Mustang_Nepal/statue.jpeg",
    ],
    details: {
      "Year of Work": "2016",
    },
  },
  {
    title: " Triten Norbutse Bonpo Monastery",
    location: "Ichangun, Kathmandu, Nepal",
    images: [
      "/urgen/Nepal_Kathmandu/hero3.jpg",
      "/urgen/Nepal_Kathmandu/Rinpoche.jpeg",
      "/urgen/Nepal_Kathmandu/img1.jpeg",
      "/urgen/Nepal_Kathmandu/img2.jpeg",
    ],
    details: {
      CLIENT: "His Eminence Yongdzin Lopon Tenzin Namdak Rinpoche",
      "Year of Work": "2024",
    },
  },
  {
    title: " Rinchen Chholing Monastery",
    location: "Meghi Dara, Rinchenpong, West Sikkim, India",
    images: [
      "/urgen/Rinchenpong/hero2.jpg",
      "/urgen/Rinchenpong/HH Rinpoche.jpeg",
      "/urgen/Rinchenpong/img (1).jpeg",
      "/urgen/Rinchenpong/img (1).jpg",
      "/urgen/Rinchenpong/img (2).jpg",
      "/urgen/Rinchenpong/img (3).jpg",
      "/urgen/Rinchenpong/Sikkim's Chief Minister with Rinpoche.jpg",
    ],
    details: {
      CLIENT: "His eminence Tulku Sangay Yonten Gyatsho Rinpoche",
      "Year of Work": "2024",
    },
  },
  {
    title: " SAKYA TENGYUD KOMIC- KAZA MONASTERY",
    location: "HIMACHAL PRADESH, India",
    images: [
      "/urgen/Himachal_Pradesh_2007/spiti_monastery.jpg",
      "/urgen/Himachal_Pradesh_2007/HH_Rinpoche.jpg",
      "/urgen/Himachal_Pradesh_2007/spiti_monastery1.jpg",
      "/urgen/Himachal_Pradesh_2007/spiti_monastery3.jpg",
      "/urgen/Himachal_Pradesh_2007/spiti_monastery4.jpg",
      "/urgen/Himachal_Pradesh_2007/HH Rinpoche.jpg",
      "/urgen/Himachal_Pradesh_2007/IMG-20250412-WA0048.jpg",
    ],
    details: {
      CLIENT: "His Eminence Ngor Khangsar Shabdrung Rinpoche",
      "Year of Work": "2007",
    },
  },
  {
    title: " Terkarmo Tingmosgang old Drikung Kagyu Monastery",
    location: "Jammu, Kashmir, Ladakh, India",
    images: [
      "/urgen/Jammu_Kashmir_Ladakh/IMG-20250412-WA0053.jpg",
      "/urgen/Jammu_Kashmir_Ladakh/KK. Rangdol.jpg",
      "/urgen/Jammu_Kashmir_Ladakh/KK_Rangdol.jpg",
    ],
    details: {
      CLIENT: "Khenpo Konchok Rangdol",
      "Year of Work": "2009",
    },
  },
  {
    title: " Hotels & Interior Design",
    location: "Worldwide",
    images: [
      "/urgen/Interior_hotels/img (1).jpg",
      "/urgen/Interior_hotels/img (2).jpg",
      "/urgen/Interior_hotels/img (3).jpg",
      "/urgen/Interior_hotels/img (4).jpg",
      "/urgen/Interior_hotels/img (5).jpg",
      "/urgen/Interior_hotels/img (6).jpg",
      "/urgen/Interior_hotels/img (7).jpg",
      "/urgen/Interior_hotels/img (8).jpg",
      "/urgen/Interior_hotels/img (9).jpg",
      "/urgen/Interior_hotels/img (10).jpg",
      "/urgen/Interior_hotels/img (11).jpg",
      "/urgen/Interior_hotels/img (12).jpg",
      "/urgen/Interior_hotels/img (13).jpg",
      "/urgen/Interior_hotels/img (14).jpg",
      "/urgen/Interior_hotels/img (15).jpg",
      "/urgen/Interior_hotels/img (16).jpg",
      "/urgen/Interior_hotels/img (17).jpg",
      "/urgen/Interior_hotels/img (18).jpg",
      "/urgen/Interior_hotels/img (19).jpg",
      "/urgen/Interior_hotels/img (20).jpg",
      "/urgen/Interior_hotels/img (21).jpg",
      "/urgen/Interior_hotels/img (22).jpg",
      "/urgen/Interior_hotels/img (23).jpg",
      "/urgen/Interior_hotels/img (24).jpg",
      "/urgen/Interior_hotels/img (25).jpg",
      "/urgen/Interior_hotels/img (26).jpg",
      "/urgen/Interior_hotels/img (27).jpg",
      "/urgen/Interior_hotels/img (28).jpg",
      "/urgen/Interior_hotels/img (29).jpg",
    ],
    details: {
      Description:
        "We have worked on various hotels and interior designs, creating unique and beautiful spaces that reflect Buddhist culture and traditions of the region. Our team of skilled artisans and designers work closely with clients to bring their vision to life, ensuring that every detail is perfect.",
    },
  },

  // Add more...
];

export default function Gallery() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedInfoIndex, setExpandedInfoIndex] = useState<number | null>(
    null
  );
  const [expandedGallery, setExpandedGallery] = useState(false);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const maxVisible = 6;
  const isExpandable = projects.length > maxVisible;
  const displayedProjects = expandedGallery
    ? projects
    : projects.slice(0, maxVisible);

  const [cardImageIndexes, setCardImageIndexes] = useState<number[]>(
    projects.map(() => 0)
  );

  const timers = useRef<Record<number, NodeJS.Timeout>>({});
  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const startImageCycle = (index: number) => {
    if (timers.current[index]) return;

    timers.current[index] = setInterval(() => {
      setCardImageIndexes((prev) =>
        prev.map((value, i) =>
          i === index ? (value + 1) % projects[index].images.length : value
        )
      );
    }, 1200);
  };

  const stopImageCycle = (index: number) => {
    clearInterval(timers.current[index]);
    delete timers.current[index];
    setCardImageIndexes((prev) =>
      prev.map((val, i) => (i === index ? 0 : val))
    );
  };

  const openSlideshow = (index: number) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
  };

  const handleTouch = (index: number) => {
    if (tappedIndex === index) {
      openSlideshow(index); // second tap opens full view
    } else {
      setTappedIndex(index);
      startImageCycle(index);
      setTimeout(() => stopImageCycle(index), 5000); // stop after 5s
    }
  };

  const nextImage = () => {
    if (selectedProject === null) return;
    setCurrentImageIndex(
      (prev) => (prev + 1) % projects[selectedProject].images.length
    );
  };

  const prevImage = () => {
    if (selectedProject === null) return;
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + projects[selectedProject].images.length) %
        projects[selectedProject].images.length
    );
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our previous projects and the sacred art we've created for
            various spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {displayedProjects.map((project, index) => {
            const isActive = hoverIndex === index || tappedIndex === index;

            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => {
                  if (!isTouchDevice) {
                    setHoverIndex(index);
                    startImageCycle(index);
                  }
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice) {
                    setHoverIndex(null);
                    stopImageCycle(index);
                  }
                }}
                onTouchStart={() => handleTouch(index)}
                onClick={() => {
                  if (!isTouchDevice) {
                    openSlideshow(index);
                  }
                }}
              >
                <div className="h-64 overflow-hidden rounded-md shadow-sm relative">
                  <img
                    src={project.images[cardImageIndexes[index]]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-black/60 text-white p-4 flex flex-col justify-end z-20">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm text-orange-300">
                        {project.location}
                      </p>
                      <p className="text-sm mt-1 line-clamp-2">
                        {project.details.CLIENT}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedInfoIndex(index);
                        }}
                        className="text-sm underline mt-2 text-orange-200"
                      >
                        Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {isExpandable && (
          <div className="flex justify-center mt-8">
            <button
              className="flex items-center gap-2 px-4 py-2 border border-[#f2906c] text-[#f2906c] rounded-md hover:bg-[#f2906c]/10 transition-colors"
              onClick={() => setExpandedGallery(!expandedGallery)}
            >
              {expandedGallery ? (
                <>
                  <span>See Less</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span>See More</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}

        {expandedInfoIndex !== null && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto p-6 relative">
              <button
                onClick={() => setExpandedInfoIndex(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-xl font-bold text-[#8B2323] mb-1">
                {projects[expandedInfoIndex].title}
              </h3>
              <p className="text-sm text-[#f2906c] mb-2">
                {projects[expandedInfoIndex].location}
              </p>

              {projects[expandedInfoIndex].details && (
                <div className="mt-2 border-t pt-3 space-y-2">
                  {Object.entries(projects[expandedInfoIndex].details).map(
                    ([key, value]) => (
                      <div key={key}>
                        <p className="text-sm font-semibold">{key}</p>
                        <p className="text-sm text-gray-600">{value}</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              className="absolute right-4 top-4 z-10 text-white rounded-full p-2"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative h-[90vh] w-[90vw] flex items-center justify-center">
              <img
                src={
                  projects[selectedProject].images[currentImageIndex] ||
                  "/placeholder.svg"
                }
                alt={projects[selectedProject].title}
                className="max-h-full max-w-full object-contain"
              />

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 rounded-full p-2"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 rounded-full p-2"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                {currentImageIndex + 1} /{" "}
                {projects[selectedProject].images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
