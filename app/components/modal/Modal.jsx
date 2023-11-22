'use client';

import Button from '../ui/Button';
import styles from './Modal.module.css';

export default function Modal() {
  return (
    <div className={styles.modal}>
      <span className={styles.modalBackdrop}></span>
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

        <form
          className={styles.modalForm}
          onSubmit={() => console.log('form submitted')}
        >
          <div className={styles.modalInputWrapper}>
            <input
              type='text'
              email='name'
              id='name'
              placeholder='Your name*'
              required
            />
            <label htmlFor='name'>Your name*</label>
            <span />
          </div>

          <div className={styles.modalInputWrapper}>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email*'
              required
            />
            <label htmlFor='email'>Your Email*</label>
            <span />
          </div>

          <div className={styles.modalInputWrapper}>
            <textarea
              name='message'
              id='message'
              rows='8'
              placeholder='Your message*'
              required
            />
            <label htmlFor='message'>Your message*</label>
            <span />
          </div>
          <div className={styles.modalButtons}>
            <Button variation='primary' onClick={() => {}} text='cancel' />
            <Button
              type='submit'
              variation='primary'
              onClick={() => {}}
              text='send'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
