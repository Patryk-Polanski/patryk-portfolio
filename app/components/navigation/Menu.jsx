import styles from './Menu.module.css';

const links = ['Home', 'Portfolio', 'Tech Stack', 'Experience', 'About'];

export default function Menu({ onLinkClick }) {
  return (
    <nav className={styles.menu}>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a
              onClick={onLinkClick}
              className={`d1 outlined-text ${
                link.toLocaleLowerCase() === 'home'
                  ? 'outlined-text--active'
                  : ''
              }`}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
