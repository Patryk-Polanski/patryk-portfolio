'use client';

import { motion as m } from 'framer-motion';

import styles from './ProjectDescription.module.css';

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

const text = {
  hidden: { opacity: 0, y: -80 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectDescription({ project, isShowcaseReady }) {
  return (
    <m.section
      variants={textContainer}
      initial='hidden'
      whileInView={isShowcaseReady ? 'show' : ''}
      viewport={{ once: true }}
      className={`section text-container ${styles.projectDescription}`}
    >
      {project.challenge?.length > 0 && (
        <>
          <m.h2 variants={text} id='challenge'>
            The challenge
          </m.h2>
          {project.challenge.map((p, index) => (
            <m.p key={index} variants={text}>
              {p}
            </m.p>
          ))}
        </>
      )}
    </m.section>
  );
}
