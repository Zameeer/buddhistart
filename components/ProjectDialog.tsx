"use client";

import type React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "react-feather";

interface ProjectDetails {
  [key: string]: string;
}

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    location: string;
    images: string[];
    details?: ProjectDetails;
  };
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

      <div className="relative bg-white rounded-lg max-w-4xl w-[90vw] max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image carousel */}
        <div className="relative flex-grow overflow-hidden">
          <div className="h-[50vh] relative">
            <img
              src={project.images[currentImageIndex] || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-contain"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentImageIndex
                          ? "bg-[#f2906c]"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Project details */}
        <div className="p-4 overflow-y-auto">
          <p className="text-sm text-[#f2906c] mb-2">{project.location}</p>
          <p className="mb-4">{project.description}</p>

          {project.details && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
              {Object.entries(project.details).map(([key, value]) => (
                <div key={key}>
                  <h4 className="text-sm font-semibold">{key}</h4>
                  <p className="text-sm text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;
