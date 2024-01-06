import styles from './Loading.module.css';

export default function loadingPage() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
    </div>
  );
}
