'use client';

import { useState, useCallback } from 'react';
import { motion as m, useInView } from 'framer-motion';

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

export default function ProjectTechStack({ project, isShowcaseReady }) {
  const [techStack, _setTechStack] = useState(
    skillsData.nodes.filter((node) => {
      const foundSkill = project.techStack?.find((el) => el === node.id);
      if (foundSkill) return foundSkill;
    })
  );
  const [isTechStackReady, setIsTechStackReady] = useState(false);

  return (
    techStack.length > 0 && (
      <div className={styles.techStackWrapper} id='tech-stack'>
        <m.h2
          style={{ opacity: 0 }}
          whileInView={() =>
            isTechStackReady === false && setIsTechStackReady(true)
          }
        >
          Tech Stack
        </m.h2>
        <m.ul
          variants={skillsListAnim}
          initial='initial'
          animate={isShowcaseReady && isTechStackReady ? 'visible' : ''}
          viewport={{ amount: 0, once: true }}
          className={styles.techStack}
        >
          {techStack.map((node, index) => (
            <m.li variants={skillsListAnim} key={node.id}>
              <SkillsListItem
                node={node}
                index={index}
                isTechStackReady={isTechStackReady}
              />
            </m.li>
          ))}
        </m.ul>
      </div>
    )
  );
}
