"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { assetPath } from "@/lib/utils";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Websites I&apos;ve{" "}
        <span className="text-purple">developed</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 mt-10">
        {projects.map((item) => {
          const projectUrl = item.link.startsWith("http")
            ? item.link
            : `https://${item.link.replace(/^\/+/, "")}`;
          const projectTitle = projectUrl.replace(/^https?:\/\//, "");

          return (
            <div
              className="min-h-[32.5rem] flex items-center justify-center"
              key={item.id}
            >
              <PinContainer title={projectTitle} href={projectUrl}>
                <div className="mb-10 flex h-32 w-[82vw] flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.08] bg-[#13162D] p-5 md:w-[21rem] lg:w-[23rem]">
                  <p className="text-xs uppercase tracking-widest text-purple">
                    Live website
                  </p>
                  <p className="mt-2 truncate text-sm text-white-200" title={projectTitle}>
                    {projectTitle}
                  </p>
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={assetPath(icon)} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
