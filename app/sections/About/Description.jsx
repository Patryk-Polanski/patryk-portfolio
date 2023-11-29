'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
  cubicBezier,
} from 'framer-motion';
import Image from 'next/image';

import { isBrowser } from 'framer-motion';

import styles from './Description.module.css';

let windowWidth = 0;
let windowHeight = 0;

if (isBrowser) {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

export default function Description() {
  const textMask = useRef(null);

  const { scrollYProgress } = useScroll({
    target: textMask,
    offset: ['start end', 'end start'],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.09, 0.1, 0.8],
    [windowWidth, windowWidth, windowWidth * 0.66, windowWidth * 0.66]
  );
  const yTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.8, 1],
    [-20, -20, 0, windowHeight, windowHeight - 400]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.8, 0.82],
    [0, 0, 1, 1, 0]
  );

  const xTransformSpring = useSpring(xTransform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const yTransformSpring = useSpring(yTransform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const transform = useMotionTemplate`translate(${xTransformSpring}px, ${yTransformSpring}px)`;
  const maskPosition = useMotionTemplate`${xTransformSpring}px ${yTransformSpring}px`;
  const WebkitMaskPosition = useMotionTemplate`${xTransformSpring}px ${yTransformSpring}px`;

  return (
    <div className={`d2 ${styles.description}`}>
      <div className={`narrow-container ${styles.descriptionTextWrapper}`}>
        <AnimatedParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </AnimatedParagraph>
        <AnimatedParagraph>
          Venenatis urna cursus eget nunc scelerisque viverra mauris.
          Scelerisque fermentum dui faucibus in ornare quam viverra orci.
          Pretium lectus quam id leo in vitae turpis massa sed.{' '}
        </AnimatedParagraph>
        <AnimatedParagraph>
          Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.
          Aliquam sem et tortor consequat id porta. Sed odio morbi quis commodo.{' '}
        </AnimatedParagraph>
        <AnimatedParagraph>
          Velit euismod in pellentesque massa. Sed odio morbi quis commodo odio.
          Tellus elementum sagittis vitae et leo duis ut diam quam.
        </AnimatedParagraph>
      </div>
      <motion.div
        className={styles.descriptionImage}
        style={{
          transform,
          opacity,
        }}
      >
        <Image
          src='/patryk-image.jpg'
          width={800}
          height={1284}
          alt='image of myself'
        />
      </motion.div>
      <motion.div
        className={styles.descriptionMaskedTextWrapper}
        tabIndex={-1}
        aria-hidden={true}
        ref={textMask}
        style={{
          maskPosition,
          WebkitMaskPosition,
          opacity,
        }}
      >
        <div className='narrow-container'>
          <AnimatedParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </AnimatedParagraph>
          <AnimatedParagraph>
            Venenatis urna cursus eget nunc scelerisque viverra mauris.
            Scelerisque fermentum dui faucibus in ornare quam viverra orci.
            Pretium lectus quam id leo in vitae turpis massa sed.{' '}
          </AnimatedParagraph>
          <AnimatedParagraph>
            Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.
            Aliquam sem et tortor consequat id porta. Sed odio morbi quis
            commodo.{' '}
          </AnimatedParagraph>
          <AnimatedParagraph>
            Velit euismod in pellentesque massa. Sed odio morbi quis commodo
            odio. Tellus elementum sagittis vitae et leo duis ut diam quam.
          </AnimatedParagraph>
        </div>
      </motion.div>
    </div>
  );
}

function AnimatedParagraph({ children }) {
  const paragraph = useRef(null);

  const { scrollYProgress } = useScroll({
    target: paragraph,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const xTransform = useTransform(scrollYProgress, [0, 0.35, 1], [-1000, 0, 0]);

  const xTransformSpring = useSpring(xTransform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.p
      className='animated-paragraph'
      style={{ opacity, x: xTransformSpring }}
      ref={paragraph}
    >
      {children}
    </motion.p>
  );
}
