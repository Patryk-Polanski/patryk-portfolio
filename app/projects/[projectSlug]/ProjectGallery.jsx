'use client';

import Image from 'next/image';
import { motion as m } from 'framer-motion';

import { portfolioThumbs } from '@/app/utils/motion/portfolioCarousel/animations';

import styles from './ProjectGallery.module.css';

export default function ProjectGallery({ project }) {
  return (
    project.gallery?.length > 0 && (
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
              >
                <Image
                  src={image.src}
                  width={1000}
                  height={539}
                  alt={`${project.title} mockup`}
                />
              </m.li>
            ))}
          </m.ul>
        </div>
      </section>
    )
  );
}