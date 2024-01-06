import Button from './components/ui/Button';

import styles from './NotFound.module.css';

export default function notFoundPage() {
  return (
    <div className={styles.notFound}>
      <h2>404</h2>
      <p>The page could not be found.</p>
      <Button link='/' variation='primary' text='Home' />
    </div>
  );
}
