'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <Image
        className='logo'
        src='/logo.png'
        alt='Patryk Polanski logo'
        width={30}
        height={50}
      />
    </Link>
  );
}
