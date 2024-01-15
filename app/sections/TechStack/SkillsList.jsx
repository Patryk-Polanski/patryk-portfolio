'use client';

import { useState } from 'react';
import { motion as m } from 'framer-motion';

import { skillsData } from './skillsData';

import SkillsListItem from './SkillsListItem';

const filteredSkillsData = {
  fullstack: skillsData.nodes.filter((node) => node.type === 'fullstack'),
  cms: skillsData.nodes.filter((node) => node.type === 'cms'),
  databases: skillsData.nodes.filter((node) => node.type === 'databases'),
  design: skillsData.nodes.filter((node) => node.type === 'design'),
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
      delayChildren: 0.4,
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
  const [isTechStackReady, setIsTechStackReady] = useState(false);

  return (
    <>
      <m.h2
        style={{ opacity: 0 }}
        className={styles.skillsListHelper}
        whileInView={() =>
          isTechStackReady === false &&
          window.scrollY > 0 &&
          setIsTechStackReady(true)
        }
      >
        Tech Stack
      </m.h2>
      <m.ul
        variants={skillsListAnim}
        initial='initial'
        animate={isTechStackReady ? 'visible' : ''}
        viewport={{ once: true, amount: 0.1 }}
        className={styles.skillsList}
      >
        <m.li
          key='fullstack'
          {...skillsListHeadingAnim}
          className={styles.skillsListHeading}
        >
          <h3>Frontend</h3>
        </m.li>

        {filteredSkillsData.fullstack.map((node, index) => {
          return (
            <m.li
              variants={skillsListAnim}
              key={node.id}
              viewport={{ amount: 0.1 }}
            >
              <SkillsListItem
                node={node}
                index={index}
                isTechStackReady={isTechStackReady}
              />
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
            <m.li
              variants={skillsListAnim}
              key={node.id}
              viewport={{ amount: 0.1 }}
            >
              <SkillsListItem
                node={node}
                index={index}
                isTechStackReady={isTechStackReady}
              />
            </m.li>
          );
        })}

        <m.li
          key='databases'
          {...skillsListHeadingAnim}
          className={styles.skillsListHeading}
        >
          <h3>Databases</h3>
        </m.li>

        {filteredSkillsData.databases.map((node, index) => {
          return (
            <m.li
              variants={skillsListAnim}
              key={node.id}
              viewport={{ amount: 0.1 }}
            >
              <SkillsListItem
                node={node}
                index={index}
                isTechStackReady={isTechStackReady}
              />
            </m.li>
          );
        })}

        <m.li
          key='design'
          {...skillsListHeadingAnim}
          className={styles.skillsListHeading}
        >
          <h3>Design</h3>
        </m.li>

        {filteredSkillsData.design.map((node, index) => {
          return (
            <m.li
              variants={skillsListAnim}
              key={node.id}
              viewport={{ amount: 0.1 }}
            >
              <SkillsListItem
                node={node}
                index={index}
                isTechStackReady={isTechStackReady}
              />
            </m.li>
          );
        })}
      </m.ul>
    </>
  );
}
