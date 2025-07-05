import React from "react";
import SectionHeading from "../../../UI/SectionHeading";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 text-secondary" id="about">
      <SectionHeading
        title="About Me"
        textAlign="center"
        subtitle="Passionate Front-End Developer Crafting Seamless User Experiences"
      />

      <div className="grid lg:grid-cols-2 gap-10 items-center bg-base-100 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden">
        {/* Left: Image */}
        <div className="w-full lg:h-full md:h-[540px] sm:h-[400px] h-[320px]">
          <img
            src="/wd.naimur.png"
            alt="Portrait of Md. Naimur Rahman"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        {/* Right: About Text */}
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
              Md. Naimur Rahman
            </span>
          </h3>
          <p className="text-base leading-relaxed mb-6 opacity-80">
            A front-end web developer with a strong passion for crafting clean,
            efficient, and visually appealing digital experiences. I focus on
            writing modern, maintainable code and building user-friendly
            applications that perform seamlessly across devices.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base opacity-80">
            <li>Specialized in React, Tailwind CSS, and Firebase</li>
            <li>Builds responsive, scalable web applications</li>
            <li>Continuously exploring modern tech & best practices</li>
            <li>Strong attention to detail and UX-focused design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
