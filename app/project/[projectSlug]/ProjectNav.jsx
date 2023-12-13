'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton } from '../../utils/emblaExtras';

import { portfolioData } from '../../sections/Portfolio/PortfolioData';
const portfolioLength = portfolioData.length;

import ProjectNavItem from './ProjectNavItem';

import styles from './ProjectNav.module.css';

export default function ProjectNav() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const emblaSlidesRef = useRef();
  const router = useRouter();

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback(
    (emblaApi) => {
      const scrollSnap = emblaApi.selectedScrollSnap();
      setSelectedIndex(scrollSnap);
      emblaApi.scrollTo(scrollSnap);
      const link = emblaSlidesRef.current
        .querySelectorAll('li')
        [scrollSnap]?.getAttribute('data-link');
      if (link) router.push(link);
    },
    [setSelectedIndex, router]
  );

  const handleThumbClick = useCallback(
    (link, index, portfolioLength = 0) => {
      const targetIndex = index + portfolioLength;
      setSelectedIndex(targetIndex);
      emblaApi.scrollTo(targetIndex);
      router.push(link);
    },
    [emblaApi, router]
  );

  const getProjectLink = (title) => title.toLowerCase().replaceAll(' ', '-');

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect, selectedIndex]);

  return (
    <nav className={styles.projectNav}>
      <div className={`embla ${styles.embla}`}>
        <div className='embla__viewport' ref={emblaRef}>
          <ul
            className={`embla__container ${styles.emblaContainer}`}
            ref={emblaSlidesRef}
          >
            {portfolioData.map((project, index) => (
              <ProjectNavItem
                key={project.id}
                index={index}
                project={project}
                selected={index === selectedIndex ? true : false}
                onClickParams={[getProjectLink(project.title), index]}
                handleClick={handleThumbClick}
              />
            ))}
            {portfolioData.map((project, index) => (
              <ProjectNavItem
                key={project.id + '-copy'}
                index={index}
                project={project}
                selected={
                  index + portfolioLength === selectedIndex ? true : false
                }
                onClickParams={[
                  getProjectLink(project.title),
                  index,
                  portfolioLength,
                ]}
                handleClick={handleThumbClick}
              />
            ))}
          </ul>
          <div className={`embla__dots ${styles.emblaDots}`}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => scrollTo(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
