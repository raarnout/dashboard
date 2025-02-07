import styles from "./Navbar.module.css";
import HamburgerButton from "@/components/buttons/Hamburger";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <HamburgerButton />
    </nav>
  );
}
