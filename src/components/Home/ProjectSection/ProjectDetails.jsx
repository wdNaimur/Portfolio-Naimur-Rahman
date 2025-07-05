import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "../../../UI/SectionHeading";

const ProjectDetails = ({ project }) => {
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  const handleMouseEnter = () => {
    const image = imageRef.current;
    const wrapper = wrapperRef.current;
    if (image && wrapper) {
      const overflowAmount = image.scrollHeight - wrapper.clientHeight;
      image.style.transform = `translateY(-${overflowAmount}px)`;
    }
  };

  const handleMouseLeave = () => {
    const image = imageRef.current;
    if (image) {
      image.style.transform = `translateY(0px)`;
    }
  };

  if (!project) return null;

  return (
    <div className="p-4">
      {/* Title and subtitle */}
      <SectionHeading textAlign="left" title={project.title} />
      <p className="text-lg text-secondary/70 mb-4 -mt-6">{project.subtitle}</p>

      {/* Description paragraphs */}
      <div className="space-y-4 mb-6">
        {project.description?.map((para, index) => (
          <p
            key={index}
            className="text-base text-secondary/80 leading-relaxed"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Technologies badges */}
      <div className="flex flex-wrap gap-2 mb-4 -ms-1">
        {project.technologies?.map((tech, idx) => (
          <span
            key={idx}
            className="badge bg-secondary/60 border-none text-base-100"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Live & GitHub buttons */}
      <div className="flex gap-4 mb-6">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-100 btn btn-sm btn-secondary rounded-full shadow-none opacity-80 duration-300 transition-all hover:opacity-100 hover:scale-102"
        >
          Live Site
        </a>
        <a
          href={project.client}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-100 btn btn-sm btn-secondary rounded-full shadow-none opacity-80 duration-300 transition-all hover:opacity-100 hover:scale-102"
        >
          <FaGithub className="mr-1" />
          GitHub
        </a>
      </div>

      {/* Hover-scroll image preview */}
      <div
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-xl overflow-hidden border border-primary/10 relative"
      >
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          className="w-full object-cover transition-transform duration-[9000ms] ease-linear"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
