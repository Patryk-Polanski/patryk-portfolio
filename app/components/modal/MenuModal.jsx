'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import Marquee from 'react-fast-marquee';

import HorizontalLine from '../decorative/HorizontalLine';
import Menu from '../navigation/Menu';
import Social from '../ui/Social';
import { portfolioData } from '@/app/sections/Portfolio/PortfolioData';

import styles from './MenuModal.module.css';
import Image from 'next/image';

export default function MenuModal({ onMenuClose }) {
  const hash = window.location.hash;

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
    <div
      className={`wide-container ${styles.menuModal}`}
      style={{ backgroundImage: 'url(/texture.jpg)' }}
    >
      <HorizontalLine
        xTranslate={'20'}
        yTranslate={'-20'}
        left={'0'}
        bottom={'0'}
        height={'120'}
        width={'120'}
      />
      <Menu onLinkClick={onMenuClose} hash={hash} />
      <Social className={styles.menuModalSocial} />
      <div className={styles.marqueeWrapper}>
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
      </div>
    </div>
  );
}
