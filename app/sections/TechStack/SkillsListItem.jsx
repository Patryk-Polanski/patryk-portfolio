'use client';

import React from 'react';
import Image from 'next/image';
import { motion as m } from 'framer-motion';

import styles from './SkillsList.module.css';

export default function SkillsListItem({ node, index, isTechStackReady }) {
  return (
    <div className={styles.skillsListItem}>
      <div className={styles.skillsListImageWrapper}>
        <Image
          className={styles.skillsListImage}
          src={`/skills/skill-${node.id}.webp`}
          alt={`icon - ${node.name}`}
          width={100}
          height={100}
        />
        <span
          style={{ backgroundColor: `${node.color}` }}
          className={styles.skillsListImageBackground}
        />
      </div>
      <m.h5
        className={styles.skillsListItemHeading}
        style={{ color: `${node.color}` }}
        initial={{ opacity: 0, translateY: '20px' }}
        animate={isTechStackReady ? { opacity: 1, translateY: '0' } : ''}
        transition={{ delay: 1 + 0.05 * index, duration: 0.4 }}
        viewport={{ once: true }}
      >
        {node.name}
      </m.h5>
    </div>
  );
}
