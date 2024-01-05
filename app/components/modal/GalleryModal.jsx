'use client';

import ReactDOM from 'react-dom';

import styles from './GalleryModal.module.css';

export default function GalleryModal({ onCloseGallery }) {
  return ReactDOM.createPortal(
    <div className={styles.galleryModal}>
      <span className={styles.galleryModalBackDrop} onClick={onCloseGallery} />
      GalleryModal
    </div>,
    document.getElementById('modal-slot')
  );
}
