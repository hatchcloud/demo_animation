'use client'
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

export default function index() {
    const quote = useRef(null);
    const isInView = useInView(quote, { once: true });

    return (
        <div ref={quote}>
        <motion.div className='text-6xl' style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}  >
            Mauris rhoncus, lorem eget hendrerit commodo, lacus tortor auctor nunc, ac pretium diam massa quis turpis. Aenean ac mauris purus. Mauris ac eleifend lacus, in elementum nibh. Etiam ultricies tortor ac dolor ultricies malesuada.
            </motion.div>
        </div>
    )
}
