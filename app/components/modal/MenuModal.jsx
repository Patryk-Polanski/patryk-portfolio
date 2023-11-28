'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { motion as m } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import HorizontalLine from '../decorative/HorizontalLine';
import Menu from '../navigation/Menu';
import Social from '../ui/Social';
import { portfolioData } from '@/app/sections/Portfolio/PortfolioData';

import styles from './MenuModal.module.css';
import Image from 'next/image';

import {
  modalMenuBackground,
  modalMenuMarquee,
  modalMenuLinks,
  modalMenuSocial,
} from '@/app/utils/motion/menuModal/animations';
import { genericAnimProps } from '@/app/utils/motion/shared/animations';

export default function MenuModal({ onMenuClose }) {
  const hash = window.location.hash;
  const windowSize = window
    ? window.innerHeight > window.innerWidth
      ? window.innerHeight
      : window.innerWidth
    : 1000;

  useEffect(() => {
    const closeForm = (e) => {
      if (e.key === 'Escape') {
        onMenuClose();
      }
    };

    window.addEventListener('keydown', closeForm);

    return () => window.removeEventListener('keydown', closeForm);
  }, [onMenuClose]);

  return (
    <m.div key='modal' className={`wide-container ${styles.menuModal}`}>
      <m.div
        className={styles.menuModalBackground}
        style={{ backgroundImage: 'url(/texture.jpg)' }}
        key='modal-background'
        variants={modalMenuBackground}
        custom={windowSize}
        {...genericAnimProps}
      />
      <m.div
        key='modal-menu-line'
        variants={modalMenuLinks}
        {...genericAnimProps}
      >
        <HorizontalLine
          xTranslate={'20'}
          yTranslate={'-20'}
          left={'0'}
          bottom={'0'}
          height={'120'}
          width={'120'}
        />
      </m.div>
      <m.div
        key='modal-menu-links'
        variants={modalMenuLinks}
        {...genericAnimProps}
      >
        <Menu onLinkClick={onMenuClose} hash={hash} />
      </m.div>
      <m.div
        className={styles.menuModalSocial}
        key='modal-social'
        variants={modalMenuSocial}
        {...genericAnimProps}
      >
        <Social />
      </m.div>
      <m.div
        className={styles.marqueeWrapper}
        key='modal-marquee'
        variants={modalMenuMarquee}
        {...genericAnimProps}
      >
        <Marquee
          className={styles.marquee}
          autoFill={true}
          pauseOnHover={true}
          speed={30}
          direction='down'
        >
          {portfolioData.map((project) => (
            <div key={project.id} className={styles.marqueeItem}>
              <Link href='#' className={styles.marqueeItemLink}>
                <Image
                  className={styles.marqueeItemImage}
                  src={project.imgDesktop}
                  width={330}
                  height={178}
                  alt={`screenshot of ${project.title} project`}
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </m.div>
    </m.div>
  );
}
