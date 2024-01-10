'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <Image
        style={{ width: '3rem', height: 'auto' }}
        className='logo'
        src='/patryk/logo.webp'
        alt='Patryk Polanski logo'
        width={50}
        height={82}
        loading='eager'
      />
    </Link>
  );
}
