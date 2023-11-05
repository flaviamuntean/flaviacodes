'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/30637046?v=4"
              width={192}
              height={192}
              alt="Flavia Muntean"
              quality={95}
              priority={true}
              className="rounded-full h-24 w-24 object-cover border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              className="text-3xl absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👩‍💻
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Flavia.</span> I'm a{' '}
        <span className="font-bold">full-stack developer</span> with a passion
        for building beautiful, functional, and accessible{' '}
        <span className="italic">sites & applications</span>. My focus is{' '}
        <span className="underline">React and React Native</span>.
      </motion.p>
    </section>
  );
};

export default Intro;
