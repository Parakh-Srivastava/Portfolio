import React from "react";
import { motion } from "framer-motion";
import MyImage from "../assets/me.jpeg";

const Pic = () => {
  return (
    <motion.div
      className="position-relative d-inline-block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* The Glow Effect behind the image */}
      <div
        className="position-absolute top-50 left-50 translate-middle"
        style={{
          width: "110%",
          height: "110%",
          background:
            "radial-gradient(circle, rgba(197, 163, 88, 0.2) 0%, transparent 70%)",
          filter: "blur(30px)",
          zIndex: -1,
        }}
      />

      {/* The Image Container */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{
          width: "280px",
          height: "280px",
          borderRadius: "30px", // Matches your Bento card style
          border: "2px solid #c5a358", // Your Gold color
          overflow: "hidden",
          padding: "10px",
          background: "#0a0a0a",
        }}
      >
        <img
          src={MyImage} // Put your photo in the public folder
          alt="Profile"
          className="img-fluid"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
            filter: "grayscale(100%) brightness(0.8)", // High-end minimalist look
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Pic;
