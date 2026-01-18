import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  const skills = [
    { name: "React / Flask", level: "95%" }, // Using your Flask knowledge
    { name: "C++ (DSA)", level: "90%" }, // Highlighting your LeetCode grind
    { name: "MySQL / Database Design", level: "85%" },
    { name: "UI/UX Design (Bootstrap)", level: "88%" },
    { name: "Python", level: "80%" },
  ];

  const tags = [
    "JavaScript",
    "Python",
    "MySQL",
    "React",
    "Bootstrap",
    "Git",
    "C++",
    "REST APIs",
  ];

  return (
    <section className="container-fluid px-md-5 py-5 my-5" id="expertise">
      <div className="text-center mb-5">
        <h6
          className="text-warning text-uppercase fw-bold mb-2"
          style={{ letterSpacing: "2px" }}
        >
          Expertise
        </h6>
        <h2 className="display-4 fw-bold text-white">
          Skills & <span className="text-warning">Technologies</span>
        </h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Progress Bars Section */}
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-white fw-bold">{skill.name}</span>
                <span className="text-warning">{skill.level}</span>
              </div>
              <div
                className="progress bg-dark"
                style={{ height: "4px", borderRadius: "10px" }}
              >
                <motion.div
                  className="progress-bar bg-warning"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}

          {/* Tech Tags Section */}
          <div className="mt-5 d-flex flex-wrap justify-content-center gap-3">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "#333" }}
                className="px-4 py-2 border border-secondary rounded-3 text-secondary-custom bg-transparent"
                style={{ cursor: "default", fontSize: "0.9rem" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
