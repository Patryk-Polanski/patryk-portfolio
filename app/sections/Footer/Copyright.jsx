import Image from 'next/image';

const currentYear = new Date().getFullYear();

export default function Copyright() {
  return (
    <small>
      © Copyright {currentYear} by Patryk Polanski | Built with Next.js
      <Image
        style={{ marginLeft: '8px', marginBottom: '-5px' }}
        src={'/decorative/fire.webp'}
        width={22}
        height={22}
        alt='fire emoji'
      />
    </small>
  );
}
