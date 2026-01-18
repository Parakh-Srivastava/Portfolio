import React from 'react';
import { motion } from 'framer-motion';
import Pic from './Pic';

const Hero = () => {
  return (
    <section className="container-fluid vh-100 d-flex align-items-center bg-black px-md-5">
      <div className="row w-100 align-items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-lg-7 text-center text-lg-start"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-4"
          >
            <span className="px-3 py-1 border border-secondary rounded-pill text-gold small fw-bold text-uppercase" style={{ letterSpacing: '2px', fontSize: '0.7rem' }}>
              Fullstack Developer
            </span>
          </motion.div>

          <h1 className="display-1 text-white font-serif fw-bold mb-0">
            Hello, I'm
          </h1>
          <h1 className="display-1 text-warning font-serif fw-bold mb-4">
            Parakh Srivastava
          </h1>

          <p className="lead text-secondary mb-5" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
            Crafting elegant digital experiences through code and creativity. I build beautiful, 
            functional websites that leave lasting impressions.
          </p>

          <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-5">
            <motion.a
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline-gold"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        <div className="col-lg-5 d-flex justify-content-center mt-5 mt-lg-0">
          <Pic />
        </div>

      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-none d-lg-block"
      >
        <div className="border border-secondary rounded-pill mx-auto" style={{ width: '20px', height: '35px', position: 'relative' }}>
          <div className="bg-gold rounded-circle" style={{ width: '4px', height: '4px', position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '8px' }}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;