import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './styles.module.css';

export const Menu = () => {
  return (
    <section className={styles.menu}>
      <NavLink to="/" className={({ isActive }) => cn(styles.link, isActive && styles.active)}>
        Main
      </NavLink>
      <NavLink to="/news" className={({ isActive }) => cn(styles.link, isActive && styles.active)}>
        News
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => cn(styles.link, isActive && styles.active)}>
        About
      </NavLink>
    </section>
  );
};
