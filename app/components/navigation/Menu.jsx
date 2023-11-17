import { AdventProFont } from '@/app/layout';

import styles from './Menu.module.css';

const links = ['Home', 'Portfolio', 'Tech Stack', 'Experience', 'About'];

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a
              className={`${AdventProFont.className} d1 outlined-text ${
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
