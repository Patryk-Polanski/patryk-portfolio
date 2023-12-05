import React from 'react';
import Image from 'next/image';

import styles from './SkillsList.module.css';

export default function SkillsListItem({ node }) {
  return (
    <li className={styles.skillsListItem}>
      <div className={styles.skillsListImageWrapper}>
        <Image
          className={styles.skillsListImage}
          src={`/${node.id}-icon.png`}
          alt={`icon - ${node.name}`}
          width={80}
          height={80}
        />
        <span
          style={{ backgroundColor: `${node.color}` }}
          className={styles.skillsListImageBackground}
        />
      </div>
      <h5
        className={styles.skillsListItemHeading}
        style={{ color: `${node.color}` }}
      >
        {node.name}
      </h5>
    </li>
  );
}
