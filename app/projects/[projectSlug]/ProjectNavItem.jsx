'use client';

import Image from 'next/image';
import { motion as m } from 'framer-motion';

import { getProjectLink } from '@/app/utils/helpers';

import { portfolioThumbs } from '@/app/utils/motion/portfolioCarousel/animations';

import styles from './ProjectNav.module.css';
import Button from '../../components/ui/Button';

export default function ProjectNavItem({
  project,
  selected,
  handleClick,
  onClickParams,
}) {
  return (
    <li
      className={`embla__slide ${styles.emblaSlide} ${
        selected && styles.emblaSlideSelected
      }`}
      data-link={getProjectLink(project.id)}
    >
      <m.div variants={portfolioThumbs()}>
        <Button onClick={handleClick} onClickParams={onClickParams}>
          <picture>
            <source
              srcSet={project.imgThumbnail}
              media='(min-width: 750px)'
              alt={`screenshot of ${project.title} project`}
              width={352}
              height={190}
              quality={100}
            />
            <Image
              src={project.imgMobile}
              width={313}
              height={604}
              alt={`screenshot of ${project.title} project`}
              priority
              loading='eager'
              quality={100}
            />
          </picture>
        </Button>
      </m.div>
    </li>
  );
}
