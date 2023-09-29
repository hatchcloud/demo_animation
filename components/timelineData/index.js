

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import styles from './styles.module.css'

export default function index({slides}) {
    const carrusel = useRef(null);
    const container = useRef(null);
    const widthCarrusel = '70vw'
    const itemCarruel = {
        width: widthCarrusel
    };
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  return (
    
    <section className=' flex justify-between items-center'>
        <a onClick={handlePrevious}>
            anterior
        </a>
        <div className={styles.carruselContainer} ref={container} style={itemCarruel}>
            <AnimatePresence initial={false} custom={currentIndex} mode='wait'>
            <motion.div
            key={currentIndex}
            className={styles.item}
            initial={(direction) => {
                return {
                  x: direction === 1 ? '-100%' : '100%',
                  opacity: 0,
                };
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={(direction) => {
                return {
                x: direction === 1 ? '100%' : '-100%',
                opacity: 0,
                };
            }}
            transition={{ duration: 0.3 }}
            >
                <p className={styles.title}>{slides[currentIndex].title}</p>
                <p className={styles.mainTitle}>{slides[currentIndex].mainTitle}</p>
                <p className={styles.detail}>{slides[currentIndex].detail}</p>
            </motion.div>
            </AnimatePresence>
        </div>
    

        <a onClick={handleNext}>
            siguiente
        </a>
    </section>
  )

}
