import Modal from '@/app/components/modal/Modal';

import styles from './CircularIcon.module.css';

export default function CircularIcon() {
  return (
    <>
      <button className={`${styles.circularIcon} button`}>
        <svg viewBox='0 0 200 200' width={200} height={200}>
          <defs>
            <path
              id='circle'
              d='M 100, 100
      m -69, 0
      a 69, 69 0 1, 0 138, 0
      a 69, 69 0 1, 0 -138, 0
      '
            ></path>
          </defs>
          <text width={400}>
            <textPath
              alignmentBaseline='top'
              xlinkHref='#circle'
              className={styles.circularText}
            >
              #opentowork&nbsp;&nbsp;&bull;&nbsp;&nbsp;#opentowork&nbsp;&nbsp;&bull;&nbsp;&nbsp;
            </textPath>
          </text>
        </svg>
        <div className={styles.circularLabel}>
          <span>me 💻</span>
          <span>contact</span>
        </div>
      </button>
      <Modal />
    </>
  );
}
