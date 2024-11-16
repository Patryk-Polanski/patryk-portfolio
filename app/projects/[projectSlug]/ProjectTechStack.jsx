'use client';

import { useState } from 'react';
import { motion as m } from 'framer-motion';

import { skillsData } from '@/app/sections/TechStack/skillsData';

import {
  skillAnim,
  skillsListAnim,
} from '@/app/utils/motion/skillsList/animations';
import SkillsListItem from '../../sections/TechStack/SkillsListItem';

import styles from './ProjectTechStack.module.css';

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
            <m.li variants={skillAnim} key={node.id}>
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
