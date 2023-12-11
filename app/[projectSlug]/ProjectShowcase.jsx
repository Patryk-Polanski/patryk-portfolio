'use client';

import React from 'react';

import SectionHeading from '../components/navigation/Heading';
import LinkPortfolio from '../components/ui/svg/LinkPortfolio';

import styles from './ProjectShowcase.module.css';
import Button from '../components/ui/Button';

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
        <div className={styles.projectOverviewImages}></div>
        <div className={styles.projectOverviewText}>
          <h2>Overview</h2>
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
        </div>
      </div>
    </section>
  );
}
