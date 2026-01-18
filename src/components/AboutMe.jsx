import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section className="container-fluid px-md-5 py-5 my-5" id="about">
      <div className="row align-items-center">
        
        {/* Left Side: The Narrative */}
        <motion.div 
          className="col-lg-7 mb-5 mb-lg-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h6 className="text-warning text-uppercase fw-bold mb-3" style={{ letterSpacing: '3px' }}>
            01. Background
          </h6>
          <h2 className="display-4 fw-bold mb-4 text-white">
            Engineering logic, <br/> 
            <span className="text-warning">refined by the grind.</span>
          </h2>
          
          <div className="text-secondary-custom fs-5">
            <p className="mb-4">
              I am a developer who thrives at the intersection of <span className="text-white fw-bold">engineering precision</span> and <span className="text-white fw-bold">modern web architecture</span>. 
              My journey isn't just about syntax; it's about solving complex problems.
            </p>

            <p className="mb-4">
              I believe that mastery is a daily choice. That’s why I’m currently 
              committing to a <span className="text-warning fw-bold">365-day LeetCode challenge</span>. 
              This daily discipline in <span className="text-white">C++</span> ensures my algorithmic 
              thinking stays sharp while I build user-centric applications like 
              <span className="text-white fw-bold"> MedLink.AI</span>.
            </p>

            <p>
              When I'm not debugging a Flask backend or refining a React frontend, I’m usually 
              experimenting with <span className="text-info">minimalist digital aesthetics</span> 
              and exploring the potential of AI-driven tools.
            </p>
          </div>
        </motion.div>

        {/* Right Side: The "Stats" Bento Box */}
        <motion.div 
          className="col-lg-4 offset-lg-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-4 custom-card border-warning shadow-lg" style={{ background: '#111' }}>
            <div className="mb-4">
              <h5 className="text-white fw-bold mb-0">Current Focus</h5>
              <small className="text-warning">Active Streak: Day 18</small>
            </div>
            
            <ul className="list-unstyled text-secondary-custom">
              <li className="mb-3 d-flex align-items-start">
                <span className="text-warning me-2">✦</span>
                <div>
                  <strong>Full-Stack Mastery</strong>
                  <br/><small>React, Python Flask, MySQL</small>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span className="text-warning me-2">✦</span>
                <div>
                  <strong>Low-Level Optimization</strong>
                  <br/><small>C++ Data Structures & Algorithms</small>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span className="text-warning me-2">✦</span>
                <div>
                  <strong>AI Integration</strong>
                  <br/><small>Gemini API & LLM Workflows</small>
                </div>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-top border-secondary text-center">
              <a href="#projects" className="btn btn-outline-warning btn-sm px-4 rounded-pill">
                See the Proof
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;