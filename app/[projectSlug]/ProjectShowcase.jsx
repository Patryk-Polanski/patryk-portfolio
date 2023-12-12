'use client';

import React from 'react';
import { motion as m } from 'framer-motion';

import { skillsData } from '../sections/TechStack/skillsData';

import SectionHeading from '../components/navigation/Heading';
import LinkPortfolio from '../components/ui/svg/LinkPortfolio';
import SkillsListItem from '../sections/TechStack/SkillsListItem';
import Button from '../components/ui/Button';

import styles from './ProjectShowcase.module.css';
import Image from 'next/image';

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

export default function ProjectShowcase({ slug }) {
  return (
    <section className={`section wide-container ${styles.projectShowcase}`}>
      <SectionHeading
        title='Portfolio'
        svgId={slug}
        deviceType={'desktop'}
        element={<LinkPortfolio deviceType={'desktop'} />}
        elementActive={<LinkPortfolio id={slug} deviceType={'desktop'} />}
      />
      <div className={styles.projectOverview}>
        <div className={styles.projectOverviewImages}>
          <Image
            alt='miramar on an ipad'
            src='/miramar-overview-ipad.png'
            width={245}
            height={361}
            className={styles.projectOverviewIpad}
          />
          <Image
            alt='miramar on an imac'
            src='/miramar-overview-imac.png'
            width={675}
            height={506}
            className={styles.projectOverviewImac}
          />
          <Image
            alt='miramar on an iphone'
            src='/miramar-overview-iphone.png'
            width={150}
            height={295}
            className={styles.projectOverviewIphone}
          />
        </div>
        <div className={styles.projectOverviewText}>
          <h2>Overview - {slug}</h2>
          <p>
            A web application built to help traders keep track of all their
            completed trades, keep a trading journal and analyze their trading
            performance with the help of visualisations.
          </p>
          <div className={styles.projectOverviewButtons}>
            <Button
              link='https://www.linkedin.com/in/patryk-polanski/'
              variation='primary'
              newTab={true}
              text='visit Miramar'
            />
            <Button
              link='https://github.com/Patryk-Polanski'
              variation='primary'
              newTab={true}
              text='Github repo'
            />
          </div>
          <ul className={styles.projectOverviewTech}>
            {tempArr.map((node, index) => (
              <m.li variants={skillsListAnim} key={node.id}>
                <SkillsListItem node={node} index={index} />
              </m.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
