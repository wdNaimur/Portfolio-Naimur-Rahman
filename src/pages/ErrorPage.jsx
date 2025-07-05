import React, { useEffect } from "react";

import { Link } from "react-router";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Naimur | Error";
  }, []);
  return (
    <div className="min-h-[100vh] my-auto flex justify-center items-center font-poppins bg-secondary/10 pb-10">
      <div>
        <div className="mt-5 grid lg:grid-cols-5 grid-cols-1 container mx-auto px-8 md:px-4 gap-4">
          <div className="flex items-center justify-center col-span-3 lg:order-1 order-2">
            <img
              className="w-full"
              src={`https://i.ibb.co/5X0ptR8Q/Error-Page.png`}
              alt="Error"
            />
          </div>

          <div className="flex flex-col pt-10 col-span-2 w-fit lg:order-2 order-1">
            <h3 className="text-[200px] font-extrabold text-primary">404</h3>
            <h1 className="text-5xl font-bold -mt-12 text-primary opacity-60">
              We couldn't find what you're looking for.
            </h1>
            <div className="mt-6">
              <Link to="/">
                <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-secondary py-1 pl-6 pr-14 font-medium text-base-100 cursor-pointer">
                  <span className="z-10 pr-2">Go Back Home</span>
                  <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-primary transition-[width] group-hover:w-[calc(100%-8px)]">
                    <div className="mr-3.5 flex items-center justify-center">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-neutral-50"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
