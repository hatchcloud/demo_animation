
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css'

export default function index({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
      <AnimatePresence initial={false} custom={currentIndex} mode='wait'>
        <motion.div
          key={currentIndex}
          className="slideshow-slide"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3 }}
        >
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].detail}</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={prevSlide}>Anterior</button>
      <button onClick={nextSlide}>Siguiente</button>
    </div>
  );
}



