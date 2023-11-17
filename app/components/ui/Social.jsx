import Button from './Button';

import styles from './Social.module.css';

export default function Social({ position }) {
  const socialPosition = position === 'top-right' ? 'socialTopRight' : '';

  return (
    <div className={` ${styles.social} ${styles[socialPosition]}`}>
      <Button type='primary'>view CV</Button>
      <Button type='primary'>LinkedIn</Button>
      <Button type='primary'>Github</Button>
    </div>
  );
}
