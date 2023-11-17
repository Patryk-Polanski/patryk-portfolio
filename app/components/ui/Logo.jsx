import Image from 'next/image';

import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Image
      className={styles.logo}
      src='/logo.png'
      alt='Patryk Polanski logo'
      width={30}
      height={50}
    />
  );
}
