'use client';

import { motion as m } from 'framer-motion';

import SkillsListItem from '../sections/TechStack/SkillsListItem';

import styles from './ProjectTechStack.module.css';

const tempArr = [
  {
    id: 'css',
    name: 'CSS',
    color: '#2465F1',
    type: 'frontend',
  },
  {
    id: 'scss',
    name: 'SCSS',
    color: '#D06397',
    type: 'frontend',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    color: '#F0DB4F',
    type: 'frontend',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    color: '#007ACC',
    type: 'frontend',
  },
  {
    id: 'react',
    name: 'React',
    color: '#00D8FF',
    type: 'frontend',
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    color: '#EF01B9',
    type: 'frontend',
  },
  {
    id: 'prisma',
    name: 'Prisma',
    color: '#178C7E',
    type: 'backend',
  },
];

const skillsListAnim = {
  initial: { scale: 0, rotate: 360 },
  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 40,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function ProjectTechStack() {
  return (
    <m.ul
      variants={skillsListAnim}
      initial='initial'
      whileInView='visible'
      viewport={{ once: true }}
      className={`text-container ${styles.techStack}`}
    >
      {tempArr.map((node, index) => (
        <m.li variants={skillsListAnim} key={node.id}>
          <SkillsListItem node={node} index={index} />
        </m.li>
      ))}
    </m.ul>
  );
}
