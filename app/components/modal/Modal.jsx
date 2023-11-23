'use client';

import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

import styles from './Modal.module.css';

export default function Modal({ onCloseForm }) {
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

  return ReactDOM.createPortal(
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
          <Input type='name' name='name' id='name' placeholder='Your name*' />

          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Your email*'
          />

          <TextArea name='message' id='message' placeholder='Your message*' />

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
    </div>,
    document.getElementById('modal-slot')
  );
}
