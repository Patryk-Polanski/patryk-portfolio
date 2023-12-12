'use client';

import useEmblaCarousel from 'embla-carousel-react';

import { portfolioData } from '../sections/Portfolio/PortfolioData';

import ProjectNavItem from './ProjectNavItem';

import styles from './ProjectNav.module.css';

export default function ProjectNav() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <nav className={styles.projectNav}>
      <div className={`embla ${styles.embla}`}>
        <div className='embla__viewport' ref={emblaRef}>
          <ul className={`embla__container ${styles.emblaContainer}`}>
            {portfolioData.map((project, index) => (
              <ProjectNavItem key={project.id} project={project} />
            ))}
            {portfolioData.map((project, index) => (
              <ProjectNavItem key={project.id + '2'} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
