import Image from 'next/image';

export default function Logo() {
  return (
    <Image src='/logo.png' alt='Patryk Polanski logo' width={30} height={50} />
  );
}
