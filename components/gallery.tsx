"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Golden Temple Renovation",
    description: "Complete artistic renovation of the main prayer hall",
    preview: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    title: "Meditation Center Murals",
    description: "Series of wall paintings depicting the life of Buddha",
    preview: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    title: "Luxury Hotel Installation",
    description: "Custom wood carvings for a five-star hotel lobby",
    preview: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    title: "Private Residence Sanctuary",
    description: "Transformation of a home meditation space",
    preview: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
];

export default function Gallery() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Explore our previous projects and the sacred art we've created for
            various spaces.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Projects
              </h3>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    activeProject === index ? "ring-2 ring-[#f2906c]" : ""
                  }`}
                  onClick={() => {
                    setActiveProject(index);
                    setActiveImage(0);
                  }}
                >
                  <div className="relative aspect-video rounded-t-lg overflow-hidden">
                    <Image
                      src={project.preview || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div
                    className={`p-4 ${
                      activeProject === index
                        ? "bg-[#f2906c] text-white"
                        : "bg-white"
                    }`}
                  >
                    <h4 className="font-semibold">{project.title}</h4>
                    <p
                      className={`text-sm ${
                        activeProject === index
                          ? "text-white/90"
                          : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={
                    projects[activeProject].images[activeImage] ||
                    "/placeholder.svg"
                  }
                  alt={projects[activeProject].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {projects[activeProject].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {projects[activeProject].description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {projects[activeProject].images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative aspect-video cursor-pointer rounded-md overflow-hidden ${
                        activeImage === index ? "ring-4 ring-[#f2906c]" : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${projects[activeProject].title} - Image ${
                          index + 1
                        }`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
