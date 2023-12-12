import Image from 'next/image';
import Link from 'next/link';

import styles from './ProjectNav.module.css';

export default function ProjectNavItem({ project }) {
  return (
    <li className={`embla__slide ${styles.emblaSlide}`}>
      <Link href={'/' + project.title.toLowerCase().replaceAll(' ', '-')}>
        <picture>
          <source
            srcSet={project.imgDesktop}
            media='(min-width: 750px)'
            alt={`screenshot of ${project.title} project`}
            width={500}
            height={270}
          />
          <Image
            src={project.imgMobile}
            width={326}
            height={630}
            alt={`screenshot of ${project.title} project`}
          />
        </picture>
      </Link>
    </li>
  );
}
