import React from "react";
import SectionHeading from "../../../UI/SectionHeading";

const skills = [
  {
    name: "HTML",
    icon: "/icons/HTML5.png",
    logoBg: "bg-base-300",
    textBg: "bg-primary/10",
  },
  {
    name: "CSS",
    icon: "/icons/CSS3.png",
    logoBg: "bg-base-300",
    textBg: "bg-primary/10",
  },
  {
    name: "JavaScript",
    icon: "/icons/JavaScript.png",
    logoBg: "bg-[#FFDF00]",
    textBg: "bg-primary/10",
  },
  {
    name: "React JS",
    icon: "/icons/React.png",
    logoBg: "bg-base-300",
    textBg: "bg-primary/10",
  },
  {
    name: "Node JS",
    icon: "/icons/Node.png",
    logoBg: "bg-base-300",
    textBg: "bg-primary/10",
  },
  {
    name: "MongoDB",
    icon: "/icons/MongoDB.png",
    logoBg: "bg-base-300",
    textBg: "bg-primary/10",
  },
  {
    name: "Firebase",
    icon: "/icons/Firebase.png",
    logoBg: "bg-base-300",
    textBg: "bg-primary/10",
  },
  {
    name: "GitHub",
    icon: "/icons/GitHub.png",
    logoBg: "bg-base-300",
    textBg: "bg-primary/10",
  },
  {
    name: "Tailwind",
    icon: "/icons/Tailwind.png",
    logoBg: "bg-base-300",
    textBg: "bg-primary/10",
  },
  {
    name: "express.js",
    icon: "/icons/Express.png",
    logoBg: "bg-base-300",
    textBg: "bg-primary/10",
  },
  {
    name: "Postman",
    icon: "/icons/Postman.png",
    logoBg: "bg-[#f36933]",
    textBg: "bg-primary/10",
  },
];

const SkillsSection = () => {
  return (
    <section className="container mx-auto">
      <SectionHeading
        title="Technologies I Use"
        subtitle="Tools and technologies I use to build amazing projects."
      />

      <div className="mx-auto flex justify-center sm:gap-4 gap-2 px-4 flex-wrap">
        {skills.map(({ name, icon, logoBg, textBg }) => (
          <div
            key={name}
            className={`rounded-3xl flex flex-row sm:gap-2 gap-0 sm:pr-5 pr-0 items-center cursor-pointer shadow shadow-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300 ${textBg}`}
          >
            <div
              className={`w-16 h-16 mask mask-squircle sm:-ml-1 ml-0 ${logoBg}`}
            >
              <img
                src={icon}
                alt={name}
                className="object-contain w-full h-full p-1"
              />
            </div>
            <p className="uppercase tracking-wide text-sm font-bold text-secondary py-5 opacity-90 sm:block hidden">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
