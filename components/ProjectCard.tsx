"use client";

import type React from "react";
import { MapPin } from "react-feather";

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  imageSrc: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  location,
  imageSrc,
  onClick,
}) => {
  return (
    <div
      className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow border border-gray-200 rounded-md bg-white"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center text-[#f2906c] mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="mt-2 text-sm line-clamp-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
