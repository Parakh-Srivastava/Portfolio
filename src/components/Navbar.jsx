import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{
        background: "rgba(10, 10, 10, 0.7)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "1.2rem 0",
      }}
    >
      <div className="container-fluid px-md-5">
        <a className="navbar-brand fw-bold fs-4 tracking-tighter" href="#">
          PARAKH SRIVASTAVA<span className="text-warning">.</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4">
            {["About", "Expertise", "Projects"].map((item) => (
              <li className="nav-item" key={item}>
                <motion.a
                  whileHover={{ scale: 1.1, color: "#ffc107" }}
                  className="nav-link fw-medium"
                  style={{ color: "#a0a0a0", transition: "none" }}
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
