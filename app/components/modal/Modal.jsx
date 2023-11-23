'use client';

import { useEffect, useRef } from 'react';

import Button from '../ui/Button';
import styles from './Modal.module.css';

export default function Modal({ onCloseForm }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

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

    window.addEventListener('keydown', (e) => closeForm(e));

    return () => {
      window.removeEventListener('keydown', closeForm);
    };
  });

  return (
    <div className={styles.modal}>
      <span className={styles.modalBackdrop} onClick={onCloseForm} />
      <div
        className={styles.modalBox}
        style={{ backgroundImage: 'url(/texture.jpg)' }}
      >
        <div className={styles.modalContactDetails}>
          <a className='d2' href='mailto:pat.polanski@gmail.com'>
            pat.polanski@gmail.com
          </a>
          <a className='d2' href='tel:+00 44 7526 006047'>
            00 44 7526 006047
          </a>
        </div>
        <p>or</p>

        <form className={styles.modalForm} onSubmit={(e) => handleSubmit(e)}>
          <div className='input-wrapper'>
            <input
              ref={nameRef}
              className='input'
              type='text'
              name='name'
              id='name'
              placeholder='Your name*'
              required
              onFocus={(e) => {
                if (!e.target.classList.contains('input-focused')) {
                  e.target.classList.add('input-focused');
                }
              }}
              onBlur={(e) => {
                if (e.target.value.length === 0) {
                  e.target.classList.remove('input-focused');
                }
              }}
            />
            <label htmlFor='name'>Your name*</label>
            <span />
          </div>

          <div className='input-wrapper'>
            <input
              ref={emailRef}
              className='input'
              type='email'
              name='email'
              id='email'
              placeholder='Your email*'
              required
              onFocus={(e) => {
                if (!e.target.classList.contains('input-focused')) {
                  e.target.classList.add('input-focused');
                }
              }}
              onBlur={(e) => {
                if (e.target.value.length === 0) {
                  e.target.classList.remove('input-focused');
                }
              }}
            />
            <label htmlFor='email'>Your Email*</label>
            <span />
          </div>

          <div className='input-wrapper'>
            <textarea
              ref={messageRef}
              className='textarea'
              name='message'
              id='message'
              rows='8'
              placeholder='Your message*'
              required
              onFocus={(e) => {
                if (!e.target.classList.contains('input-focused')) {
                  e.target.classList.add('input-focused');
                }
              }}
              onBlur={(e) => {
                if (e.target.value.length === 0) {
                  e.target.classList.remove('input-focused');
                }
              }}
            />
            <label htmlFor='message'>Your message*</label>
            <span />
          </div>

          <div className={styles.modalButtons}>
            <Button variation='primary' onClick={onCloseForm} text='cancel' />
            <Button
              type='submit'
              variation='primary'
              text='send'
              onClick={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
