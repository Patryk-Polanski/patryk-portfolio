import Image from 'next/image';
import styles from './ProjectGallery.module.css';

export default function ProjectGallery() {
  return (
    <section className={`section ${styles.projectGallery}`}>
      <h2>Gallery</h2>
      <div className={styles.projectGalleryGridWrapper}>
        <ul className={styles.projectGalleryGrid}>
          <li className={styles.projectGalleryItem}>
            <Image
              src='/projects/miramar/miramar-desktop.jpg'
              width={1000}
              height={539}
              alt='miramar mockup'
            />
          </li>
          <li className={styles.projectGalleryItem}>
            <Image
              src='/projects/miramar/miramar-desktop.jpg'
              width={1000}
              height={539}
              alt='miramar mockup'
            />
          </li>
          <li className={styles.projectGalleryItem}>
            <Image
              src='/projects/miramar/miramar-desktop.jpg'
              width={1000}
              height={539}
              alt='miramar mockup'
            />
          </li>
          <li className={styles.projectGalleryItem}>
            <Image
              src='/projects/miramar/miramar-desktop.jpg'
              width={1000}
              height={539}
              alt='miramar mockup'
            />
          </li>
          <li className={styles.projectGalleryItem}>
            <Image
              src='/projects/miramar/miramar-desktop.jpg'
              width={1000}
              height={539}
              alt='miramar mockup'
            />
          </li>
          <li className={styles.projectGalleryItem}>
            <Image
              src='/projects/miramar/miramar-desktop.jpg'
              width={1000}
              height={539}
              alt='miramar mockup'
            />
          </li>
          <li className={styles.projectGalleryItem}>
            <Image
              src='/projects/miramar/miramar-desktop.jpg'
              width={1000}
              height={539}
              alt='miramar mockup'
            />
          </li>
          <li className={styles.projectGalleryItem}>
            <Image
              src='/projects/miramar/miramar-desktop.jpg'
              width={1000}
              height={539}
              alt='miramar mockup'
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
