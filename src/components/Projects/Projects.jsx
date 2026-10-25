import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

import "./Projects.css";

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "MERN Stack", value: "mern" },
  { label: "Mobile Apps", value: "mobile" },
  
];

const projects = [
  {
    id: 1,
    title: "CARVAN",
    category: "AUTOMOTIVE WEBSITE",
    description:
      "A responsive online car showroom featuring automotive brands, vehicle galleries, detailed specifications, and pre-owned car listings.",
    image: "/assets/images/image.png",
    live: "https://carvan-up.netlify.app/",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    type: ["web"],
  },
  
{
  id: 2,
  title: "LUXURY STAY",
  category: "HOTEL MANAGEMENT SYSTEM",
  description:
    "A modern hotel management website designed to deliver a seamless user experience through an elegant interface and responsive layouts. Built with React, featuring reusable components, organized sections, and a visually appealing design for a premium hotel experience.",
  image: "/assets/images/hotel.png",
  live: "https://hotel-management-system-rho-one.vercel.app/",
  stack: ["React", "JavaScript", "Tailwind CSS"],
  type: ["mern"],
},


  {
id: 3,
title: "Apple Website",
category: "RESPONSIVE WEBSITE",
description:
"A modern, Apple-inspired website featuring a sleek layout, responsive design, and an engaging hero section with a Bootstrap carousel. Built to showcase clean UI design, smooth navigation, and a premium browsing experience.",
image: "/assets/images/apple.png",
live: "https://apple-website-2024pk-git-main-rayan-8a9a.vercel.app/",
stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
type: ["web"],
},

  {
  id: 4,
  title: "WebDev Quiz",
  category: "WEB DEVELOPMENT QUIZ",
  description:
    "An interactive web development quiz app featuring HTML, CSS, and JavaScript questions, a modern interface, and an engaging quiz experience.",
  image: "/assets/images/quizapp.png",
  live: "https://smart-webquiz.netlify.app/",
  stack: ["HTML5", "CSS3", "JavaScript"],
  type: ["web"],
},
{
id: 5,
title: "Smart Calculator",
category: "CALCULATOR WEB APP",
description:
"A modern, colorful calculator web app built with HTML, CSS, and JavaScript. It features a clean interface, vibrant styling, and an interactive experience for performing everyday calculations.",
image: "/assets/images/calculator.png",
live: "https://calculator-smartai.netlify.app/",
stack: ["HTML5", "CSS3", "JavaScript"],
type: ["web"],
},
{
id: 6,
title: "Crystal Age",
category: "CRYSTAL & GEMSTONE WEBSITE",
description:
"A visually engaging crystal and gemstone website featuring an elegant layout, product-focused presentation, and a modern browsing experience. Designed to showcase the beauty of crystals through an attractive and responsive interface.",
image: "/assets/images/crystal.png",
live: "https://crystal-age-stone.netlify.app/",
stack: ["HTML5", "CSS3", "JavaScript"],
type: ["web"],
},
{
id: 7,
title: "Laundry Management System",
category: "WEB APPLICATION",
description:
"A .NET-based laundry management application designed to streamline laundry operations and simplify the management of customers, services, and daily business activities.",
image: "/assets/images/laundry.png",
live: "http://blinkit-rayan.runasp.net/",
stack: [".NET", "C#", "SQL Server"],
type: ["web"],
},
{
id: 8,
title: "React Counter App",
category: "REACT APPLICATION",
description:
"A lightweight and interactive counter application built with React. It demonstrates component-based development and state management, allowing users to update the counter value through a simple and responsive user interface.",
image: "/assets/images/counter.png",
live: "https://counter-app-react2024.netlify.app/",
stack: ["React", "JavaScript", "HTML5", "CSS3"],
type: ["mern"],
},
{
id: 9,
title: "BBQ Maze",
category: "RESTAURANT WEBSITE",
description:
"A modern BBQ restaurant website built with React and Material UI, featuring an appealing interface designed to showcase the restaurant and deliver a smooth, user-friendly browsing experience.",
image: "/assets/images/bbq.png",
live: "https://bbq-maze.netlify.app/",
stack: ["React", "Material UI", "JavaScript", "CSS3"],
type: ["mern"],
},
{
id: 10,
title: "Winter Firebase",
category: "REACT WEB APPLICATION",
description:
"A React-based web application featuring a modern Tailwind CSS interface, API integration using DummyJSON, and Firebase functionality. Built to explore dynamic data fetching, responsive UI development, and Firebase integration within a modern frontend application.",
image: "/assets/images/winter.png",
live: "https://winter-firebase.netlify.app/",
stack: ["React", "Tailwind CSS", "DummyJSON API", "Firebase", "JavaScript"],
type: ["mern"],
},
{
id: 11,
title: "Watch & Wear",
category: "E-COMMERCE WEBSITE",
description:
"A modern e-commerce website designed to showcase watches and fashion products through an engaging interface. Built with a focus on responsive layouts, attractive product presentation, and a smooth browsing experience.",
image: "/assets/images/watch.png",
live: "https://watch-wear.netlify.app/",
stack: ["React", "JavaScript", "CSS3"],
type: ["mern"],
},
{
id: 12,
title: "VANTOUR",
category: "E-COMMERCE WEBSITE",
description:
"A modern e-commerce website showcasing watches, perfumes, and footwear through stylish product cards and interactive sliders. Built with React, featuring dynamic product fetching, reusable components, and a responsive interface for a smooth shopping experience.",
image: "/assets/images/vantour.png",
live: "https://e-commerce-webui-git-main-rayan-8a9a.vercel.app/",
stack: ["React", "JavaScript", "CSS3", "REST API"],
type: ["mern"],
},


{
  id: 13,
  title: "WHATSAPP NATIVE",
  category: "CHAT APPLICATION UI",
  description:
    "A modern WhatsApp-inspired chat application interface built with React Native and Expo. Features a familiar messaging layout with dedicated Chats, Updates, Calls, Communities, and Settings screens. Designed with a clean, responsive interface and reusable components, making it a portfolio-ready demonstration of mobile app development for the web.",
  image: "/assets/images/whatsapp.png",
  live: "https://whatsapp-web-neon-ten.vercel.app/",
  stack: ["React Native", "Expo", "TypeScript", "Expo Router"],
  type: ["mern", "mobile"],
},

];

function ProjectCard({ project, index }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      layout
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
    >
      {/* Project Image */}
      <div className="project-image-wrap">
        {!imageFailed ? (
          <img
            className="project-image"
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-image-placeholder">
            <FolderGit2 size={42} />

            <span>{project.title}</span>

            <small>Project preview</small>
          </div>
        )}

        <div className="project-image-shade" />

        <div className="project-hover-content">
          <span className="project-preview-label">
            PROJECT PREVIEW
          </span>

          {project.live ? (
            <a
              className="project-visit-button"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
              <ArrowUpRight size={18} />
            </a>
          ) : (
            <span className="project-visit-button project-coming-soon">
              Live link coming soon
            </span>
          )}
        </div>

        <span className="project-number">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* Project Details */}
      <div className="project-details">
        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="project-stack">
          {project.stack.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {/* Live Website Link */}
        <div className="project-card-footer">
          {project.live ? (
            <a
              className="project-footer-arrow"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} website`}
            >
              <ExternalLink size={16} />
            </a>
          ) : (
            <span
              className="project-footer-arrow project-link-disabled"
              aria-label="Website link unavailable"
            >
              <ExternalLink size={16} />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.type.includes(activeFilter)
        );

  return (
    <section
      className="projects-section section-wrap"
      id="projects"
    >
      {/* Section Heading */}
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="projects-eyebrow">
            <span />
            SELECTED WORK
          </span>

          <h2>
          My Projects
                                                   
            <br />
            {/* <span>Built with purpose.</span> */}
          </h2>
        </div>

       
      </motion.div>

      {/* Category Filters */}
      <div
        className="projects-filters"
        role="group"
        aria-label="Filter projects"
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`project-filter ${
              activeFilter === filter.value ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.value)}
            aria-pressed={activeFilter === filter.value}
          >
            {filter.label}

            {activeFilter === filter.value && (
              <motion.span
                layoutId="activeFilterDot"
                className="filter-active-dot"
              />
            )}
          </button>
        ))}
      </div>

      {/* Project Count */}
      <div className="projects-results">
        <span>
          SHOWING{" "}
          {String(filteredProjects.length).padStart(2, "0")}{" "}
          PROJECT{filteredProjects.length !== 1 ? "S" : ""}
        </span>

        <span className="projects-results-line" />
      </div>

      {/* Project Cards */}
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="projects-empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <FolderGit2 size={32} />

          <h3>Something new is on the way.</h3>

          <p>
            I'm working on projects in this category.
            Check back soon!
          </p>

          <button
            type="button"
            className="project-reset-filter"
            onClick={() => setActiveFilter("all")}
          >
            View all projects
          </button>
        </motion.div>
      )}
    </section>
  );
}

export default Projects;