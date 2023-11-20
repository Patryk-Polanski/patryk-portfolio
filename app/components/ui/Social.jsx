import Button from './Button';
import styles from './Social.module.css';

export default function Social({ position }) {
  const socialPosition = position === 'top-right' ? 'socialTopRight' : '';

  return (
    <div className={` ${styles.social} ${styles[socialPosition]}`}>
      <Button
        link='patryk-polanski-cv.pdf'
        type='primary'
        newTab={true}
        text='view CV'
      />
      <Button
        link='https://www.linkedin.com/in/patryk-polanski/'
        type='primary'
        newTab={true}
        text='LinkedIn'
      />
      <Button
        link='https://github.com/Patryk-Polanski'
        type='primary'
        newTab={true}
        text='Github'
      />
    </div>
  );
}
