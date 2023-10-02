
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css'

export default function index({currentIndex}) {

  const calculateWidth = (index) => {
    let widthPercentage;
    switch (index){
      case 0: widthPercentage = '5%'; break;
      case 1: widthPercentage = '25%'; break;
      case 2: widthPercentage = '50%'; break;
      case 3: widthPercentage = '75%'; break;
      case 4: widthPercentage = '95%'; break;
    }
    //widthPercentage = (index + 1) * 20 + '%';
    return {
      width: widthPercentage,
    };
  };

  const moveDot = (index) => {
    let value;
    switch (index){
      case 0: value = '5%'; break;
      case 1: value = '25%'; break;
      case 2: value = '50%'; break;
      case 3: value = '75%'; break;
      case 4: value = '95%'; break;
    }
    //value = (index + 1) * 20 + '%';
    return {
      left: value,
    };
  };
  const lineTime = calculateWidth(currentIndex);
  const dot = moveDot(currentIndex);

  return (
    <div className={styles.carruselContainer}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
      <div className={styles.progress} style={lineTime}></div>
      <div className={styles.circleMove} style={dot}></div>
    </div>
  );
}



