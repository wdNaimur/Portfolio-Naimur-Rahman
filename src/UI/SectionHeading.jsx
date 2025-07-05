import React from "react";

const SectionHeading = ({ title, subtitle, textAlign }) => {
  // Fallback to "center" if textAlign is not provided
  const alignmentClass =
    textAlign === "left"
      ? "text-left"
      : textAlign === "right"
      ? "text-right"
      : "text-center";

  const headingMarginClass = textAlign === "left" ? "mx-0" : "mx-auto";

  return (
    <div className={`mb-8 ${alignmentClass}`}>
      <h2
        className={`text-transparent bg-gradient-to-tl from-primary to-secondary bg-clip-text lg:text-4xl text-2xl font-bold pb-2 w-fit ${headingMarginClass}`}
      >
        {title}
      </h2>
      <p className="sm:text-base text-secondary text-sm tracking-wide opacity-70">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
