import React, { useState } from "react";
import SectionHeading from "../../../UI/SectionHeading";
import AllProjects from "./AllProjects";
import ProjectDetails from "./ProjectDetails";
import { CgClose } from "react-icons/cg";

const projects = [
  {
    title: "CrewUp",
    subtitle: "Discover and create local hobby groups",
    image: "/Websites/CrewUpHome.png",
    live: "https://crewup.web.app/",
    client: "https://github.com/wdNaimur/crewup-client",
    description: [
      "CrewUp is a platform that helps users discover and join local hobby groups based on shared interests.",
      "It supports group creation, personalized dashboards, and real-time search to enhance user engagement.",
      "The platform includes secure authentication, responsive design, and smooth animations for a modern experience.",
    ],
    features: [
      "Group discovery by category and live keyword search",
      "Create, update, and delete hobby-based groups",
      "Email/password authentication with Firebase Auth",
      "User dashboard for managing personal groups and bookings",
      "Dashboard overview showing group count, bookings, and profile management",
      "Contact form integration using EmailJS",
      "Responsive, mobile-friendly layout with Tailwind CSS",
      "Interactive tooltips, alerts, and toast notifications",
      "Smooth page transitions using Framer Motion animations",
    ],
    technologies: [
      "React",
      "Firebase Auth",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "BulkNEST",
    subtitle: "B2B wholesale marketplace platform",
    image: "/Websites/BulkNestHome.png",
    live: "https://bulknest.web.app/",
    client: "https://github.com/wdNaimur/bulknest-client",
    description: [
      "BulkNEST is a B2B e-commerce platform that connects wholesalers with retailers for bulk product orders in an efficient and user-friendly way.",
      "It includes a secure login system, protected routes, full CRUD functionality for products, and a responsive layout optimized for business workflows.",
      "Features like category filters, toggle views, JWT-based access, and elegant animations enhance the usability and scalability of the platform.",
    ],
    features: [
      "JWT authentication and protected admin routes",
      "Product filters, sorting, and list/grid toggle view",
      "Role-based dashboard (admin, vendor, buyer)",
      "Vendor panel for uploading and managing products",
      "Responsive UI with Tailwind and reusable components",
      "Framer Motion-based smooth animations",
    ],
    technologies: [
      "React",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Framer Motion",
    ],
  },
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.getElementById("project_modal").showModal();
  };

  return (
    <section className="container mx-auto px-4">
      <SectionHeading
        title="Projects I've Built"
        subtitle="From concept to code — these are the digital products I’ve crafted."
      />

      <div className="mx-auto flex justify-center lg:gap-8 gap-10 lg:flex-row flex-col pt-2">
        {projects.map((project, index) => (
          <AllProjects key={index} project={project} openModal={openModal} />
        ))}
      </div>

      {/* Centralized dynamic modal */}
      <dialog id="project_modal" className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto max-w-[85vw] sm:container">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-secondary text-base-100 absolute right-2 top-2 text-2xl p-1 opacity-90 hover:opacity-100 hover:scale-102">
              <CgClose />
            </button>
          </form>
          {selectedProject && <ProjectDetails project={selectedProject} />}
        </div>
      </dialog>
    </section>
  );
};

export default ProjectSection;
