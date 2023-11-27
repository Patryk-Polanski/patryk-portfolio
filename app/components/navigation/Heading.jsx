import LinkPortfolio from '../ui/svg/LinkPortfolio';
import styles from './Menu.module.css';

export default function SectionHeading({
  title,
  svgId,
  element,
  elementActive,
}) {
  return (
    <h2 className={`${styles.menuLink} ${styles.menuLinkActive}`}>
      <span className='visually-hidden'>{title}</span>
      <div className={`${styles.menuLinkText} ${styles.menuLinkTextActive}`}>
        {element}
      </div>
      <div className={styles.menuLinkTextClipped}>{elementActive}</div>
      <div
        className={`${styles.menuImage} ${styles.menuImageVisible}`}
        style={{ clipPath: `url(#${svgId})` }}
      />
    </h2>
  );
}
