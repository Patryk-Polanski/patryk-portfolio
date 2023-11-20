'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton } from '@/app/utils/emblaExtras';

import Number from '@/app/components/ui/svg/Number';
import ArrowLeft from '../../components/ui/svg/ArrowLeft';
import ArrowRight from '../../components/ui/svg/ArrowRight';

import styles from './PortfolioCarousels.module.css';

import { portfolioData } from './PortfolioData';

const TWEEN_FACTOR = 1;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

export default function PortfolioCarousels() {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateThumbsIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const updateMainIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className={styles.carouselsWrapper}>
      <h3 className={styles.carouselsWrapperHeading}>
        <p className='h2'>{portfolioData[activeIndex].title}</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
          <Number number={activeIndex + 1} />
          <span className='h3'>/</span>
          <Number number={portfolioData.length} />
        </p>
      </h3>
      <MainCarousel
        activeIndex={activeIndex}
        updateThumbsIndex={updateThumbsIndex}
      />
      <CustomThumbsCarousel
        activeIndex={activeIndex}
        updateMainIndex={updateMainIndex}
      />
    </div>
  );
}

function MainCarousel({ updateThumbsIndex, activeIndex }) {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ duration: 50 });
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
  }, [emblaMainApi, setTweenValues]);

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
    <div className={`embla ${styles.mainEmbla}`}>
      <div
        className={`embla__viewport ${styles.mainEmblaViewport}`}
        ref={emblaMainRef}
      >
        <ol className={`embla__container ${styles.mainEmblaContainer}`}>
          {portfolioData.map((project, index) => (
            <li
              className={`embla__slide ${styles.mainEmblaSlide}`}
              key={project.id}
            >
              <div
                className={`embla__scale ${styles.mainEmblaSlideContent}`}
                style={{
                  ...(tweenValues.length && {
                    transform: `scale(${tweenValues[index]})`,
                  }),
                }}
              >
                <Image
                  src={project.imgDesktop}
                  width={2000}
                  height={1078}
                  alt={`screenshot of ${project.title} project`}
                />
              </div>
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
    </div>
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
      <div
        className={`embla__viewport ${styles.thumbsEmblaViewport}`}
        ref={emblaThumbsRef}
      >
        <ol className={`embla__container ${styles.thumbsEmblaContainer}`}>
          {portfolioData.map((project, index) => (
            <li
              className={`embla__slide ${styles.thumbsEmblaSlide} ${
                selectedIndex === project.id
                  ? styles.thumbsEmblaSlideActive
                  : ''
              }`}
              key={project.id}
            >
              <button
                className={`button ${styles.thumbsEmblaSlideContent}`}
                onClick={() => {
                  emblaThumbsApi.scrollTo(project.id);
                  updateMainIndex(project.id);
                }}
              >
                <Image
                  src={project.imgMobile}
                  width={362}
                  height={700}
                  alt={`screenshot of ${project.title} project`}
                />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
