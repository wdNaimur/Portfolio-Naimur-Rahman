import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";

const AllProjects = ({ project, openModal }) => {
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

  return (
    <div
      className="bg-primary/10 sm:px-12 px-4 rounded-xl w-full group sm:hover:scale-102 duration-300 cursor-pointer sm:hover:-translate-y-2 hover:shadow-2xl shadow-primary/10 sm:pt-8 pt-6 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Section */}
      <div className="flex justify-between flex-col md:flex-row md:mb-0 mb-6">
        <div>
          <h3 className="text-2xl text-secondary font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-md text-secondary opacity-60 pr-4 mb-2 sm:block hidden">
            {project.subtitle}
          </p>
          <div className="flex gap-1 flex-wrap md:mb-6 mb-2 -ms-1">
            {project.technologies.slice(0, 5).map((tech, index) => (
              <p
                key={index}
                className="badge bg-base-100 border-none text-secondary/80 opacity-80"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex md:flex-col md:items-end flex-row items-center">
          <button
            className="btn btn-secondary text-secondary btn-outline rounded-full btn-sm scale-90 opacity-60 border-2 bg-transparent group-hover:opacity-80 duration-300 transition-all hover:opacity-100 hover:bg-secondary hover:text-base-100 shadow-none hover:shadow-none"
            onClick={() => openModal(project)}
          >
            Details
          </button>

          <div className="flex items-center">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-100 btn btn-sm btn-secondary rounded-full shadow-none scale-90 opacity-80 group-hover:opacity-90 duration-300 transition-all hover:opacity-100"
            >
              Live Site
            </a>

            <a
              href={project.client}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn btn-secondary btn-circle hover:text-base-200 shadow-none active:scale-90 select-none ease-in-out hover:bg-secondary text-2xl border-2 border-secondary scale-75 opacity-80 group-hover:opacity-90 duration-300 transition-all hover:opacity-100"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Effect Image */}
      <div
        ref={wrapperRef}
        className="w-full 2xl:h-[440px] xl:h-[350px] lg:h-[200px] md:h-[440px] sm:h-[350px] h-[340px] overflow-hidden rounded-t-xl relative"
      >
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          className="transition-transform duration-[3000ms] ease-linear w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AllProjects;
