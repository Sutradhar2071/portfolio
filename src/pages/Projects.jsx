import React from "react";
import { Link } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projects = [
  {
    id: 2, // Was 1 before
    name: "Plant Care Tracker",
    screenshots: [
      "/projects/plantcare-1.png",
      "/projects/plantcare-3.png",
      "/projects/plantcare-2.png",
    ],
    detailsPath: "/projects/plantcare",
    liveLink: "https://plant-care-app-92575.web.app/",
    github: "https://github.com/Sutradhar2071/plant-client",
  },
  {
    id: 3, // Was 2 before
    name: "WhereIsIt - Lost & Found",
    screenshots: [
      "/projects/whereisit-1.png",
      "/projects/whereisit-2.png",
      "/projects/whereisit-3.png",
    ],
    detailsPath: "/projects/whereisit",
    liveLink: "https://regal-speculoos-67aec5.netlify.app/",
    github: "https://github.com/Sutradhar2071/whereisit-client",
  },
  {
    id: 1, // Was 3 before
    name: "JobTrack - Job Listing App",
    screenshots: [
      "/projects/jobtrack-1.png",
      "/projects/jobtrack-2.png",
      "/projects/jobtrack-3.png",
    ],
    detailsPath: "/projects/jobtrack",
    liveLink: "https://job-tracker-by-partho1.netlify.app/",
    github: "https://github.com/Sutradhar2071/job-track",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-base-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          My Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 bg-base-200 p-6 rounded-lg shadow-md`}
            >
              {/* Project Carousel */}
              <div className="w-full lg:w-1/2">
                <Carousel
                  showArrows={true}
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  interval={3000}
                >
                  {project.screenshots.map((src, i) => (
                    <div key={i}>
                      <img
                        src={src}
                        alt={`${project.name} Screenshot ${i + 1}`}
                        className="h-64 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-accent">
                  {project.name}
                </h3>
                <p className="text-base-content">
                  A modern web application with responsive UI, secure auth, and
                  dynamic features using MERN Stack.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-primary flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-black flex items-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <Link
                    to={project.detailsPath}
                    className="btn btn-sm btn-info text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
