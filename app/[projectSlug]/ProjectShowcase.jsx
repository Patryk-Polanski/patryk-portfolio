'use client';

import React from 'react';
import { motion as m } from 'framer-motion';

import SectionHeading from '../components/navigation/Heading';
import LinkPortfolio from '../components/ui/svg/LinkPortfolio';
import Button from '../components/ui/Button';
import DownArrow from '../sections/Home/DownArrow';
import FadeIn from '../components/wrappers/FadeIn';

import styles from './ProjectShowcase.module.css';
import Image from 'next/image';

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
      <FadeIn
        direction='left'
        className={styles.arrowWrapper}
        inView={false}
        delay={2.5}
      >
        <DownArrow target='#challenge' />
      </FadeIn>
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
          <ul className={styles.projectOverviewTasks}>
            <li className='h2'>UI/UX</li>
            <li className='h2'>Frontend</li>
            <li className='h2'>Backend</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
