'use client';

import ReactDOM from 'react-dom';
import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion as m } from 'framer-motion';

import Button from '../ui/Button';

import {
  modalGalleryBackdrop,
  modalGallerySlides,
  modalGalleryClose,
} from '@/app/utils/motion/modal/animations';
import { genericAnimProps } from '@/app/utils/motion/shared/animations';

import styles from './GalleryModal.module.css';

export default function GalleryModal({
  onCloseGallery,
  project,
  activeIndex,
  setActiveIndex,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: false,
  });

  const onSelect = useCallback(
    (emblaApi) => {
      const scrollSnap = emblaApi.selectedScrollSnap();
      setActiveIndex(scrollSnap);
    },
    [setActiveIndex]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(activeIndex);
  }, [emblaApi, activeIndex]);

  useEffect(() => {
    const closeForm = (e) => {
      if (e.key === 'Escape') {
        onCloseGallery();
      }
    };

    window.addEventListener('keydown', closeForm);

    return () => window.removeEventListener('keydown', closeForm);
  }, [onCloseGallery]);

  return ReactDOM.createPortal(
    <div className={styles.galleryModal}>
      <m.span
        className={styles.galleryModalBackDrop}
        onClick={onCloseGallery}
        key='gallery-backdrop'
        variants={modalGalleryBackdrop}
        {...genericAnimProps}
      />
      <m.div
        key='gallery-close'
        variants={modalGalleryClose}
        {...genericAnimProps}
        className={styles.galleryCloseButtonWrapper}
      >
        <Button
          variation='menu'
          className='button button--menu-is-open'
          onClick={onCloseGallery}
        >
          <span className='button--menu-line'></span>
          <span className='button--menu-line'></span>
          <span className='button--menu-line'></span>
          <span className='visually-hidden'>open menu</span>
        </Button>
      </m.div>
      <div
        className={`embla ${styles.embla} hide-cursor`}
        onClick={(e) => {
          if (e.target.closest('li')?.classList.contains('embla__slide'))
            return;
          onCloseGallery();
        }}
      >
        <m.div
          ref={emblaRef}
          className={`embla__viewport ${styles.emblaViewport}`}
          key='gallery-slides'
          variants={modalGallerySlides}
          {...genericAnimProps}
        >
          <ul className={`embla__container ${styles.emblaContainer}`}>
            {project.gallery.map((image, index) => (
              <li
                key={image.src}
                className={`embla__slide ${styles.emblaSlide} ${
                  activeIndex === index && styles.emblaSlideActive
                }`}
                onClick={() => {
                  emblaApi.scrollTo(index);
                  setActiveIndex(index);
                }}
              >
                <Image
                  src={image.src}
                  width={1250}
                  height={1250}
                  alt={`${project.title} mockup`}
                />
              </li>
            ))}
          </ul>
        </m.div>
      </div>
    </div>,
    document.getElementById('modal-slot')
  );
}
