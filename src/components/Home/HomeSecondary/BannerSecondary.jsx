import React from "react";
import BannerHeaderSecond from "./BannerHeaderSecond";
import BannerImage from "./BannerImage";

const BannerSecondary = () => {
  return (
    <section className="container mx-auto 2xl:h-[750px] lg:h-[1050px] md:h-[1000px] sm:h-[890px] h-[calc(460px+50vw)] select-none 2xl:mt-0 px-4">
      <div className="mx-auto justify-center items-center grid 2xl:flex">
        <div className="flex flex-col justify-end items-center 2xl:items-end col-span-1 sm:order-1 order-2 2xl:flex-1 sm:mt-16 mt-6">
          <BannerHeaderSecond />
        </div>
        <div className="sm:flex hidden justify-center items-center md:mt-36 sm:mt-24 -mt-20 col-span-1 md:scale-100 sm:scale-[.85] scale-[.4] sm:order-2 order-1 2xl:flex-1">
          <BannerImage />
        </div>
        <div className="sm:hidden flex justify-center items-center">
          <img
            className="w-[80%] mt-16 mask mask-squircle bg-primary/10"
            src="/wd.naimur.png"
            alt="photo"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSecondary;
