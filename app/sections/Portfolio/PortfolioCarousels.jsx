'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton } from '@/app/utils/emblaExtras';

import ArrowLeft from '../../components/ui/svg/ArrowLeft';
import ArrowRight from '../../components/ui/svg/ArrowRight';

import styles from './PortfolioCarousels.module.css';

const slides = [
  {
    id: '1',
    title: 'slide 1',
  },
  {
    id: '2',
    title: 'slide 2',
  },
  {
    id: '3',
    title: 'slide 3',
  },
  {
    id: '4',
    title: 'slide 4',
  },
];

const TWEEN_FACTOR = 1;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

export default function PortfolioCarousels() {
  return (
    <div className={styles.carouselsWrapper}>
      <h3 className={`h2 ${styles.carouselsWrapperHeading}`}>
        Restaurante Miramar
      </h3>
      <MainCarousel />
      <CustomThumbsCarousel />
    </div>
  );
}

function MainCarousel() {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
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

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

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

  return (
    <div className={`embla ${styles.mainEmbla}`}>
      <div
        className={`embla__viewport ${styles.mainEmblaViewport}`}
        ref={emblaMainRef}
      >
        <ol className={`embla__container ${styles.mainEmblaContainer}`}>
          {slides.map((slide, index) => (
            <li
              className={`embla__slide ${styles.mainEmblaSlide}`}
              key={slide.id}
            >
              <div
                className={`embla__scale ${styles.mainEmblaSlideContent}`}
                style={{
                  ...(tweenValues.length && {
                    transform: `scale(${tweenValues[index]})`,
                  }),
                }}
              >
                {slide.title}
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

function CustomThumbsCarousel() {
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });

  return (
    <div className={`embla ${styles.thumbsEmbla}`}>
      <div
        className={`embla__viewport ${styles.thumbsEmblaViewport}`}
        ref={emblaThumbsRef}
      >
        <ol className={`embla__container ${styles.thumbsEmblaContainer}`}>
          {slides.map((slide, index) => (
            <li
              className={`embla__slide ${styles.thumbsEmblaSlide}`}
              key={slide.id}
            >
              <div className={styles.thumbsEmblaSlideContent}>
                <h4>{slide.title}</h4>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
