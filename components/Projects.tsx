"use client";
import React, { useEffect, useState } from "react";
import ProjectCardViewOnly from "./ProjectCardViewOnly";
import ProjectCard from "./ProjectCard";

interface Project {
  coverImage: string;
  title: string;
  description: string;
  role: string;
  date: Date;
  blocks: {
    blockHeading: string;
    blockImg: string;
    blockText: string;
  }[];
  urls: {
    urlTitle: string;
    link: string;
  }[];
}

interface ProjectsProps {
  projects: Project[];
  isEditable: Boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, isEditable }) => {
  const [layout, setLayout] = useState({
    mainCard: {
      width: "230px",
      height: "380px",
    },
    sideCard: {
      width: "230px",
      height: "380px",
    },
  });

  const chunkProjects = (projectsArray: Project[] = []) => {
    const chunks = [];
    for (let i = 0; i < projectsArray.length; i += 4) {
      chunks.push(projectsArray.slice(i, i + 4));
    }
    return chunks;
  };

  const projectChunks = chunkProjects(projects);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        // XL screens
        setLayout({
          mainCard: { width: "230px", height: "380px" },
          sideCard: { width: "492px", height: "174px" },
        });
      } else if (window.innerWidth >= 1024) {
        // LG screens
        setLayout({
          mainCard: { width: "230px", height: "380px" },
          sideCard: { width: "400px", height: "174px" },
        });
      } else if (window.innerWidth >= 768) {
        // MD screens
        setLayout({
          mainCard: { width: "230px", height: "380px" },
          sideCard: { width: "230px", height: "380px" },
        });
      } else {
        // SM screens
        setLayout({
          mainCard: { width: "100%", height: "380px" },
          sideCard: { width: "100%", height: "380px" },
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="flex flex-col gap-8 xl:gap-16">
        {projectChunks.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            className="flex flex-col lg:flex-row gap-4 lg:gap-8 max-w-7xl mx-auto w-full"
          >
            {/* Left section */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 flex-1">
              {chunk.slice(0, 2).map((project, index) => (
                <div
                  key={project.title + index}
                  className="w-full"
                  style={{
                    maxWidth:
                      layout.mainCard.width !== "100%"
                        ? layout.mainCard.width
                        : undefined,
                  }}
                >
                  {isEditable ? (
                    <>
                      <ProjectCard
                        project={project}
                        width={layout.mainCard.width}
                        height={layout.mainCard.height}
                      />
                    </>
                  ) : (
                    <>
                      <ProjectCardViewOnly
                        project={project}
                        width={layout.mainCard.width}
                        height={layout.mainCard.height}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Right section */}
            {chunk.slice(2, 4).length > 0 && (
              <div className="flex flex-col gap-4 lg:gap-8 flex-1">
                {chunk.slice(2, 4).map((project, index) => (
                  <div
                    key={project.title + index}
                    className="w-full"
                    style={{
                      maxWidth:
                        layout.sideCard.width !== "100%"
                          ? layout.sideCard.width
                          : undefined,
                    }}
                  >
                    {isEditable ? (
                      <>
                        <ProjectCard
                          project={project}
                          width={layout.sideCard.width}
                          height={layout.sideCard.height}
                        />
                      </>
                    ) : (
                      <>
                        <ProjectCardViewOnly
                          project={project}
                          width={layout.sideCard.width}
                          height={layout.sideCard.height}
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
