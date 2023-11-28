'use client';

import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

import {
  modalContactBackdrop,
  modalContactBoxBackground,
  modalContactContent,
} from '@/app/utils/motion/contactModal/animations';

import styles from './ContactModal.module.css';

const genericAnimProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export default function Modal({ onCloseForm }) {
  const windowSize = window
    ? window.innerHeight > window.innerWidth
      ? window.innerHeight
      : window.innerWidth
    : 1000;

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
    const closeForm = (e) => {
      if (e.key === 'Escape') {
        onCloseForm();
      }
    };

    window.addEventListener('keydown', closeForm);

    return () => window.removeEventListener('keydown', closeForm);
  }, [onCloseForm]);

  return ReactDOM.createPortal(
    <div className={styles.contactModal}>
      <motion.span
        className={styles.contactModalBackdrop}
        onClick={onCloseForm}
        key='contact-backdrop'
        variants={modalContactBackdrop}
        custom={windowSize}
        initial='initial'
        animate='animate'
        exit='exit'
      />
      <div className={styles.contactModalBox}>
        <motion.div
          className={styles.contactModalBoxBackground}
          style={{ backgroundImage: 'url(/texture.jpg)' }}
          key='contact-box-background'
          variants={modalContactBoxBackground}
          custom={windowSize}
          initial='initial'
          animate='animate'
          exit='exit'
        />
        <div className={styles.contactModalContent}>
          <motion.div
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
          </motion.div>
          <motion.p
            variants={modalContactContent}
            custom={1}
            {...genericAnimProps}
          >
            or
          </motion.p>

          <form
            className={styles.contactModalForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <motion.div
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
            </motion.div>

            <motion.div
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
            </motion.div>

            <motion.div
              variants={modalContactContent}
              custom={1.6}
              {...genericAnimProps}
            >
              <TextArea
                name='message'
                id='message'
                placeholder='Your message*'
              />
            </motion.div>

            <motion.div
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
            </motion.div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modal-slot')
  );
}
