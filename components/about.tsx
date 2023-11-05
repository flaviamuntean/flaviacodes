'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-3xl capitalize mb-8 text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-red-800">
        About me
      </h2>
      <p className="mb-3">
        While working on my <span className="font-medium">Translation</span>{' '}
        degree, I embarked on a journey across Europe, studying and working as a
        translator and language trainer in{' '}
        <span className="italic">
          Romania, Germany, Austria, and Luxembourg
        </span>
        . My passion for{' '}
        <span className="font-medium">computer-assisted translation</span> led
        me to the UK after graduation, where I eventually transitioned from
        natural languages to programming ones.
      </p>
      <p className="mb-3">
        I began as a self-taught programmer, eventually enhancing my skills
        through a coding bootcamp in Lisbon, specialising in{' '}
        <span className="font-medium">full-stack development</span>. With over 5
        years of experience, I've worked with technologies like React, React
        Native, Next.js, Ruby on Rails, and more, constantly exploring new tech.
      </p>

      <p>
        <span className="italic">When I'm not immersed in code</span>, you'll
        find me on the trails, either{' '}
        <span className="font-medium">running</span> or{' '}
        <span className="font-medium">hiking</span>.
      </p>
    </motion.section>
  );
}
