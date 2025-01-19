import Link from "next/link";
import { useState } from "react";
import { FaBuilding, FaPlus, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1>APT-FINDER</h1>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`${styles.navContent} ${isMenuOpen ? styles.active : ""}`}
        >
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              <FaBuilding />
              <span>Apartments</span>
            </Link>
            <Link href="/apartment/add" className={styles.link}>
              <FaPlus />
              <span>Add Apartment</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
