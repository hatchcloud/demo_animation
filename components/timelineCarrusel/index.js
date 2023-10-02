

import { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import styles from './styles.module.css'
import TimeDraw from '../timeDraw'

export default function index({slides}) {
    const widthCarrusel = '70vw'
    const itemCarruel = {
        width: widthCarrusel
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const handlePrevious = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setDirection(1);
        setCurrentIndex(newIndex);
        console.log(currentIndex)
    };
    const handleNext = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setDirection(-1);
        setCurrentIndex(newIndex);
    };

    const icon = {
        hidden: {
          pathLength: 0,
          stroke: "rgba(0, 0, 0, 0)"
        },
        visible: {
          pathLength: 1,
          stroke: "rgba(0, 0, 0, 1)"
        }
      }
        


    const controls = {
        enter: (direction) => ({
          x: direction === 1 ? '-100%' : '100%',
          opacity: 0,
        }),
        center: {
          x: 0,
          opacity: 1,
        },
        exit: (direction) => ({
          x: direction === 1 ? '100%' : '-100%',
          opacity: 0,
        }),
    };

  return (
    <Fragment >
    <section className=' flex justify-between items-center'>
        <a onClick={handlePrevious}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 36L18 24L30 12"   stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
        <div className={styles.carruselContainer} style={itemCarruel}>
            <AnimatePresence initial={false} custom={direction} mode='wait'>
            <motion.div
            key={currentIndex}
            className={styles.item}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            variants={controls}
            transition={{ type: 'tween' }}
            >
                <p className={styles.title}>{slides[currentIndex].title}</p>
                <p className={styles.mainTitle}>{slides[currentIndex].mainTitle}</p>
                <p className={styles.detail}>{slides[currentIndex].detail}</p>
            </motion.div>
            </AnimatePresence>
        </div>
        <a onClick={handleNext}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 36L30 24L18 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    </section>
    <section className={ `flex items-center justify-center pt-10`} style={itemCarruel}>
        <TimeDraw 
         currentIndex={currentIndex}
        />
    </section>
    </Fragment>
  )

}
