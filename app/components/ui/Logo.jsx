'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link href='/'>
      <Image
        className={`logo ${styles.logo}`}
        src='/patryk/logo.webp'
        alt='Patryk Polanski logo'
        width={50}
        height={82}
        loading='eager'
      />
    </Link>
  );
}
