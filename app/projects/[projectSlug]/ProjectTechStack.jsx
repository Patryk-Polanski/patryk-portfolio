'use client';

import { motion as m } from 'framer-motion';

import { skillsData } from '@/app/sections/TechStack/skillsData';

import SkillsListItem from '../../sections/TechStack/SkillsListItem';

import styles from './ProjectTechStack.module.css';

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
      delayChildren: 0.4,
    },
  },
};

export default function ProjectTechStack({ project }) {
  const techStack = skillsData.nodes.filter((node) => {
    const foundSkill = project.techStack?.find((el) => el === node.id);
    if (foundSkill) return foundSkill;
  });

  return (
    techStack.length > 0 && (
      <m.ul
        variants={skillsListAnim}
        initial='initial'
        whileInView='visible'
        viewport={{ once: true }}
        className={`text-container ${styles.techStack}`}
      >
        {techStack.map((node, index) => (
          <m.li variants={skillsListAnim} key={node.id}>
            <SkillsListItem node={node} index={index} />
          </m.li>
        ))}
      </m.ul>
    )
  );
}
