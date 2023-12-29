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
      data-link={getProjectLink(project.title)}
    >
      <m.div variants={portfolioThumbs()}>
        <Button onClick={handleClick} onClickParams={onClickParams}>
          <picture>
            <source
              srcSet={project.imgDesktop}
              media='(min-width: 750px)'
              alt={`screenshot of ${project.title} project`}
              width={500}
              height={270}
            />
            <Image
              src={project.imgMobile}
              width={326}
              height={630}
              alt={`screenshot of ${project.title} project`}
            />
          </picture>
        </Button>
      </m.div>
    </li>
  );
}
