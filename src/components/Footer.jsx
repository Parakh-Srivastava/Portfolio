import React from 'react';
import { motion } from 'framer-motion';
// Note: You can use Lucide-React or FontAwesome for icons, 
// but I'll use simple SVG paths to keep it copy-paste ready!

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="container-fluid px-md-5 py-5 border-top border-secondary-subtle" style={{ background: '#0a0a0a' }}>
      <div className="row align-items-center">
        
        {/* Left Side: Branding & Status */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h4 className="fw-bold text-white mb-1">Let's Connect</h4>
          <p className="text-secondary-custom small mb-0">
            Open for collaborations and full-stack opportunities in 2026.
          </p>
        </div>

        {/* Right Side: Social Icons & Links */}
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end gap-4">
          
          {/* GitHub Icon */}
          <motion.a 
            href="https://github.com/Parakh-Srivastava" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#fff' }}
            className="text-secondary-custom fs-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </motion.a>

          {/* LinkedIn Icon */}
          <motion.a 
            href="https://www.linkedin.com/in/parakh-srivastava-7510b7399/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#0077b5' }}
            className="text-secondary-custom fs-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </motion.a>

          {/* Email/Contact Icon */}
          <motion.a 
            href="mailto:www.parakhsriv01@hotmail.com" 
            whileHover={{ y: -5, color: '#ffc107' }}
            className="text-secondary-custom fs-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </motion.a>

        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <p className="text-secondary-custom extra-small opacity-50">
            &copy; {currentYear} — Built with React, Bootstrap, and discipline.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;