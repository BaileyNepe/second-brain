import { Link } from 'react-router-dom';

import styles from './header.module.css';
const Header = () => {
  return (
    <header className="header">
      <nav role="navigation">
        <div className={styles.menuToggle}>
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
