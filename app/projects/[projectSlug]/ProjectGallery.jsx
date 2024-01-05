'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion as m, AnimatePresence } from 'framer-motion';

import { portfolioThumbs } from '@/app/utils/motion/portfolioCarousel/animations';

import GalleryModal from '@/app/components/modal/GalleryModal';

import styles from './ProjectGallery.module.css';

export default function ProjectGallery({ project }) {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  function handleOpenGallery() {
    setIsGalleryModalOpen(true);
    document.body.classList.add('frozen');
  }

  function handleCloseGallery() {
    setIsGalleryModalOpen(false);
    document.body.classList.remove('frozen');
  }

  return (
    project.gallery?.length > 0 && (
      <>
        <section className={`section ${styles.projectGallery}`}>
          <m.h2
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Gallery
          </m.h2>
          <div className={styles.projectGalleryGridWrapper}>
            <m.ul
              className={styles.projectGalleryGrid}
              variants={portfolioThumbs(0.3)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {project.gallery.map((image) => (
                <m.li
                  key={image.src}
                  className={styles.projectGalleryItem}
                  variants={portfolioThumbs()}
                  onClick={handleOpenGallery}
                >
                  <Image
                    src={image.src}
                    width={1000}
                    height={1000}
                    alt={`${project.title} mockup`}
                  />
                </m.li>
              ))}
            </m.ul>
          </div>
        </section>
        <AnimatePresence>
          {isGalleryModalOpen && (
            <GalleryModal onCloseGallery={handleCloseGallery} />
          )}
        </AnimatePresence>
      </>
    )
  );
}
