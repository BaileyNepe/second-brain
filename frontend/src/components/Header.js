import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import styles from './header.module.css';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="header">
      <nav role="navigation">
        <div className={styles.menuToggle}>
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>
          <ul className={styles.menu}>
            <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
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
