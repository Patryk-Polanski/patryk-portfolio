import Image from 'next/image';

import styles from './Profile.module.css';

export default function Profile() {
  return (
    <div className={`${styles.profile} profile`}>
      <p>Patryk Polanski</p>
      <Image
        src='/patryk/profile.webp'
        width={100}
        height={100}
        alt='Patryk Polanski profile picture'
        loading='eager'
      />
      <p>Web developer</p>
    </div>
  );
}
