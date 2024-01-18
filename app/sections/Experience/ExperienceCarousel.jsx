'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, PrevButton, NextButton } from '@/app/utils/emblaExtras';

import { experienceData } from './ExperienceData';

import ArrowLeft from '../../components/ui/svg/ArrowLeft';
import ArrowRight from '../../components/ui/svg/ArrowRight';

import styles from './ExperienceCarousel.module.css';
import Number from '@/app/components/ui/svg/Number';

export default function ExperienceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.scrollTo(experienceData.length - 1);
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className={`embla ${styles.embla}`}>
        <div className='embla__viewport' ref={emblaRef}>
          <ol className={`embla__container ${styles.emblaContainer}`}>
            {experienceData.map((experience) => (
              <li
                className={`embla__slide ${styles.emblaSlide} `}
                key={experience.company}
              >
                <h3 className={`h2`}>{experience.date}</h3>
                <div className={styles.emblaSlideIntro}>
                  <div className={styles.emblaSlideIntroLeft}>
                    <h4 className='h3'>{experience.jobTitle}</h4>
                    <h5>{experience.location}</h5>
                  </div>
                  <div className={styles.emblaSlideIntroRight}>
                    <a href={experience.companyLink} target='_blank'>
                      <Image
                        src={experience.companyLogo}
                        width={170}
                        height={58}
                        priority={true}
                        alt={`${experience.company} logo`}
                      />
                    </a>
                    <a
                      className='plain-link'
                      href={experience.companyLink}
                      target='_blank'
                    >
                      {experience.companyLink}
                    </a>
                  </div>
                </div>
                <ol className={styles.emblaSlideDetails}>
                  {experience.tasks.map((task, taskIndex) => (
                    <li key={task.id}>
                      <Number number={taskIndex + 1} />
                      <p>{task.task}</p>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
          <div className={`embla__buttons ${styles.emblaButtons} `}>
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled}>
              <ArrowLeft />
            </PrevButton>
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled}>
              <ArrowRight />
            </NextButton>
          </div>
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
    </>
  );
}
