'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion as m } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton } from '@/app/utils/emblaExtras';

import { useResponsiveContext } from '@/app/context/ResponsiveContext';
import { getProjectLink } from '@/app/utils/helpers';

import Number from '@/app/components/ui/svg/Number';
import ArrowLeft from '../../components/ui/svg/ArrowLeft';
import ArrowRight from '../../components/ui/svg/ArrowRight';

import { portfolioData } from './PortfolioData';

import { portfolioThumbs } from '@/app/utils/motion/portfolioCarousel/animations';
import FadeIn from '@/app/components/wrappers/FadeIn';

import styles from './PortfolioCarousels.module.css';

const TWEEN_FACTOR = 1;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

export default function PortfolioCarousels() {
  const { deviceType } = useResponsiveContext();
  const [activeIndex, setActiveIndex] = useState(0);

  const updateThumbsIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const updateMainIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className={styles.carouselsWrapper}>
      <FadeIn direction='up'>
        <h3 className={styles.carouselsWrapperHeading}>
          <Link
            href={getProjectLink(portfolioData[activeIndex].id)}
            className='h2'
          >
            {portfolioData[activeIndex].title}
          </Link>
          <p>
            <Number number={activeIndex + 1} />
            <span className='h3'>/</span>
            <Number number={portfolioData.length} />
          </p>
        </h3>
      </FadeIn>
      <FadeIn direction='up'>
        <MainCarousel
          activeIndex={activeIndex}
          updateThumbsIndex={updateThumbsIndex}
          deviceType={deviceType}
        />
      </FadeIn>
      <CustomThumbsCarousel
        activeIndex={activeIndex}
        updateMainIndex={updateMainIndex}
      />
    </div>
  );
}

function MainCarousel({ updateThumbsIndex, activeIndex, deviceType }) {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    duration: 50,
    align: 'start',
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tweenValues, setTweenValues] = useState([]);

  const scrollPrev = useCallback(
    () => emblaMainApi && emblaMainApi.scrollPrev(),
    [emblaMainApi]
  );
  const scrollNext = useCallback(
    () => emblaMainApi && emblaMainApi.scrollNext(),
    [emblaMainApi]
  );

  const onSelect = useCallback(
    (emblaApi) => {
      const scrollSnap = emblaApi.selectedScrollSnap();
      setSelectedIndex(scrollSnap);
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
      updateThumbsIndex(scrollSnap);
    },
    [updateThumbsIndex]
  );

  const onScroll = useCallback(() => {
    if (!emblaMainApi) return;

    if (deviceType === 'mobile') {
      setTweenValues([]);
      return;
    }

    const engine = emblaMainApi.internalEngine();
    const scrollProgress = emblaMainApi.scrollProgress();

    const styles = emblaMainApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaMainApi, setTweenValues, deviceType]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onScroll();
    onSelect(emblaMainApi);
    emblaMainApi.on('scroll', onScroll);
    emblaMainApi.on('reInit', onScroll);
    emblaMainApi.on('select', onSelect);
  }, [emblaMainApi, onScroll, onSelect]);

  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollTo(activeIndex);
  }, [activeIndex, emblaMainApi]);

  return (
    <m.div className={`embla ${styles.mainEmbla} hide-cursor`}>
      <div
        className={`embla__viewport ${styles.mainEmblaViewport}`}
        ref={emblaMainRef}
      >
        <ol className={`embla__container ${styles.mainEmblaContainer}`}>
          {portfolioData.map((project, index) => (
            <li
              className={`embla__slide ${styles.mainEmblaSlide} ${
                selectedIndex === project.index && styles.mainEmblaSlideActive
              }`}
              key={project.id}
            >
              <Link
                href={getProjectLink(project.id)}
                className={`embla__scale ${styles.mainEmblaSlideContent}`}
                style={{
                  ...(tweenValues.length && {
                    transform: `scale(${tweenValues[index]})`,
                  }),
                }}
              >
                <picture>
                  <source
                    srcSet={project.imgDesktop}
                    media='(min-width: 750px)'
                    alt={`screenshot of ${project.title} project`}
                    width={2000}
                    height={1078}
                    loading='eager'
                    quality={100}
                  />
                  <Image
                    src={project.imgMobile}
                    width={313}
                    height={604}
                    alt={`screenshot of ${project.title} project`}
                    loading='eager'
                    quality={100}
                  />
                </picture>
              </Link>
            </li>
          ))}
        </ol>
        <div className={`embla__buttons ${styles.mainEmblaButtons} `}>
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled}>
            <ArrowLeft />
          </PrevButton>
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled}>
            <ArrowRight />
          </NextButton>
        </div>
      </div>
    </m.div>
  );
}

function CustomThumbsCarousel({ updateMainIndex, activeIndex }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    align: 'start',
    duration: 40,
  });

  const onSelect = useCallback(
    (emblaApi) => {
      const scrollSnap = emblaApi.selectedScrollSnap();
      setSelectedIndex(scrollSnap);
      updateMainIndex(scrollSnap);
    },
    [updateMainIndex]
  );

  useEffect(() => {
    if (!emblaThumbsApi) return;
    emblaThumbsApi.on('select', onSelect);
  }, [emblaThumbsApi, onSelect]);

  useEffect(() => {
    if (!emblaThumbsApi) return;
    emblaThumbsApi.scrollTo(activeIndex);
  }, [activeIndex, emblaThumbsApi]);

  return (
    <div className={`embla ${styles.thumbsEmbla}`}>
      <m.span
        className={styles.thumbsEmblaBackground}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 1,
        }}
      />
      <m.div
        className={`embla__viewport ${styles.thumbsEmblaViewport}`}
        ref={emblaThumbsRef}
        variants={portfolioThumbs()}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <ol className={`embla__container ${styles.thumbsEmblaContainer}`}>
          {portfolioData.map((project, index) => (
            <li
              className={`embla__slide ${styles.thumbsEmblaSlide} ${
                selectedIndex === project.index
                  ? styles.thumbsEmblaSlideActive
                  : ''
              }`}
              key={project.id}
            >
              <m.div variants={portfolioThumbs()}>
                <button
                  className={`button ${styles.thumbsEmblaSlideContent}`}
                  onClick={() => {
                    emblaThumbsApi.scrollTo(project.index);
                    updateMainIndex(project.index);
                  }}
                >
                  <Image
                    src={project.imgMobile}
                    width={313}
                    height={604}
                    alt={`screenshot of ${project.title} project`}
                    loading='eager'
                    quality={100}
                  />
                </button>
              </m.div>
            </li>
          ))}
        </ol>
      </m.div>
    </div>
  );
}
