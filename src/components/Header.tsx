import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      {/* Logo → vuelve al inicio */}
      <Link to="/" className={styles.logo}>
        <span className={styles.logoMain}>World</span>
        <span className={styles.logoAccent}>Travel</span>
      </Link>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
        >
          Inicio
        </NavLink>

        {/* Estos links todavía no tienen ruta real: los dejamos como anclas */}
        <a href="#circuitos" className={styles.navLink}>
          Circuitos
        </a>
        <a href="#ofertas" className={styles.navLink}>
          Ofertas
        </a>
        <a href="#nosotros" className={styles.navLink}>
          Nosotros
        </a>

        <a href="#contacto" className={`${styles.navLink} ${styles.ctaBtn}`}>
          Contacto
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
