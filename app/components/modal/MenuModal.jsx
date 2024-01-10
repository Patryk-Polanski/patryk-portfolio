'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion as m } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import {
  debounceFunction,
  getLongerViewportSide,
  getProjectLink,
} from '@/app/utils/helpers';
import { portfolioData } from '@/app/sections/Portfolio/PortfolioData';

import HorizontalLine from '../decorative/HorizontalLine';
import Menu from '../navigation/Menu';
import Social from '../ui/Social';

import styles from './MenuModal.module.css';

import {
  modalMenuBackground,
  modalMenuMarquee,
  modalMenuLinks,
  modalMenuSocial,
  modalMenuLine,
} from '@/app/utils/motion/menuModal/animations';
import { genericAnimProps } from '@/app/utils/motion/shared/animations';

export default function MenuModal({ onMenuClose, deviceType }) {
  const [windowSize, setWindowSize] = useState(getLongerViewportSide());
  const containerRef = useRef();
  const currentSection = document.body.getAttribute('current-section');

  useEffect(() => {
    const debounce = debounceFunction(() => {
      setWindowSize(getLongerViewportSide());
    }, 500);
    const observer = new ResizeObserver(() => {
      debounce();
    });
    observer.observe(containerRef?.current);
  }, []);

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
    <m.div
      key='modal'
      className={`wide-container ${styles.menuModal}`}
      ref={containerRef}
    >
      <>
        <m.div
          className={styles.menuModalBackground}
          style={{
            backgroundImage: 'url(/decorative/texture.webp)',
          }}
          key='modal-background'
          variants={modalMenuBackground}
          custom={windowSize}
          {...genericAnimProps}
        />
        <m.div
          key='modal-menu-line'
          variants={modalMenuLine}
          {...genericAnimProps}
        >
          <HorizontalLine
            xTranslate={'20'}
            yTranslate={'-20'}
            left={'0'}
            bottom={'0'}
            height={'120'}
            width={'120'}
            delay={0}
          />
        </m.div>
        <m.div
          className={styles.menuModalLinksWrapper}
          key='modal-menu-links'
          variants={modalMenuLinks}
          {...genericAnimProps}
        >
          <Menu
            onLinkClick={onMenuClose}
            currentSection={currentSection}
            deviceType={deviceType}
            idModifier='Modal'
          />
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
              <div
                key={project.id}
                className={styles.marqueeItem}
                onClick={onMenuClose}
              >
                <Link
                  href={getProjectLink(project.id)}
                  className={styles.marqueeItemLink}
                >
                  <Image
                    className={styles.marqueeItemImage}
                    src={project.imgThumbnail}
                    width={528}
                    height={285}
                    alt={`screenshot of ${project.title} project`}
                    loading='eager'
                    quality={100}
                  />
                </Link>
              </div>
            ))}
          </Marquee>
        </m.div>
      </>
    </m.div>
  );
}
