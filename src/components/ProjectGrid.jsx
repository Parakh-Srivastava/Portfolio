import React from "react";
import { motion } from "framer-motion";

const myProjects = [
  {
    title: "MedLink.AI",
    description:
      "Built a first-aid assistant that actually works. React frontend talks to Flask backend, integrated Gemini API for smart medical guidance.",
    tech: ["React", "Flask", "Gemini API"],
    link: ["https://medlink-ai-lrf1.onrender.com"],
    target: "_blank",
  },
  {
    title: "LeetCode Grind",
    description:
      "365 days of grinding DSA problems in C++. It's brutal, but necessary. Every problem solved makes me a better engineer.",
    tech: ["C++", "DSA", "MySQL"],
    link: ["https://leetcode.com/u/parakh-srivastava/"],
    target: "_blank",
  },
  {
    title: "Personal Portfolio",
    description:
      "A react based SPA that helped me learn the core about UI/UX and helped be familiar towards frontEnd.",
    tech: ["HTML", "CSS", "Bootstrap", "JS", "React"],
    link: ["#top"],
    target: "",
  },
];

const ProjectGrid = () => {
  return (
    <div className="container py-5" id="projects">
      <h2 className="mb-5 fw-bold text-white">Selected Projects</h2>
      <div className="row g-4">
        {myProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link} // Ensure your data array has a 'link' property
            target={project.target}
            rel="noopener noreferrer"
            className="col-md-6 col-lg-4 text-decoration-none" // Bootstrap class to remove blue link color
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card h-100 custom-card p-3 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title fw-bold text-white mb-0">
                    {project.title}
                  </h5>
                  {/* External Link Icon for better UX */}
                  <span className="text-warning small">↗</span>
                </div>

                <p className="card-text text-secondary-custom small">
                  {project.description}
                </p>

                <div className="mt-auto pt-3">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="badge rounded-pill badge-outline me-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
