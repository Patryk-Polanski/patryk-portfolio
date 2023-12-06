'use client';

import { useRef, useEffect, useState } from 'react';
import {
  motion as m,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from 'framer-motion';
import Image from 'next/image';

import FadeIn from '@/app/components/wrappers/FadeIn';

import styles from './Description.module.css';

export default function Description() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const textMask = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: textMask,
    offset: ['start end', 'end start'],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.09, 0.1, 0.8],
    [windowWidth / -2, '0', '0', '0']
  );
  const yTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.8, 1],
    [-20, -20, 0, windowHeight, windowHeight - 400]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.7, 0.72],
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
      <m.div
        className={styles.descriptionFloatingImage}
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
      </m.div>
      <m.div
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
      </m.div>
      <FadeIn className={styles.descriptionImage} direction='right'>
        <Image
          src='/patryk-image.jpg'
          width={400}
          height={642}
          alt='image of myself'
        />
      </FadeIn>
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
  const xTransform = useTransform(scrollYProgress, [0, 0.35, 1], [1000, 0, 0]);

  const xTransformSpring = useSpring(xTransform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.p
      className='animated-paragraph'
      style={{ opacity, x: xTransformSpring }}
      ref={paragraph}
    >
      {children}
    </m.p>
  );
}
