import Image from 'next/image';

import styles from './Description.module.css';

export default function Description() {
  return (
    <div className={`d2 narrow-container ${styles.description}`}>
      <Image
        src='/patryk-image.jpg'
        width={1200}
        height={1926}
        alt='image of myself'
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
      </p>
      <p>
        Venenatis urna cursus eget nunc scelerisque viverra mauris. Scelerisque
        fermentum dui faucibus in ornare quam viverra orci. Pretium lectus quam
        id leo in vitae turpis massa sed.{' '}
      </p>
      <p>
        Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.
        Aliquam sem et tortor consequat id porta. Sed odio morbi quis commodo.{' '}
      </p>
      <p>
        Velit euismod in pellentesque massa. Sed odio morbi quis commodo odio.
        Tellus elementum sagittis vitae et leo duis ut diam quam.
      </p>
    </div>
  );
}