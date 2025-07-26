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
    title: "Gargonling Monastery",
    location: "ICCHANGGU SWAYAMBU, KATHMANDU, NEPAL",
    images: [
      "urgen/Urgen new stuff/underconstruction/underconstruction2.jpeg",
      "urgen/Urgen new stuff/underconstruction/underconstruction3.jpeg",
      "urgen/Urgen new stuff/underconstruction/underconstruction1.jpeg",
      "urgen/Urgen new stuff/underconstruction/underconstruction.jpeg",
    ],
    details: {
      "Year of Work": "IN Progress",
    },
  },
  {
    title: "SHANDOK PALRI MONASTERY",
    location: "SYALA, GORKHA, NEPAL",
    images: [
      "urgen/Urgen new stuff/spot/spot3.jpeg",
      "urgen/Urgen new stuff/spot/spot1.jpeg",
      "urgen/Urgen new stuff/spot/spot2.jpeg",
      "urgen/Urgen new stuff/spot/spot4.jpeg",
      "urgen/Urgen new stuff/spot/spot5.jpeg",
      "urgen/Urgen new stuff/spot/spot.jpeg",
    ],
    details: {
      CLIENT: "DRUWANG SONAM DORJE RINPOCHE",
    },
  },
  {
    title: " Our Craftsmen",
    images: [
      "urgen/Urgen new stuff/workers/workers (1).jpeg",
      "urgen/Urgen new stuff/workers/workers (2).jpeg",
      "urgen/Urgen new stuff/workers/workers (3).jpeg",
      "urgen/Urgen new stuff/workers/workers (4).jpeg",
      "urgen/Urgen new stuff/workers/workers (5).jpeg",
      "urgen/Urgen new stuff/workers/workers (6).jpeg",
      "urgen/Urgen new stuff/workers/workers (7).jpeg",
      "urgen/Urgen new stuff/workers/workers (8).jpeg",
      "urgen/Urgen new stuff/workers/workers (9).jpeg",
      "urgen/Urgen new stuff/workers/workers (10).jpeg",
      "urgen/Urgen new stuff/workers/workers (11).jpeg",
      "urgen/Urgen new stuff/workers/workers (12).jpeg",
      "urgen/Urgen new stuff/workers/workers.jpeg",
    ],
    details: {},
  },
  {
    title: " More inprogress projects",
    images: [
      "urgen/Urgen new stuff/images/image (1).jpeg",
      "urgen/Urgen new stuff/images/image (2).jpeg",
      "urgen/Urgen new stuff/images/image (3).jpeg",
      "urgen/Urgen new stuff/images/image (4).jpeg",
      "urgen/Urgen new stuff/images/image (5).jpeg",
      "urgen/Urgen new stuff/images/image (6).jpeg",
      "urgen/Urgen new stuff/images/image (7).jpeg",
      "urgen/Urgen new stuff/images/image (8).jpeg",
      "urgen/Urgen new stuff/images/image (9).jpeg",
      "urgen/Urgen new stuff/images/image (10).jpeg",
      "urgen/Urgen new stuff/images/image (11).jpeg",
      "urgen/Urgen new stuff/images/image (12).jpeg",
      "urgen/Urgen new stuff/images/image (13).jpeg",
      "urgen/Urgen new stuff/images/image (14).jpeg",
      "urgen/Urgen new stuff/images/image (15).jpeg",
      "urgen/Urgen new stuff/images/image (16).jpeg",
      "urgen/Urgen new stuff/images/image (17).jpeg",
      "urgen/Urgen new stuff/images/image (18).jpeg",
      "urgen/Urgen new stuff/images/image (19).jpeg",
      "urgen/Urgen new stuff/images/image (20).jpeg",
      "urgen/Urgen new stuff/images/image (21).jpeg",
      "urgen/Urgen new stuff/images/image (22).jpeg",
      "urgen/Urgen new stuff/images/image (23).jpeg",
      "urgen/Urgen new stuff/images/image (24).jpeg",
      "urgen/Urgen new stuff/images/image (25).jpeg",
      "urgen/Urgen new stuff/images/image (26).jpeg",
      "urgen/Urgen new stuff/images/image (27).jpeg",
      "urgen/Urgen new stuff/images/image (28).jpeg",
      "urgen/Urgen new stuff/images/image (29).jpeg",
      "urgen/Urgen new stuff/images/image (30).jpeg",
      "urgen/Urgen new stuff/images/image (31).jpeg",
      "urgen/Urgen new stuff/images/image (32).jpeg",
      "urgen/Urgen new stuff/images/image (33).jpeg",
      "urgen/Urgen new stuff/images/image (34).jpeg",
      "urgen/Urgen new stuff/images/image (35).jpeg",
      "urgen/Urgen new stuff/images/image (36).jpeg",
      "urgen/Urgen new stuff/images/image (37).jpeg",
      "urgen/Urgen new stuff/images/image (38).jpeg",
      "urgen/Urgen new stuff/images/image (39).jpeg",
      "urgen/Urgen new stuff/images/image (40).jpeg",
      "urgen/Urgen new stuff/images/image (41).jpeg",
      "urgen/Urgen new stuff/images/image (42).jpeg",
      "urgen/Urgen new stuff/images/image (43).jpeg",
      "urgen/Urgen new stuff/images/image (44).jpeg",
      "urgen/Urgen new stuff/images/image (45).jpeg",
      "urgen/Urgen new stuff/images/image (46).jpeg",
      "urgen/Urgen new stuff/images/image (47).jpeg",
      "urgen/Urgen new stuff/images/image (48).jpeg",
      "urgen/Urgen new stuff/images/image (49).jpeg",
      "urgen/Urgen new stuff/images/image (50).jpeg",
      "urgen/Urgen new stuff/images/image.jpeg",
    ],
    details: {},
  },
  // Add more...
];

export default function Galleryold() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedInfoIndex, setExpandedInfoIndex] = useState<number | null>(
    null
  );
  const [expandedGallery, setExpandedGallery] = useState(false);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const maxVisible = 3; // Number of projects to show initially
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
    <section id="gallery" className="pt-8 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our inprogress projects, showcasing the beauty and
            craftsmanship of Buddhist art and architecture.
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
