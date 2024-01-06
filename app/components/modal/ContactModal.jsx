'use client';

import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion as m } from 'framer-motion';
import { debounceFunction, getLongerViewportSide } from '@/app/utils/helpers';

import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

import {
  modalContactBackdrop,
  modalContactBoxBackground,
  modalContactContent,
  modalContactMessage,
} from '@/app/utils/motion/modal/animations';
import { genericAnimProps } from '@/app/utils/motion/shared/animations';

import styles from './ContactModal.module.css';

export default function ContactModal({ onCloseForm }) {
  const [windowSize, setWindowSize] = useState(getLongerViewportSide());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState(null);

  const containerRef = useRef();
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);
          setFormMessage(
            "Message sent! Thank you for reaching out, I'll be in touch shortly."
          );
          setIsSubmitting(false);
        },
        (error) => {
          setFormMessage('Something went wrong, please try again later.');
          setIsSubmitting(false);
          // console.log(error.text);
        }
      );
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
          style={{
            backgroundImage: 'url(/decorative/texture.jpg)',
          }}
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
            ref={form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <m.div
              variants={modalContactContent}
              custom={1.2}
              {...genericAnimProps}
            >
              <Input
                type='name'
                name='from_name'
                id='from_name'
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
                name='from_email'
                id='from_email'
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
                text={isSubmitting ? 'sending...' : 'send'}
                onClick={() => {}}
              />
            </m.div>
          </form>

          {formMessage && (
            <m.div
              className={styles.contactModalMessage}
              style={{
                backgroundImage: 'url(/decorative/texture.jpg)',
              }}
              variants={modalContactMessage}
              {...genericAnimProps}
            >
              <m.p
                className='h4'
                variants={modalContactContent}
                custom={0.6}
                {...genericAnimProps}
              >
                {formMessage}
              </m.p>
              <m.div
                variants={modalContactContent}
                custom={0.8}
                {...genericAnimProps}
              >
                <Button
                  variation='primary'
                  onClick={onCloseForm}
                  text='close'
                />
              </m.div>
            </m.div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('modal-slot')
  );
}
