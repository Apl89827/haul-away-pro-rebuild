
import React, { useState } from "react";
import { MapPin, Clock, Tag } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  category: string;
  duration: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <div 
          className="relative aspect-[3/4] overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Before Image */}
          <img
            src={project.beforeImage}
            alt={`${project.title} - Before`}
            className={`absolute inset-0 w-full h-full object-contain bg-gray-100 transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* After Image */}
          <img
            src={project.afterImage}
            alt={`${project.title} - After`}
            className={`absolute inset-0 w-full h-full object-contain bg-gray-100 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Before/After Labels */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-500 ${
              isHovered 
                ? 'bg-brand-green text-white' 
                : 'bg-red-500 text-white'
            }`}>
              {isHovered ? 'AFTER' : 'BEFORE'}
            </span>
          </div>
          
          {/* Hover instruction */}
          <div className="absolute bottom-4 right-4">
            <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hover to see after
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-brand-blue">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            <span>{project.category}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{project.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
