'use client';

import ReactDOM from 'react-dom';
import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import Button from '../ui/Button';

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
      // setPrevBtnDisabled(!emblaApi.canScrollPrev());
      // setNextBtnDisabled(!emblaApi.canScrollNext());
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
      <span className={styles.galleryModalBackDrop} onClick={onCloseGallery} />
      <Button
        variation='menu'
        className={`button button--menu-is-open ${styles.galleryCloseButton}`}
        onClick={onCloseGallery}
      >
        <span className='button--menu-line'></span>
        <span className='button--menu-line'></span>
        <span className='button--menu-line'></span>
        <span className='visually-hidden'>open menu</span>
      </Button>
      <div
        className={`embla ${styles.embla} hide-cursor`}
        onClick={(e) => {
          if (e.target.closest('li')?.classList.contains('embla__slide'))
            return;
          onCloseGallery();
        }}
      >
        <div
          ref={emblaRef}
          className={`embla__viewport ${styles.emblaViewport}`}
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
                  width={1000}
                  height={1000}
                  alt={`${project.title} mockup`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById('modal-slot')
  );
}
