'use client';

import { motion as m } from 'framer-motion';

import { skillsData } from './skillsData';

import SkillsListItem from './SkillsListItem';

const filteredSkillsData = {
  frontend: skillsData.nodes.filter((node) => node.type === 'frontend'),
  cms: skillsData.nodes.filter((node) => node.type === 'cms'),
  backend: skillsData.nodes.filter((node) => node.type === 'backend'),
};

const skillsListAnim = {
  initial: { scale: 0, rotate: 360 },
  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 40,
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const skillsListHeadingAnim = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { delay: 0.8, duration: 0.4 },
  viewport: { once: true },
};

import styles from './SkillsList.module.css';

export default function SkillsList() {
  return (
    <m.ul
      variants={skillsListAnim}
      initial='initial'
      whileInView='visible'
      viewport={{ once: true }}
      className={styles.skillsList}
    >
      <m.li
        key='frontend'
        {...skillsListHeadingAnim}
        className={styles.skillsListHeading}
      >
        <h3>Frontend</h3>
      </m.li>

      {filteredSkillsData.frontend.map((node, index) => {
        return (
          <m.li variants={skillsListAnim} key={node.id}>
            <SkillsListItem node={node} index={index} />
          </m.li>
        );
      })}

      <m.li
        key='cms'
        {...skillsListHeadingAnim}
        className={styles.skillsListHeading}
      >
        <h3>CMS</h3>
      </m.li>

      {filteredSkillsData.cms.map((node, index) => {
        return (
          <m.li variants={skillsListAnim} key={node.id}>
            <SkillsListItem node={node} index={index} />
          </m.li>
        );
      })}

      <m.li
        key='backend'
        {...skillsListHeadingAnim}
        className={styles.skillsListHeading}
      >
        <h3>Backend</h3>
      </m.li>

      {filteredSkillsData.backend.map((node, index) => {
        return (
          <m.li variants={skillsListAnim} key={node.id}>
            <SkillsListItem node={node} index={index} />
          </m.li>
        );
      })}
    </m.ul>
  );
}
