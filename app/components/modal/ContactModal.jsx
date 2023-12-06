'use client';

import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { motion as m } from 'framer-motion';

import { debounceFunction, getLongerViewportSide } from '@/app/utils/helpers';

import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

import {
  modalContactBackdrop,
  modalContactBoxBackground,
  modalContactContent,
} from '@/app/utils/motion/contactModal/animations';
import { genericAnimProps } from '@/app/utils/motion/shared/animations';

import styles from './ContactModal.module.css';

export default function Modal({ onCloseForm }) {
  const [windowSize, setWindowSize] = useState(getLongerViewportSide());
  const containerRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log('formData', formData);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    onCloseForm();
  }

  useEffect(() => {
    const debounce = debounceFunction(() => {
      setWindowSize(getLongerViewportSide());
    }, 500);
    const observer = new ResizeObserver(() => {
      debounce();
    });
    observer.observe(containerRef?.current);
  });

  useEffect(() => {
    const closeForm = (e) => {
      if (e.key === 'Escape') {
        onCloseForm();
      }
    };

    window.addEventListener('keydown', closeForm);

    return () => window.removeEventListener('keydown', closeForm);
  }, [onCloseForm]);

  return ReactDOM.createPortal(
    <div className={styles.contactModal} ref={containerRef}>
      <m.span
        className={styles.contactModalBackdrop}
        onClick={onCloseForm}
        key='contact-backdrop'
        variants={modalContactBackdrop}
        custom={windowSize}
        {...genericAnimProps}
      />
      <div className={styles.contactModalBox}>
        <m.div
          className={styles.contactModalBoxBackground}
          style={{ backgroundImage: 'url(/texture.jpg)' }}
          key='contact-box-background'
          variants={modalContactBoxBackground}
          custom={windowSize}
          {...genericAnimProps}
        />
        <div className={styles.contactModalContent}>
          <m.div
            className={styles.contactModalContactDetails}
            variants={modalContactContent}
            custom={0.8}
            {...genericAnimProps}
          >
            <a className='d2' href='mailto:pat.polanski@gmail.com'>
              pat.polanski@gmail.com
            </a>
            <a className='d2' href='tel:+00 44 7526 006047'>
              00 44 7526 006047
            </a>
          </m.div>
          <m.p variants={modalContactContent} custom={1} {...genericAnimProps}>
            or
          </m.p>

          <form
            className={styles.contactModalForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <m.div
              variants={modalContactContent}
              custom={1.2}
              {...genericAnimProps}
            >
              <Input
                type='name'
                name='name'
                id='name'
                placeholder='Your name*'
              />
            </m.div>

            <m.div
              variants={modalContactContent}
              custom={1.4}
              {...genericAnimProps}
            >
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Your email*'
              />
            </m.div>

            <m.div
              variants={modalContactContent}
              custom={1.6}
              {...genericAnimProps}
            >
              <TextArea
                name='message'
                id='message'
                placeholder='Your message*'
              />
            </m.div>

            <m.div
              className={styles.contactModalButtons}
              variants={modalContactContent}
              custom={1.8}
              {...genericAnimProps}
            >
              <Button variation='primary' onClick={onCloseForm} text='cancel' />
              <Button
                type='submit'
                variation='primary'
                text='send'
                onClick={() => {}}
              />
            </m.div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modal-slot')
  );
}
